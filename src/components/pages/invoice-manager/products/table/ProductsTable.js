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
import Modal from '@mui/material/Modal';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChangeCategoryPopup from '../popups/ChangeCategoryPopup';
import DeleteProductPopup from '../popups/DeleteProductPopup';
import EditProductPopup from '../popups/EditProductPopup';
import ProductsTableHead from './ProductsTableHead';
import trashIcon from '../../../../../assets/images/invoice-manager/trash.svg';
import editIcon from '../../../../../assets/images/invoice-manager/edit.svg';
import shareIcon from '../../../../../assets/images/invoice-manager/share.svg';
import moreIcon from '../../../../../assets/images/invoice-manager/more.svg';
import trashColorIcon from '../../../../../assets/images/invoice-manager/trash-color.svg';
import editColorIcon from '../../../../../assets/images/invoice-manager/edit-color.svg';
import shareColorIcon from '../../../../../assets/images/invoice-manager/share-color.svg';
import moreColorIcon from '../../../../../assets/images/invoice-manager/more-color.svg';
import moreCategoryIcon from '../../../../../assets/images/invoice-manager/more-options/tag.svg';






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







const ProductsTable = ({ invoices, searchText, setSearchText }) => {
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
    console.log('first', selected)
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


  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - invoices.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(invoices, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );





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



  const MoreOptionsMenu = (row) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMoreOptions = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMoreOptions = () => {
      setAnchorEl(null);
    };
    // end more options
    
    return (
      <>
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
          {/* <MoreHorizOutlinedIcon /> */}
          <img src={moreIcon} className='gray-icon' />
          <img src={moreColorIcon} className='color-icon' />
        </IconButton>

        <Menu
          className='invoice-manager-page_main_products-tab-row-actions_option-list'
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
              onClick={() => option.clickFunction(row)}
            >
              <ListItemIcon>
                {option.icon}
              </ListItemIcon>
              <ListItemText>{option.text}</ListItemText>
            </MenuItem>

          ))}
        </Menu>
      </>
    )
  }


 
  // start more options
  const options = [
    {
      id: 5,
      icon: <img src={moreCategoryIcon} />,
      text: 'Change category',
      clickFunction: function(row) {
        setSelectedRowOption(row);
        handleOpenChangeCategoryPopup();
        // handleCloseMoreOptions();
      }
    }
  ]




  // start delete invoice popup
  const [deleteProductPopup, setDeleteProductPopup] = useState(false);
  const handleOpenDeleteProductPopup = () => {
    setDeleteProductPopup(true)
  };
  const handleCloseDeleteProductPopup = () => {
    setSelectedRowOption([]);
    setDeleteProductPopup(false)
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


  // start edit product popup
  const [editProductPopup, setEditProductPopup] = useState(false);

  const handleOpenEditProductPopup = () => {
    setEditProductPopup(true);
  };
  const handleCloseEditProductPopup = () => {
    setSelectedRowOption([]);
    setEditProductPopup(false)
  };
  // end edit product popup


  // start add payment popup
  const [addPaymentPopup, setAddPaymentPopup] = useState(false);
  const handleOpenAddPaymentPopup = () => {
    setAddPaymentPopup(true);
  };
  const handleCloseAddPaymentPopup = () => {
    setSelectedRowOption([]);
    setAddPaymentPopup(false)
  };
  // end add payment popup


  // start clone invoice popup
  const [cloneInvoicePopup, setCloneInvoicePopup] = useState(false);
  const handleOpenCloneInvoicePopup = () => {
    setCloneInvoicePopup(true);
  };
  const handleCloseCloneInvoicePopup = () => {
    setSelectedRowOption([]);
    setCloneInvoicePopup(false)
  };
  // end clone invoice popup

  // start change category popup
  const [changeCategoryPopup, setChangeCategoryPopup] = useState(false);
  const handleOpenChangeCategoryPopup = () => {
    setChangeCategoryPopup(true);
  };
  const handleCloseChangeCategoryPopup = () => {
    setSelectedRowOption([]);
    setChangeCategoryPopup(false)
  };
  // end change category popup


  // start detach invoice popup
  const [detachInvoicePopup, setDetachInvoicePopup] = useState(false);
  const handleOpenDetachInvoicePopup = () => {
    setDetachInvoicePopup(true)
  };
  const handleCloseDetachInvoicePopup = () => {
    setSelectedRowOption([]);
    setDetachInvoicePopup(false)
  };
  // end detach invoice popup

  // start attach project popup
  const [attachProjectPopup, setAttachProjectPopup] = useState(false);
  const handleOpenAttachProjectPopup = () => {
    setAttachProjectPopup(true);
  };
  const handleCloseAttachProjectPopup = () => {
    setSelectedRowOption([]);
    setAttachProjectPopup(false);
  };
  // end change category popup

  // start attach project popup
  const [recurringSettingPopup, setRecurringSettingPopup] = useState(false);
  const handleOpenRecurringSettingPopup = () => {
    setRecurringSettingPopup(true);
  };
  const handleCloseRecurringSettingPopup = () => {
    setSelectedRowOption([]);
    setRecurringSettingPopup(false);
  };
  // end change category popup

  // start attach project popup
  const [invoiceRecordPopup, setInvoiceRecordPopup] = useState(false);
  const handleOpenInvoiceRecordPopup = () => {
    setInvoiceRecordPopup(true);
  };
  const handleCloseInvoiceRecordPopup = () => {
    setSelectedRowOption([]);
    setInvoiceRecordPopup(false);
  };
  // end change category popup
  


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
              className='products-table'
            >

              <colgroup>
                <col style={{width:'45px', boxSizing:'border-box'}}/>
                <col style={{width:'400px', boxSizing:'border-box'}}/>
                <col style={{width:'250px', boxSizing:'border-box'}}/>
                <col style={{width:'250px', boxSizing:'border-box'}}/>
                <col style={{width:'250px', boxSizing:'border-box'}}/>
                <col style={{width:'120px', boxSizing:'border-box'}}/>
              </colgroup>

              <ProductsTableHead
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
                        className='invoice-manager-page_main_products-tab-row'
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
                          className='invoice-manager-page_main_products-tab-row-item'
                        >
                          {row.description}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_products-tab-row-item'
                        >
                          ${row.rate}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_products-tab-row-item'
                        >
                          {row.unit}
                        </TableCell>
                        
                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_products-tab-row-item'
                        >
                          {row.category}
                        </TableCell>

                        <TableCell
                          scope="row"
                          align="center"
                          className='invoice-manager-page_main_products-tab-row-actions'
                        >
                          <IconButton aria-label="delete"
                             onClick={(e) => {
                              // e.stopPropagation();
                              setSelectedRowOption(row);
                              handleOpenDeleteProductPopup()
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
                              handleOpenEditProductPopup();
                            }}
                          >
                            {/* <DriveFileRenameOutlineOutlinedIcon /> */}
                            <img src={editIcon} className='gray-icon' />
                            <img src={editColorIcon} className='color-icon' />
                          </IconButton>

                          <MoreOptionsMenu data={row} />
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


      {/* delete product modal */}
      <Modal
        open={deleteProductPopup}
        onClose={() => handleCloseDeleteProductPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <DeleteProductPopup data={selectedRowOption} handleCloseDeleteProductPopup={handleCloseDeleteProductPopup} />
      </Modal>


      {/* edit product modal */}
      <Modal
        open={editProductPopup}
        onClose={() => handleCloseEditProductPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <EditProductPopup data={selectedRowOption} handleCloseEditProductPopup={handleCloseEditProductPopup} />
      </Modal>



      {/* change category modal */}
      <Modal
        open={changeCategoryPopup}
        onClose={() => handleCloseChangeCategoryPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <ChangeCategoryPopup data={selectedRowOption} handleCloseChangeCategoryPopup={handleCloseChangeCategoryPopup} />
      </Modal>

    </>
  );
}

export default ProductsTable; 
