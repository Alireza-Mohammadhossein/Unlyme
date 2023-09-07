import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ClientsTableHead from './ClientsTableHead';
import Modal from '@mui/material/Modal';
import DeleteClientsPopup from '../popups/DeleteClientsPopup';
import EditClientsPopup from '../popups/EditClientsPopup';
import SendEmailPopup from '../popups/SendEmailPopup';
import ClientsRecordPopup from '../popups/ClientsRecord';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import CompanyInfoPopup from '../popups/CompanyInfo';
import trashIcon from '../../../../../assets/images/invoice-manager/trash.svg';
import editIcon from '../../../../../assets/images/invoice-manager/edit.svg';
import shareIcon from '../../../../../assets/images/invoice-manager/share.svg';
import moreIcon from '../../../../../assets/images/invoice-manager/more.svg';
import trashColorIcon from '../../../../../assets/images/invoice-manager/trash-color.svg';
import editColorIcon from '../../../../../assets/images/invoice-manager/edit-color.svg';
import shareColorIcon from '../../../../../assets/images/invoice-manager/share-color.svg';
import moreColorIcon from '../../../../../assets/images/invoice-manager/more-color.svg';
import mailIcon from '../../../../../assets/images/invoice-manager/mail.svg';
import mailColorIcon from '../../../../../assets/images/invoice-manager/mail.svg';




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







const ClientsTable = ({ invoices, searchText, setSearchText }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20);



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = visibleRows.map((n) => n.id);
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
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - invoices.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(invoices, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );


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



  // start company info popup
  const [companyInfoPopup, setCompanyInfoPopup] = useState(false);
  const handleOpenCompanyInfoPopup = () => {
    setCompanyInfoPopup(true);
  };
  const handleCloseCompanyInfoPopup = () => {
    setSelectedRowOption([]);
    setCompanyInfoPopup(false);
  };
  // end company info popup



  // start delete invoice popup
  const [deleteClientsPopup, setDeleteClientsPopup] = useState(false);
  const handleOpenDeleteClientsPopup = () => {
    setDeleteClientsPopup(true)
  };
  const handleCloseDeleteClientsPopup = () => {
    setSelectedRowOption([]);
    setDeleteClientsPopup(false)
  };
  // end delete invoice popup


  // start send email popup
  const [sendEmailPopup, setSendEmailPopup] = useState(false);
  const handleOpenSendEmailPopup = () => {
    setSendEmailPopup(true)
  };
  const handleCloseSendEmailPopup = () => {
    setSelectedRowOption([]);
    setSendEmailPopup(false)
  };
  // end send email popup


  // start edit invoice popup
  const [editClientsPopup, setEditClientsPopup] = useState(false);

  const handleOpenEditClientsPopup = () => {
    setEditClientsPopup(true);
  };
  const handleCloseEditClientsPopup = () => {
    setSelectedRowOption([]);
    setEditClientsPopup(false)
  };
  // end edit invoice popup


  // start client record popup
  const [clientsRecordPopup, setClientsRecordPopup] = useState(false);
  const handleOpenClientsRecordPopup = () => {
    setClientsRecordPopup(true);
  };
  const handleCloseClientsRecordPopup = () => {
    setSelectedRowOption([]);
    setClientsRecordPopup(false);
  };
  // end client record popup
  


  const [selectedRowOption, setSelectedRowOption] = useState([]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
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
              className='clients-table'
            >

                <colgroup>
                  <col style={{width:'45px', boxSizing:'border-box'}}/>
                  <col style={{width:'300px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'120px', boxSizing:'border-box'}}/>
               </colgroup>
              
              <ClientsTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={visibleRows.length}
                setSearchText={setSearchText}
                sortByDateHandler={sortByDateHandler}
                invoices={invoices}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                setPage={setPage}
              />

              <TableBody>
                {/* {filteredInvoices.map((row, index) => { */}
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <>
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row.id)}
                        // onClick={() => showSingleInvoiceHanlder(row)}
                        // role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer'}}
                        className='invoice-manager-page_main_clients-tab-row'
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
                            // inputProps={{
                            //   'aria-labelledby': labelId,
                            // }}
                          />
                        </TableCell>

                        <TableCell
                          // component="th"
                          id={labelId}
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item blue pointer'
                          onClick={(e) => {
                            // e.stopPropagation();
                            setSelectedRowOption(row)
                            handleOpenCompanyInfoPopup();
                          }}
                        >
                          {row.company}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item'
                        >
                          <div className='owner'>
                            <Avatar alt={row.owner} src={row.ownerImage} />
                            <p>
                              {row.owner}
                            </p>
                          </div>
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item'
                        >
                          {row.projectsNumber}
                        </TableCell>
                        
                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item'
                        >
                          ${row.invoicesAmount}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item tag'
                        >
                          <Chip label={row.tags[0]} />
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item category'
                        >
                          <Chip label={row.category} />
                        </TableCell>
                        
                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-item status'
                        >
                            {
                              row.status ? <Chip label="Active" className='active' /> : <Chip label='Not Active' className='notactive' />
                            }
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_clients-tab-row-actions'
                        >
                          <IconButton aria-label="delete"
                             onClick={(e) => {
                              // e.stopPropagation();
                              setSelectedRowOption(row);
                              handleOpenDeleteClientsPopup()
                            }}
                          >
                            {/* <DeleteOutlineOutlinedIcon /> */}
                            <img src={trashIcon} className='gray-icon' />
                            <img src={trashColorIcon} className='color-icon' />
                          </IconButton>

                          <IconButton aria-label="edit" 
                            onClick={(e) => {
                              // e.stopPropagation();
                              // console.log('row', row)
                              setSelectedRowOption(row)
                              handleOpenEditClientsPopup();
                            }}
                          >
                            {/* <DriveFileRenameOutlineOutlinedIcon /> */}
                            <img src={editIcon} className='gray-icon' />
                            <img src={editColorIcon} className='color-icon' />
                          </IconButton>
                          
                          <IconButton aria-label="open"
                            onClick={(e) => {
                              // e.stopPropagation();
                              setSelectedRowOption(row)
                              handleOpenSendEmailPopup();
                            }}
                          >
                            {/* <MailOutlinedIcon /> */}
                            <img src={mailIcon} className='gray-icon' />
                            <img src={mailColorIcon} className='color-icon' />
                          </IconButton>

                          <IconButton aria-label="open"
                            onClick={(e) => {
                              // e.stopPropagation();
                              setSelectedRowOption(row)
                              handleOpenClientsRecordPopup();
                            }}
                          >
                            {/* <OpenInNewOutlinedIcon /> */}
                            <img src={shareIcon} className='gray-icon' />
                            <img src={shareColorIcon} className='color-icon' />
                          </IconButton>

                        </TableCell>
                        
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            className='invoices-pagination'
            rowsPerPageOptions={[20, 50, 100]}
            component="div"
            count={invoices.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </Box>



      {/* company info modal */}
      <Modal
        open={companyInfoPopup}
        onClose={() => handleCloseCompanyInfoPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <CompanyInfoPopup data={selectedRowOption} handleCloseCompanyInfoPopup={handleCloseCompanyInfoPopup} />
      </Modal>


      {/* delete ivoice modal */}
      <Modal
        open={deleteClientsPopup}
        onClose={() => handleCloseDeleteClientsPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <DeleteClientsPopup data={selectedRowOption} handleCloseDeleteClientsPopup={handleCloseDeleteClientsPopup} />
      </Modal>


      {/* edit invoice modal */}
      <Modal
        open={editClientsPopup}
        onClose={() => handleCloseEditClientsPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <EditClientsPopup data={selectedRowOption} handleCloseEditClientsPopup={handleCloseEditClientsPopup} />
      </Modal>


      {/* send email modal */}
      <Modal
        open={sendEmailPopup}
        onClose={() => handleCloseSendEmailPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <SendEmailPopup data={selectedRowOption} handleCloseSendEmailPopup={handleCloseSendEmailPopup} />
      </Modal>


      {/* client record modal */}
      <Modal
        open={clientsRecordPopup}
        onClose={() => handleCloseClientsRecordPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <ClientsRecordPopup data={selectedRowOption} handleCloseClientsRecordPopup={handleCloseClientsRecordPopup} />
      </Modal>

    </>
  );
}

export default ClientsTable; 
