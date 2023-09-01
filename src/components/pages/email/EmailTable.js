import React, { useState, useMemo }from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import star from '../../../assets/images/my-services/email/star.png';
import activeStar from '../../../assets/images/my-services/email/favorite.png';
import SingleMail from './single-mail/SingleMail';
import { useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmailTableHead from './EmailTableHead';
import inboxGrayIcon from '../../../assets/images/email/inbox-gray.svg';



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


export default function EmailTable({ activeSingleMail, setActiveSingleMail, emails, searchText, setSearchText }) {
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



 
const visibleRows = useMemo(() => stableSort(filteredEmails, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    ),[filteredEmails, order, orderBy, page, rowsPerPage]
);


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


const [readMode, setReadMode] = useState('all');

const handleReadMode = (event, newReadMode) => {
  if (newReadMode !== null) {
    setReadMode(newReadMode);
  }
};


  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item 
          xs = {activeSingleMail ? 5 : 12}
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
                <colgroup>
                  <col style={{width:'45px', boxSizing:'border-box'}}/>
                  <col style={{width:'50px', boxSizing:'border-box'}}/>
                  <col style={{width:'50px', boxSizing:'border-box'}}/>
                  <col style={{width:'140px', boxSizing:'border-box'}}/>
                  <col style={{width:'250px', boxSizing:'border-box'}}/>
                  <col style={{width:'50px', boxSizing:'border-box'}}/>
                  <col style={{width:'100px', boxSizing:'border-box'}}/>
               </colgroup>
          
                <EmailTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={visibleRows.length}
                  setSearchText={setSearchText}
                  sortByDateHandler={sortByDateHandler}
                  emails={emails}
                  rowsPerPage={rowsPerPage}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  page={page}
                  setPage={setPage}
                  readMode={readMode}
                  setReadMode={setReadMode}
                  handleReadMode={handleReadMode}
                />

                <TableBody>
                  {visibleRows.map((row, index) => {
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
                        className={`${row.unread ? 'unread-mail' : ''}`}

                      >

                        <TableCell padding="checkbox"
                          sx={{ cursor: 'pointer', height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
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
                          sx={{ cursor: 'pointer', height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
                        >
                          <img src={row.logo} />
                        </TableCell>
                        
                        <TableCell
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                          align="center"
                          sx={{ cursor: 'pointer', height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
                        >
                          <img src={row.starred ? activeStar : star} className='star-icon'/>
                        </TableCell>
                        
                        <TableCell
                          align="left"
                          sx={{ cursor: 'pointer', width: 230 ,maxWidth: 230, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '5px' }}
                        >
                          {row.title}
                        </TableCell>
                        
                        <TableCell
                          align="left"
                          sx={{ cursor: 'pointer', width: 500, maxWidth: 500, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '5px' }}
                        >
                          <div>
                            {
                              row.unread ?
                                <img src={inboxGrayIcon} className='read-icon' />
                              :
                                <img src={inboxGrayIcon} className='read-icon' />
                            }

                            {row.subject}
                          </div>
                        </TableCell>
                        
                        <TableCell
                          align="center"
                          sx={{ cursor: 'pointer', height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
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
                          sx={{ cursor: 'pointer', height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0 5px 0 0', textAlign: 'right', paddingRight: '10px' }}
                        >
                          {row.date}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination
              rowsPerPageOptions={[20, 50, 100]}
              component="div"
              count={emails.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          </Paper>
        </Grid>

        <Grid item 
          sx={{display: activeSingleMail ? 'block' : 'none'}}
            xs = {7}
          >

          <SingleMail userIcon={userIcon} mailFrom={mailFrom} mailTo={mailTo} mailSubject={mailSubject} mailTitle={mailTitle} mailMessage={mailMessage} setActiveSingleMail={setActiveSingleMail} />
        
        
        </Grid>
      </Grid>
    </Box>
  );
}