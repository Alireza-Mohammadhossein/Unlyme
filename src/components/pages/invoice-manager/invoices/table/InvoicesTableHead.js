import React, { useState }from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { toast } from "react-toastify";
import TablePagination from '@mui/material/TablePagination';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Modal from '@mui/material/Modal';
import ChangeCategoryPopup from '../popups/ChangeCategoryPopup';
import DeleteInvoicePopup from '../popups/DeleteInvoicePopup';






const headCells = [
    {
      id: 1,
      numeric: false,
      disablePadding: true,
      label: 'Logo',
      sortable: false,
      with: 70
    },
    {
      id: 2,
      numeric: true,
      disablePadding: true,
      label: 'Starred',
      sortable: false,
      with: 70
    },
    {
      id: 3,
      numeric: true,
      disablePadding: true,
      label: 'Title',
      sortable: false,
      with: 130
    },
    {
      id: 4,
      numeric: true,
      disablePadding: true,
      label: 'Message',
      sortable: false,
      with: 190
    },
    {
      id: 5,
      numeric: true,
      disablePadding: true,
      label: 'Attached',
      sortable: false,
      with: 70
    },
    {
      id: 6,
      numeric: true,
      disablePadding: true,
      label: 'Date',
      with: 130
    },
];


  
const InvoicesTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, setSearchText, sortByDateHandler, invoices, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, setPage} =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };


    const headColumns = [
      // {
      //   id: 1,
      //   numeric: false,
      //   disablePadding: true,
      //   label: '',
      //   sortable: false,
      //   with: 70
      // },
      {
        id: 2,
        numeric: true,
        disablePadding: true,
        label: 'Date',
        sortable: false,
      },
      {
        id: 3,
        numeric: true,
        disablePadding: true,
        label: 'Company',
        sortable: false,
      },
      {
        id: 4,
        numeric: true,
        disablePadding: true,
        label: 'Project',
        sortable: false,
      },
      {
        id: 5,
        numeric: true,
        disablePadding: true,
        label: 'Amount',
        sortable: false,
      },
      {
        id: 6,
        numeric: true,
        disablePadding: true,
        label: 'Payments',
      },
      {
        id: 7,
        numeric: true,
        disablePadding: true,
        label: 'Status',
      },
      {
        id: 8,
        numeric: true,
        disablePadding: true,
        label: 'Actions',
      },
    ];
  
  
  
    const options = ["Edit", "Add description", "Delete"];
    const ITEM_HEIGHT = 48;
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    const handlePrevClick = () => {
      setPage(page - 1);
    };
  
    const handleNextClick = () => {
      setPage(page + 1);
    };




    // start delete invoice popup
    const [deleteInvoicePopup, setDeleteInvoicePopup] = useState(false);
    // const [deleteInvoiceId, setDeleteInvoiceId] = useState(false);
    const handleOpenDeleteInvoicePopup = () => {
      // setDeleteInvoiceId(id);
      setDeleteInvoicePopup(true)
    };
    const handleCloseDeleteInvoicePopup = () => {
      setDeleteInvoicePopup(false)
    };
    // end delete invoice popup


    // start change category popup
    const [changeCategoryPopup, setChangeCategoryPopup] = useState(false);
    const handleOpenChangeCategoryPopup = () => {
      setChangeCategoryPopup(true);
    };
    const handleCloseChangeCategoryPopup = () => {
      setChangeCategoryPopup(false)
    };
    // end change category popup


    return (
      <>
        <TableHead className='invoices-header'>
          <TableRow className='invoices-header-row'>
            <TableCell padding="checkbox" className='invoices-header-row-selected'>
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
    
            
            <TableCell padding="checkbox" className='invoices-header-row-option'>
              {numSelected > 0 ?
                numSelected
              : 
                ''
              }
            </TableCell>

            <TableCell colSpan={4} padding="checkbox" className='invoices-header-row-option'>
              {numSelected > 0 ?
                <div className='invoices-header-row-option-container'>
                  <Button
                    startIcon={<DeleteOutlineOutlinedIcon />}
                    onClick={handleOpenDeleteInvoicePopup}
                  > 
                    Delete
                  </Button>
                  <Button 
                    startIcon={<LocalOfferOutlinedIcon />}
                    onClick={handleOpenChangeCategoryPopup}
                  >
                    Change category
                  </Button>
                </div>
              : 
                ''
              }
            </TableCell>
    
            <TableCell padding="checkbox" className='email-header_selected'>
              {numSelected > 0 ?
                  <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon sx={{ color: '#00000080' }} />
                  </IconButton>
    
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock = {true}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    <MenuItem onClick={() => {
                      toast.error(`You have clicked on Edit selected rows`, {
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
                      handleClose()
                      }}
                    >
                      Edit
                    </MenuItem>

                    <MenuItem onClick={() => {
                      toast.error(`You have clicked on Add description selected rows`, {
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
                      handleClose()
                      }}
                    >
                      Add description
                    </MenuItem>
                    
                    <MenuItem onClick={() => {
                      toast.error(`You have clicked on Delete selected rows`, {
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
                      handleClose()
                      }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              : 
                ''
              }
            </TableCell>
    
            <TableCell colSpan={1} padding="checkbox" className='email-header_pagination'>
              <TablePagination
                className='invoices_pagination'
                // rowsPerPageOptions={[20, 50, 100]}
                // labelDisplayedRows = {({from, to, count}) => `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`}
                // labelDisplayedRows = {({from, to, count, page}) => `${page + 1} of ${Math.ceil(count / 20)}`}
                labelDisplayedRows = {({from, to, count, page}) => ``}
                rowsPerPageOptions={[]}
                component="div"
                count={invoices.length}
                rowsPerPage={rowsPerPage}
                page={page}
                // onPageChange={handleChangePage}
                ActionsComponent={() => (
                  <div className='invoices_pagination-container'>
                    <IconButton
                      onClick={handlePrevClick}
                      disabled={page === 0}
                      aria-label="previous page"
                    >
                      <ChevronLeftIcon />
                    </IconButton>

                    <p><span>{page+1}</span><span>of</span><span>{Math.ceil(invoices.length / 20)}</span></p>

                    <IconButton
                      onClick={handleNextClick}
                      disabled={page >= Math.ceil(invoices.length / rowsPerPage) - 1}
                      aria-label="next page"
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </div>
                )}
                // onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableCell>
    
                  {/* <TableCell
                    // align={headCell.numeric ? 'right' : 'left'}
                    align="center"
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    // sortDirection={orderBy === headCell.id ? order : false}
                    onClick={sortByDateHandler}
                    sx={{ cursor: 'pointer', maxHeight: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                      Date
                      <ImportExportIcon sx={{color: '#999999', verticalAlign : 'middle'}} />
                  </TableCell>
    
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label === 'Date' ? 'Date' : ''}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>  */}
          </TableRow>

          <TableRow className='invoices-header-row'>
            <TableCell>
              
            </TableCell>
          
          {headColumns.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="center"
              className='invoices-header-row-cell'
              // align={headCell.numeric ? 'right' : 'left'}
              // padding={headCell.disablePadding ? 'none' : 'normal'}
              // sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.label}
            </TableCell>
          ))}
          </TableRow>
        </TableHead>



        {/* delete ivoice modal */}
        <Modal
          open={deleteInvoicePopup}
          onClose={() => handleCloseDeleteInvoicePopup()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='cloud-page__header_invoice-manager-details_add-modal'
        >
          <DeleteInvoicePopup handleCloseDeleteInvoicePopup={handleCloseDeleteInvoicePopup} />
        </Modal>


        {/* change category modal */}
        <Modal
          open={changeCategoryPopup}
          onClose={() => handleCloseChangeCategoryPopup()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='cloud-page__header_invoice-manager-details_add-modal'
        >
          <ChangeCategoryPopup handleCloseChangeCategoryPopup={handleCloseChangeCategoryPopup} />
        </Modal>
      </>
    );
}

export default InvoicesTableHead;