import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import SingleInvoice from '../single-invoice/SingleInvoice';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import InvoiceManagerTableHead from './InvoiceManagerTableHead';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}







const InvoiceManagerTable = ({ activeSingleInvoice, setActiveSingleInvoice, invoices, searchText, setSearchText }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20);


  // single invoice variables
  const [userIcon, setUserIcon] = useState();
  const [mailFrom, setMailfrom] = useState('');
  const [mailTo, setMailTo] = useState('');
  const [mailTitle, setMailTitle] = useState('')
  const [mailSubject, setMailSubject] = useState('');
  const [mailMessage, setMailMessage] = useState('');




  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = invoices.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };


  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 20));
    setPage(0);
  };


  const isSelected = (id) => selected.indexOf(id) !== -1;



  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  
  useEffect(() => {
    if (!searchText) {
      setFilteredInvoices(invoices);
    }

    if (searchText) {
      setFilteredInvoices(invoices.filter( invoice => {
        const filterValue = searchText.toLowerCase();
  
        return (
          invoice.title.toLowerCase().match(filterValue) ||
          invoice.message.toLowerCase().match(filterValue) ||
          invoice.subject.toLowerCase().match(filterValue)
        );
      }));
    }
  }, [searchText]);



  // start sort by date
  const [isDesc, setIsDesc] = useState(true);
  const sortByDateHandler = () => {
    const sortedList = [...filteredInvoices].sort((a, b) => {
      if(isDesc) {
        setIsDesc(!isDesc);
        return Date.parse(b.date) - Date.parse(a.date);
      }

      if(!isDesc) {
        setIsDesc(!isDesc);
        return Date.parse(a.date) - Date.parse(b.date);
      }
    });

    setFilteredInvoices(sortedList);
  }

  // end sort by date



  // start show single mail handler 
  const showSingleInvoiceHanlder = (row) => {
    setActiveSingleInvoice(true);
    setUserIcon(row.logo);
    setMailfrom(row.from);
    setMailTo(row.to);
    setMailTitle(row.title);
    setMailSubject(row.subject);
    setMailMessage(row.message);
  }
  // end show single mail handler





  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item 
          xs = {activeSingleInvoice ? 6 : 12}
        >
          <Paper sx={{ width: '100%', mb: 2}}>
            {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
            <TableContainer
              sx={{
                width: '100%',
                height: '100%'
              }}
            >
              <Table
                aria-labelledby="tableTitle"
                className='invoice-table'
              >
                <InvoiceManagerTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={invoices.length}
                  setSearchText={setSearchText}
                  sortByDateHandler={sortByDateHandler}
                />

                <TableBody>
                  {filteredInvoices.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <>
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row.id)}
                          onClick={() => showSingleInvoiceHanlder(row)}
                          // role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer'}}
                          className='invoice-page_main_invoice-tab-row'
                        >

                          <TableCell padding="checkbox"
                            sx={{ cursor: 'pointer', maxWidth: 100, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            onClick={(event) => {
                              event.stopPropagation();

                              handleClick(event, row.id)
                            }}
                          >
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>

                          <TableCell
                            // component="th"
                            id={labelId}
                            scope="row"
                            align="center"
                            className='invoice-page_main_invoice-tab-row-item'
                          >
                            {row.date}
                          </TableCell>

                          <TableCell
                            scope="row"
                            align="center"
                            className='invoice-page_main_invoice-tab-row-item company'
                          >
                            {row.company}
                          </TableCell>

                          <TableCell
                            scope="row"
                            align="center"
                            className='invoice-page_main_invoice-tab-row-item'
                          >
                            {row.project}
                          </TableCell>
                          
                          <TableCell
                            scope="row"
                            align="center"
                            className='invoice-page_main_invoice-tab-row-item'
                          >
                            {row.amount}
                          </TableCell>

                          <TableCell
                            scope="row"
                            align="center"
                            className='invoice-page_main_invoice-tab-row-item payment'
                          >
                            {row.payment}
                          </TableCell>
                          
                          <TableCell
                            scope="row"
                            align="center"
                            className={`invoice-page_main_invoice-tab-row-item ${row.status === 'paid' ? 'paid' : row.status === 'due' ? 'due' : row.status === 'overdue' ? 'overdue' : 'draft' }`}
                          >
                            <span>
                              {row.status}
                            </span>
                          </TableCell>

                          <TableCell
                            scope="row"
                            align="center"
                            className='invoice-page_main_invoice-tab-row-actions'
                          >
                            <IconButton aria-label="delete">
                              <DeleteOutlineOutlinedIcon />
                            </IconButton>

                            <IconButton aria-label="edit">
                              <DriveFileRenameOutlineOutlinedIcon />
                            </IconButton>

                            <IconButton aria-label="open">
                              <OpenInNewOutlinedIcon />
                            </IconButton>

                            <IconButton aria-label="more">
                              <MoreHorizOutlinedIcon />
                            </IconButton>
                          </TableCell>
                          
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[20, 50, 100]}
              component="div"
              count={invoices.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>

        <Grid item 
          sx={{display: activeSingleInvoice ? 'block' : 'none'}}
            xs = {6}
          >

          <SingleInvoice userIcon={userIcon} mailFrom={mailFrom} mailTo={mailTo} mailSubject={mailSubject} mailTitle={mailTitle} mailMessage={mailMessage} setActiveSingleInvoice={setActiveSingleInvoice} />
        
        
        </Grid>
      </Grid>
    </Box>
  );
}

export default InvoiceManagerTable;