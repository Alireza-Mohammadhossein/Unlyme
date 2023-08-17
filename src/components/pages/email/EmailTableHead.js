import React, { useState, useMemo }from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TablePagination from '@mui/material/TablePagination';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import sortIcon from '../../../assets/images/email/date-sort.svg';



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
  
const EmailTableHead = (props) => {
const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, setSearchText, sortByDateHandler, emails, page, setPage, rowsPerPage, handleChangePage, handleChangeRowsPerPage, setReadMode, readMode, handleReadMode} =
  props;
const createSortHandler = (property) => (event) => {
  onRequestSort(event, property);
};



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







return (
  <TableHead className='email-header'>
    <TableRow>
      <TableCell padding="checkbox" className='email-header_selected'>
        <Checkbox
          color="primary"
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          // inputProps={{
          //   'aria-label': 'select all desserts',
          // }}
        />
      </TableCell>

      
      <TableCell colSpan={4} padding="checkbox" className='email-header_selected'>
        {numSelected > 0 ?
          numSelected
        : 
          ''
        }
      </TableCell>

      <TableCell padding="checkbox" className='email-header_selected'>
        {numSelected > 0 ?
          <div style={{borderRight: '1px solid rgba(224, 224, 224, 1)'}}>
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
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        : 
          ''
        }
      </TableCell>



      <TableCell
        // align={headCell.numeric ? 'right' : 'left'}
        align="center"
        sx={{ cursor: 'pointer', maxHeight: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        className='email-header_pagination'
      >

      <TablePagination
        // rowsPerPageOptions={[20, 50, 100]}
        // component="div"
        labelDisplayedRows = {({from, to, count, page}) => ``}
        rowsPerPageOptions={[]}
        component="div"
        count={emails.length}
        rowsPerPage={rowsPerPage}
        page={page}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={() => (
          <div className='email-header_pagination-container'>
            <IconButton
              onClick={handlePrevClick}
              disabled={page === 0}
              aria-label="previous page"
            >
              <ChevronLeftIcon />
            </IconButton>

            <p><span>{page+1}</span><span>of</span><span>{Math.ceil(emails.length / 20)}</span></p>

            <IconButton
              onClick={handleNextClick}
              disabled={page >= Math.ceil(emails.length / rowsPerPage) - 1}
              aria-label="next page"
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
        )}
      />
          
      </TableCell>


      {/* <TableCell padding="checkbox" className='email-header_selected'>
        <TablePagination
          // rowsPerPageOptions={[20, 50, 100]}
          rowsPerPageOptions={[]}
          component="div"
          count={emails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows = {function defaultLabelDisplayedRows({ from, to, count }) { return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`; }}
          
          
        />
      </TableCell> */}


      
      {/* {headCells.map((headCell) => ( */}
          {/* headCell.label === 'Date' ? */}
            {/* <TableCell
              key={headCell.id}
              // align={headCell.numeric ? 'right' : 'left'}
              align="center"
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              onClick={sortByDateHandler}
              sx={{ cursor: 'pointer', maxHeight: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
                Date
                <ImportExportIcon sx={{color: '#999999', verticalAlign : 'middle'}} />
            </TableCell>
          :
          '' */}


          {/* <TableSortLabel
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
          </TableSortLabel> 
       ))} */}


    </TableRow>


    <TableRow className='email-filters'>
      <TableCell padding="checkbox" className='email-filters_read' colSpan={4}>
        <ToggleButtonGroup
          value={readMode}
          exclusive
          onChange={handleReadMode}
          aria-label="read mode"
          align='left'
          className='email-filters_read-toggler'
        >
          <ToggleButton value="all" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton value="read" aria-label="read">
            Read
          </ToggleButton>
          <ToggleButton value="unread" aria-label="unread">
            Unread
          </ToggleButton>
        </ToggleButtonGroup>
      </TableCell>

      

      
      {headCells.map((headCell) => (
          headCell.label === 'Date' ?
            <TableCell
              colSpan={3}
              key={headCell.id}
              align='right'
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              onClick={sortByDateHandler}
              sx={{ cursor: 'pointer', maxHeight: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              className='email-filters_sort'
            >
                Newest first
                <img src={sortIcon} />
                {/* <ImportExportIcon sx={{color: '#999999', verticalAlign : 'middle'}} /> */}
            </TableCell>
          :
          '' 
        ))}


          {/* <TableSortLabel
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
          </TableSortLabel> 
       ))} */}


    </TableRow>
  </TableHead>
);
}

export default EmailTableHead