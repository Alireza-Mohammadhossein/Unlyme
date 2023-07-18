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
import Modal from '@mui/material/Modal';
import DeleteInvoicePopup from '../popups/DeleteInvoicePopup';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { toast } from "react-toastify";
import EditNoteIcon from '@mui/icons-material/EditNote';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EditInvoicePopup from '../popups/EditInvoicePopup';
import SendEmailPopup from '../popups/SendEmailPopup';
import AddPaymentPopup from '../popups/AddPaymentPopup';





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

  // start delete invoice popup
  const [deleteInvoicePopup, setDeleteInvoicePopup] = useState(false);
  const [deleteInvoiceId, setDeleteInvoiceId] = useState(false);
  const handleOpenDeleteInvoicePopup = (id) => {
    setDeleteInvoiceId(id);
    setDeleteInvoicePopup(true)
  };
  const handleCloseDeleteInvoicePopup = () => setDeleteInvoicePopup(false);
  // end delete invoice popup


  // start more options
  const options = [
    {
      id: 1,
      icon: <EditNoteIcon />,
      text: 'Quick edit',
      clickFunction: function() {
          toast.error('You have clicked on Quick edit!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleCloseMoreOptions();
      }
    },
    {
      id: 2,
      icon: <MailOutlinedIcon />,
      text: 'Email to client',
      clickFunction: function() {
        handleOpenSendEmailPopup();
        handleCloseMoreOptions();
      }
    },
    {
      id: 3,
      icon: <AddCardOutlinedIcon />,
      text: 'Add new payment',
      clickFunction: function() {
        handleOpenAddPaymentPopup()
        handleCloseMoreOptions();
      }
    },
    {
      id: 4,
      icon: <ContentCopyOutlinedIcon />,
      text: 'Clone invoice',
      clickFunction: function() {
          toast.error('You have clicked on Clone invoice!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleCloseMoreOptions();
      }
    },
    {
      id: 5,
      icon: <SellOutlinedIcon />,
      text: 'Change category',
      clickFunction: function() {
          toast.error('You have clicked on Change category!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleCloseMoreOptions();
      }
    },
    {
      id: 6,
      icon: <AttachmentOutlinedIcon />,
      text: 'Attach to a project',
      clickFunction: function() {
          toast.error('You have clicked on Attach to a project!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleCloseMoreOptions();
      }
    },
    {
      id: 7,
      icon: <LoopOutlinedIcon />,
      text: 'Recurring settings',
      clickFunction: function() {
          toast.error('You have clicked on Recurring settings!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleCloseMoreOptions();
      }
    },
    {
      id: 8,
      icon: <RemoveRedEyeOutlinedIcon />,
      text: 'View payments',
      clickFunction: function() {
          toast.error('You have clicked on View payments!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleCloseMoreOptions();
      }
    },
    {
      id: 9,
      icon: <FileDownloadOutlinedIcon />,
      text: 'Download',
      clickFunction: function() {
          toast.error('You have clicked on Download!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          handleCloseMoreOptions();
      }
    }
  ]

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMoreOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMoreOptions = () => {
    setAnchorEl(null);
  };
  // end more options

  // start send email popup
  const [sendEmailPopup, setSendEmailPopup] = useState(false);
  const [sendEmailId, setSendEmailId] = useState(false);
  const handleOpenSendEmailPopup = (id) => {
    setSendEmailId(id);
    setSendEmailPopup(true)
  };
  const handleCloseSendEmailPopup = () => setSendEmailPopup(false);
  // end send email popup


  // start edit invoice popup
  const [editInvoicePopup, setEditInvoicePopup] = useState(false);
  const [editCreator, setEditCreator] = useState('');
  const [editCreatedDate, setEditCreatedDate] = useState('');

  const handleOpenEditInvoicePopup = (creator, createdDate) => {
    setEditCreator(creator);
    setEditCreatedDate(createdDate)
    setEditInvoicePopup(true);
  };
  const handleCloseEditInvoicePopup = () => setEditInvoicePopup(false);
  // end edit invoice popup


  // start edit invoice popup
  const [addPaymentPopup, setAddPaymentPopup] = useState(false);

  const handleOpenAddPaymentPopup = () => {
    setAddPaymentPopup(true);
  };
  const handleCloseAddPaymentPopup = () => setAddPaymentPopup(false);
  // end edit invoice popup



  return (
    <>
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
                              <IconButton aria-label="delete"
                                 onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenDeleteInvoicePopup(row.id)
                                }}
                              >
                                <DeleteOutlineOutlinedIcon />
                              </IconButton>

                              <IconButton aria-label="edit" 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenEditInvoicePopup(row.creator,row.date);
                                }}
                              >
                                <DriveFileRenameOutlineOutlinedIcon />
                              </IconButton>

                              <IconButton aria-label="open"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenSendEmailPopup(row.id);
                                }}
                              >
                                <OpenInNewOutlinedIcon />
                              </IconButton>

                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? "long-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMoreOptions(e);
                                }}
                               >
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
                className='invoice-pagination'
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


      {/* delete ivoice modal */}
      <Modal
        open={deleteInvoicePopup}
        onClose={() => handleCloseDeleteInvoicePopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-details_add-modal'
      >
        <DeleteInvoicePopup deleteInvoiceId={deleteInvoiceId} handleCloseDeleteInvoicePopup={handleCloseDeleteInvoicePopup} />
      </Modal>


      {/* more options list */}
      <Menu
        className='invoice-page_main_invoice-tab-row-actions_option-list'
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMoreOptions}
        disableScrollLock={true}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            onClick={option.clickFunction}
          >
            <ListItemIcon>
              {option.icon}
            </ListItemIcon>
            <ListItemText>{option.text}</ListItemText>
          </MenuItem>

        ))}
      </Menu>


      {/* edit invoice modal */}
      <Modal
        open={editInvoicePopup}
        onClose={(e) => {
          e.stopPropagation()
          handleCloseEditInvoicePopup()
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-details_add-modal'
      >
        <EditInvoicePopup creator={editCreator} createdDate={editCreatedDate} handleCloseEditInvoicePopup={handleCloseEditInvoicePopup} />
      </Modal>


      {/* send email modal */}
      <Modal
        open={sendEmailPopup}
        onClose={() => handleCloseSendEmailPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-details_add-modal'
      >
        <SendEmailPopup sendEmailId={sendEmailId} handleCloseSendEmailPopup={handleCloseSendEmailPopup} />
      </Modal>


      {/* add new payment modal */}
      <Modal
        open={addPaymentPopup}
        onClose={() => handleCloseAddPaymentPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-details_add-modal'
      >
        <AddPaymentPopup handleCloseAddPaymentPopup={handleCloseAddPaymentPopup} />
      </Modal>

    </>
  );
}

export default InvoiceManagerTable; 
