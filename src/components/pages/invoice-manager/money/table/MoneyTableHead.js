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
import DeleteEarningPopup from '../popups/DeleteEarningPopup';
import Modal from '@mui/material/Modal';





const headCells = [
    {
      id: 6,
      numeric: true,
      disablePadding: true,
      label: 'Date',
      with: 130
    },
];


  
const MoneyTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, setSearchText, sortByDateHandler, invoices, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, setPage } =
      props;
 

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
        with: 130
      },
      {
        id: 3,
        numeric: true,
        disablePadding: true,
        label: 'Description',
        sortable: false,
        with: 130
      },
      {
        id: 4,
        numeric: true,
        disablePadding: true,
        label: 'Amount',
        sortable: false,
        with: 130
      },
      {
        id: 5,
        numeric: true,
        disablePadding: true,
        label: 'Client',
        sortable: false,
        with: 130
      },
      {
        id: 6,
        numeric: true,
        disablePadding: true,
        label: 'Project',
        with: 130
      },
      {
        id: 7,
        numeric: true,
        disablePadding: true,
        label: 'Invoice',
        with: 130
      },
      {
        id: 8,
        numeric: true,
        disablePadding: true,
        label: 'Actions',
        with: 130
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



    // start delete earning popup
    const [deleteEarningPopup, setDeleteEarningPopup] = useState(false);
    const handleOpenDeleteEarningPopup = () => {
      setDeleteEarningPopup(true)
    };
    const handleCloseDeleteEarningPopup = () => {
      setDeleteEarningPopup(false)
    };
    // end delete invoice popup

    

    return (
      <>
        <TableHead className='money-header'>
          <TableRow className='money-header-row'>
            <TableCell padding="checkbox" className='money-header-row-selected'>
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
    
            
            <TableCell padding="checkbox" className='money-header-row-option'>
              {numSelected > 0 ?
                numSelected
              : 
                ''
              }
            </TableCell>

            <TableCell colSpan={4} padding="checkbox" className='money-header-row-option'>
              {numSelected > 0 ?
                <div className='money-header-row-option-container'>
                   <Button
                    startIcon={<DeleteOutlineOutlinedIcon />}
                    onClick={handleOpenDeleteEarningPopup}
                    > 
                    Delete
                  </Button>
                  {/* <Button 
                    startIcon={<LocalOfferOutlinedIcon />}
                    onClick={() => {
                      toast.warning(`You have clicked on Changing category of selected rows`, {
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
                      }}

                  >
                    Change category
                  </Button> */}
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

          <TableRow className='money-header-row'>
            <TableCell>
              
            </TableCell>
          
          {headColumns.map((headCell) => (
            <TableCell
              key={headCell.id}
              align="center"
              className='money-header-row-cell'
              // align={headCell.numeric ? 'right' : 'left'}
              // padding={headCell.disablePadding ? 'none' : 'normal'}
              // sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.label}
            </TableCell>
          ))}
          </TableRow>
        </TableHead>


        {/* delete earning modal */}
        <Modal
          open={deleteEarningPopup}
          onClose={() => handleCloseDeleteEarningPopup()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='cloud-page__header_invoice-manager-details_add-modal'
        >
          <DeleteEarningPopup handleCloseDeleteEarningPopup={handleCloseDeleteEarningPopup} />
        </Modal>

        
      </>
    );
}

export default MoneyTableHead;