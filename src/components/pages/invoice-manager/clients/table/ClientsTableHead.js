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




const headCells = [
    {
      id: 6,
      numeric: true,
      disablePadding: true,
      label: 'Date',
      with: 130
    },
];


  
const ClientsTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, setSearchText, sortByDateHandler } =
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
        label: 'Company Name',
        sortable: false,
        with: 130
      },
      {
        id: 3,
        numeric: true,
        disablePadding: true,
        label: 'Account owner',
        sortable: false,
        with: 130
      },
      {
        id: 4,
        numeric: true,
        disablePadding: true,
        label: 'Projects',
        sortable: false,
        with: 130
      },
      {
        id: 5,
        numeric: true,
        disablePadding: true,
        label: 'Invoices',
        sortable: false,
        with: 130
      },
      {
        id: 6,
        numeric: true,
        disablePadding: true,
        label: 'Tags',
        with: 130
      },
      {
        id: 7,
        numeric: true,
        disablePadding: true,
        label: 'Category',
        with: 130
      },
      {
        id: 8,
        numeric: true,
        disablePadding: true,
        label: 'Status',
        with: 130
      },
      {
        id: 9,
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

            <TableCell colSpan={5} padding="checkbox" className='money-header-row-option'>
              {numSelected > 0 ?
                <div className='money-header-row-option-container'>
                  <Button startIcon={<DeleteOutlineOutlinedIcon />}>
                    Delete
                  </Button>
                  <Button startIcon={<LocalOfferOutlinedIcon />}>
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
      </>
    );
}

export default ClientsTableHead;