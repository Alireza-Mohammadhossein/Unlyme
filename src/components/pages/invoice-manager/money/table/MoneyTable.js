import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoneyTableHead from './MoneyTableHead';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import Modal from '@mui/material/Modal';
import DeleteEarningPopup from '../popups/DeleteEarningPopup';
import DeleteExpensePopup from '../popups/DeleteExpensePopup';
import EditEarningPopup from '../popups/EditEarningPopup';
import EditExpensesPopup from '../popups/EditExpensesPopup';
import EarningRecordPopup from '../popups/EarningRecord';
import ExpenseRecordPopup from '../popups/ExpenseRecord';
import incomingIcon from '../../../../../assets/images/invoice-manager/incoming.png';
import outgoingIcon from '../../../../../assets/images/invoice-manager/outgoing.png';
import totalIcon from '../../../../../assets/images/invoice-manager/total.png';
import Tooltip from '@mui/material/Tooltip';
import trashIcon from '../../../../../assets/images/invoice-manager/trash.svg';
import editIcon from '../../../../../assets/images/invoice-manager/edit.svg';
import shareIcon from '../../../../../assets/images/invoice-manager/share.svg';
import moreIcon from '../../../../../assets/images/invoice-manager/more.svg';
import trashColorIcon from '../../../../../assets/images/invoice-manager/trash-color.svg';
import editColorIcon from '../../../../../assets/images/invoice-manager/edit-color.svg';
import shareColorIcon from '../../../../../assets/images/invoice-manager/share-color.svg';
import moreColorIcon from '../../../../../assets/images/invoice-manager/more-color.svg';





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







const MoneyTable = ({ invoices, searchText, setSearchText }) => {
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


 



  // start delete earning popup
  const [deleteEarningPopup, setDeleteEarningPopup] = useState(false);
  const handleOpenDeleteEarningPopup = () => {
    setDeleteEarningPopup(true)
  };
  const handleCloseDeleteEarningPopup = () => {
    setSelectedRowOption([]);
    setDeleteEarningPopup(false)
  };
  // end delete invoice popup

  // start delete earning popup
  const [deleteExpensePopup, setDeleteExpensePopup] = useState(false);
  const handleOpenDeleteExpensePopup = () => {
    setDeleteExpensePopup(true)
  };
  const handleCloseDeleteExpensePopup = () => {
    setSelectedRowOption([]);
    setDeleteExpensePopup(false)
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
  const [editEarningPopup, setEditEarningPopup] = useState(false);

  const handleOpenEditEarningPopup = () => {
    setEditEarningPopup(true);
  };
  const handleCloseEditEarningPopup = () => {
    setSelectedRowOption([]);
    setEditEarningPopup(false)
  };
  // end edit invoice popup

  // start edit invoice popup
  const [editExpensesPopup, setEditExpensesPopup] = useState(false);

  const handleOpenEditExpensesPopup = () => {
    setEditExpensesPopup(true);
  };
  const handleCloseEditExpensesPopup = () => {
    setSelectedRowOption([]);
    setEditExpensesPopup(false)
  };
  // end edit invoice popup

  // start earning record popup
  const [earningRecordPopup, setEarningRecordPopup] = useState(false);
  const handleOpenEarningRecordPopup = () => {
    setEarningRecordPopup(true);
  };
  const handleCloseEarningRecordPopup = () => {
    setSelectedRowOption([]);
    setEarningRecordPopup(false);
  };
  // end earning record popup

  // start expense record popup
  const [expenseRecordPopup, setExpenseRecordPopup] = useState(false);
  const handleOpenExpenseRecordPopup = () => {
    setExpenseRecordPopup(true);
  };
  const handleCloseExpenseRecordPopup = () => {
    setSelectedRowOption([]);
    setExpenseRecordPopup(false);
  };
  // end expense record popup
  


  const [selectedRowOption, setSelectedRowOption] = useState([]);

  return (
    <>
      <div className='money-transactions'>
        <div className='money-transactions-card'>
          <div className='money-transactions-card-info'>
            <div className='money-transactions-card-info-icon'>
              <img src={incomingIcon} />
            </div>
            <div className='money-transactions-card-info-text'>
              <p className='money-transactions-card-info-text-title'>
                Incoming
              </p>

              <p className='money-transactions-card-info-text-subtitle'>
                Earning in June
              </p>
            </div>
          </div>
          
          <div className='money-transactions-card-amount'>
            0.00 CHF
          </div>
        </div>

        <div className='money-transactions-card'>
          <div className='money-transactions-card-info'>
            <div className='money-transactions-card-info-icon'>
              <img src={outgoingIcon} />
            </div>
            <div className='money-transactions-card-info-text'>
              <p className='money-transactions-card-info-text-title'>
                Outgoing
              </p>

              <p className='money-transactions-card-info-text-subtitle'>
                Expenses in June
              </p>
            </div>
          </div>
          
          <div className='money-transactions-card-amount'>
            0.00 CHF
          </div>
        </div>

        <div className='money-transactions-card'>
          <div className='money-transactions-card-info'>
            <div className='money-transactions-card-info-icon'>
              <img src={totalIcon} />
            </div>
            <div className='money-transactions-card-info-text'>
              <p className='money-transactions-card-info-text-title'>
                Total profit
              </p>

              <p className='money-transactions-card-info-text-subtitle'>
                June
              </p>
            </div>
          </div>
          
          <div className='money-transactions-card-amount'>
            0.00 CHF
          </div>
        </div>
      </div>

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
              className='money-table'
            >
               <colgroup>
                  <col style={{width:'45px', boxSizing:'border-box'}}/>
                  <col style={{width:'128px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'200px', boxSizing:'border-box'}}/>
                  <col style={{width:'120px', boxSizing:'border-box'}}/>
               </colgroup>

              <MoneyTableHead
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
                        className='invoice-manager-page_main_money-tab-row'
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
                          className='invoice-manager-page_main_money-tab-row-item'
                        >
                          {row.date}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_money-tab-row-item company'
                        >
                          {row.description}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_money-tab-row-item'
                        >
                          {
                            row.status === 'plus' ?
                            <Tooltip title={`Payment method: ${row.paymentMethod}`} arrow placement="top">
                              <p className='invoice-manager-page_main_money-tab-row-item-plus'>+ {row.amount}</p>
                            </Tooltip>
                              
                            :
                              <Tooltip title={`Payment method: ${row.paymentMethod}`} arrow placement="top">
                                <p className='invoice-manager-page_main_money-tab-row-item-minus'>- {row.amount}</p>
                              </Tooltip>

                          }
                        </TableCell>
                        
                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_money-tab-row-item blue'
                        >
                          {row.client}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_money-tab-row-item'
                        >
                          {row.project}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_money-tab-row-item blue'
                        >
                          {row.invoice}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_money-tab-row-actions'
                        >
                          <IconButton aria-label="delete"
                             onClick={(e) => {
                              // e.stopPropagation();
                              setSelectedRowOption(row);
                              { row.status === 'plus' ? handleOpenDeleteEarningPopup() : handleOpenDeleteExpensePopup() }
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
                              setSelectedRowOption(row);
                              
                              { row.status === 'plus' ? handleOpenEditEarningPopup() : handleOpenEditExpensesPopup() }
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
                              { row.status === 'plus' ? handleOpenEarningRecordPopup() : handleOpenExpenseRecordPopup() }
                            }}
                          >
                            <img src={shareIcon} className='gray-icon' />
                            <img src={shareColorIcon} className='color-icon' />
                            {/* <OpenInNewOutlinedIcon /> */}
                          </IconButton>

                          {/* <MoreOptionsMenu data={row} /> */}
                        </TableCell>
                        
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <TablePagination
            className='money-pagination'
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


      {/* delete earning modal */}
      <Modal
        open={deleteEarningPopup}
        onClose={() => handleCloseDeleteEarningPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <DeleteEarningPopup data={selectedRowOption} handleCloseDeleteEarningPopup={handleCloseDeleteEarningPopup} />
      </Modal>

      {/* delete expense modal */}
      <Modal
        open={deleteExpensePopup}
        onClose={() => handleCloseDeleteExpensePopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <DeleteExpensePopup data={selectedRowOption} handleCloseDeleteExpensePopup={handleCloseDeleteExpensePopup} />
      </Modal>

      {/* edit earning modal */}
      <Modal
        open={editEarningPopup}
        onClose={() => handleCloseEditEarningPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <EditEarningPopup data={selectedRowOption} handleCloseEditEarningPopup={handleCloseEditEarningPopup} />
      </Modal>


      {/* edit expenses modal */}
      <Modal
        open={editExpensesPopup}
        onClose={() => handleCloseEditExpensesPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <EditExpensesPopup data={selectedRowOption} handleCloseEditExpensesPopup={handleCloseEditExpensesPopup} />
      </Modal>


      {/* earning record modal */}
      <Modal
        open={earningRecordPopup}
        onClose={() => handleCloseEarningRecordPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <EarningRecordPopup data={selectedRowOption} handleCloseEarningRecordPopup={handleCloseEarningRecordPopup} />
      </Modal>

      
      {/* earning record modal */}
      <Modal
        open={expenseRecordPopup}
        onClose={() => handleCloseExpenseRecordPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <ExpenseRecordPopup data={selectedRowOption} handleCloseExpenseRecordPopup={handleCloseExpenseRecordPopup} />
      </Modal>

    </>
  );
}

export default MoneyTable; 
