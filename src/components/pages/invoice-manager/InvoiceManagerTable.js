import React, { useState, useMemo }from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import star from '../../../assets/images/my-services/email/star.png';
import activeStar from '../../../assets/images/my-services/email/favorite.png';
import attached from '../../../assets/images/my-services/email/attached.png';
import SingleInvoice from './single-invoice/SingleInvoice';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";




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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, setSearchText, sortByDateHandler } =
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


        
        {headCells.map((headCell) => (
            headCell.label === 'Date' ?
              <TableCell
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
            ''


            /* <TableSortLabel
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
            </TableSortLabel> */
        ))}
      </TableRow>
    </TableHead>
  );
}



export default function InvoiceManagerTable({ activeSingleMail, setActiveSingleMail, emails, searchText, setSearchText }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20);


  // single mail variables
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
      const newSelected = emails.map((n) => n.id);
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



  const [filteredEmails, setFilteredEmails] = useState(emails);
  
  useEffect(() => {
    if (!searchText) {
      setFilteredEmails(emails);
    }

    if (searchText) {
      setFilteredEmails(emails.filter( email => {
        const filterValue = searchText.toLowerCase();
  
        return (
          email.title.toLowerCase().match(filterValue) ||
          email.message.toLowerCase().match(filterValue) ||
          email.subject.toLowerCase().match(filterValue)
        );
      }));
    }
  }, [searchText]);



// start sort by date
  const [isDesc, setIsDesc] = useState(true);
  const sortByDateHandler = () => {
    const sortedList = [...filteredEmails].sort((a, b) => {
      if(isDesc) {
        setIsDesc(!isDesc);
        return Date.parse(b.date) - Date.parse(a.date);
      }

      if(!isDesc) {
        setIsDesc(!isDesc);
        return Date.parse(a.date) - Date.parse(b.date);
      }
    });

    setFilteredEmails(sortedList);
  }

// end sort by date




  // const visibleRows = useMemo(
  //   () =>
  //     stableSort(filteredEmails, getComparator(order, orderBy)).slice(
  //       page * rowsPerPage,
  //       page * rowsPerPage + rowsPerPage,
  //     ),
  //   [order, orderBy, page, rowsPerPage],
  // );


  // start showing mail category tab
  // const [activeMail, setActiveMail] = useState(false);
  // const handleActiveMail = (event, newValue) => {
  //   if (event.target === event.currentTarget) {
  //     setActiveSingleMail(newValue);
  //   }
  // };
  // end showing chat tab


// start show single mail handler 
const showSingleMailHanlder = (row) => {
  setActiveSingleMail(true);
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
          xs = {activeSingleMail ? 6 : 12}
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
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={emails.length}
                  setSearchText={setSearchText}
                  sortByDateHandler={sortByDateHandler}
                />

                <TableBody>
                  {filteredEmails.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row.id)}
                        onClick={() => showSingleMailHanlder(row)}
                        // role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer'}}

                      >

                        <TableCell padding="checkbox"
                          sx={{ cursor: 'pointer', maxWidth: 50, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                          // padding="none"
                          align="center"
                          sx={{ cursor: 'pointer',width: '5%', maxWidth: 50, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
                        >
                          <img src={row.logo} />
                        </TableCell>
                        
                        <TableCell
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                          align="center"
                          sx={{ cursor: 'pointer',width: '5%', maxWidth: 50, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
                        >
                          <img src={row.starred ? activeStar : star} />
                        </TableCell>
                        
                        <TableCell
                          align="left"
                          sx={{ cursor: 'pointer',width: '30%', maxWidth: 100, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '5px' }}
                        >
                          {row.title}
                        </TableCell>
                        
                        <TableCell
                          align="left"
                          sx={{ cursor: 'pointer',width: '40%', maxWidth: 150, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '5px' }}
                        >
                          {row.message}
                        </TableCell>
                        
                        <TableCell
                          align="center"
                          sx={{ cursor: 'pointer',width: '5%', maxWidth: 50, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
                        >
                          {/* {row.attached ? <img src={attached} /> : ''} */}

                          {row.attached ? 
                            <AttachFileIcon
                              sx={{
                                transform: 'rotate(45deg)',
                                color: '#00000080',
                                fontSize: '20px',
                                marginTop: '4px'
                                  }} 
                            /> 
                             : 
                              ''
                           }
                        </TableCell>
                        
                        <TableCell
                          align="center"
                          sx={{ cursor: 'pointer',width: '15%', maxWidth: 100, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0 5px 0 0' }}
                        >
                          {row.date}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[20, 50, 100]}
              component="div"
              count={emails.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>

        <Grid item 
          sx={{display: activeSingleMail ? 'block' : 'none'}}
            xs = {6}
          >

          <SingleInvoice userIcon={userIcon} mailFrom={mailFrom} mailTo={mailTo} mailSubject={mailSubject} mailTitle={mailTitle} mailMessage={mailMessage} setActiveSingleMail={setActiveSingleMail} />
        
        
        </Grid>
      </Grid>
    </Box>
  );
}