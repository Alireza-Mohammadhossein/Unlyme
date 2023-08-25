import React, { useState } from 'react';
import './invoices-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Switch from '@mui/material/Switch';
import LoopIcon from '@mui/icons-material/Loop';
import Alert from '@mui/material/Alert';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';





const AddNewPopup = ({ handleCloseAddNewPopup }) => {


    const [client, setClient] = useState('');
    const handleClient = (event) => {
      setClient(event.target.value);
    };
  
    const [project, setProject] = useState('');
    const handleProject = (event) => {
      setProject(event.target.value);
    };

    const [companyName, setCompanyName] = useState('');
    const handleCompanyName = (event) => {
      setCompanyName(event.target.value);
    };

    const [firstName, setFirstName] = useState('');
    const handleFirstName = (event) => {
      setFirstName(event.target.value);
    };
    
    
    const [lastName, setLastName] = useState('');
    const handleLastName = (event) => {
      setLastName(event.target.value);
    };

    
    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };

    const [clientExistance, setClientExistance] = useState('existing');
    const handleClientExistance = (event, newAlignment) => {
      if (newAlignment !== null) {
        setClientExistance(newAlignment);
      }
    };

    const [createDate, setCreateDate] = useState(null);
    const handleCreateDate = (newValue) => {
      setCreateDate(newValue);
    };

    const [dueDate, setDueDate] = useState(null);
    const handleDueDate = (newValue) => {
      setDueDate(newValue);
    };

    const [category, setCategory] = useState('');
    const handleCategory = (event) => {
      setCategory(event.target.value);
    };


    const [additionalInfo, setAdditionalInfo] = useState(false);
    const handleAdditionalInfo = () => {
        setAdditionalInfo(!additionalInfo);
    };
    


    const handleCancelFilters = () => {
        handleCloseAddNewPopup();
        setClient('');
        setProject('');
        setCreateDate(null);
        setDueDate(null);
        setCategory('');
        setAdditionalInfo(false);
      }
    
      const handleSubmitFilters = () => {
        handleCloseAddNewPopup();
        setClient('');
        setProject('');
        setCreateDate(null);
        setDueDate(null);
        setCategory('');
        setAdditionalInfo(false);
      }


      const tags = [
        'Tag 1',
        'Tag 2',
        'Tag 3',
        'Tag 4',
        'Tag 5',
        'Tag 6',
        'Tag 7',
      ];

      const [tag, setTag] = useState([]);
      const handleTag = (event) => {
        const {
          target: { value },
        } = event;
        setTag(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };


      const [notes, setNotes] = useState('');
      const handleNotes = (event) => {
          setNotes(event.target.value);
      };

      const [terms, setTerms] = useState('');
      const handleTerms = (event) => {
          setTerms(event.target.value);
      };

      const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 31,
        height: 18,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          height: '100%',
          marginTop: 0 ,
          marginBottom: 0 ,
          marginRight: 0 ,
          marginLeft: 2 ,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            marginTop: 0 ,
            marginBottom: 0 ,
            marginRight: 2 ,
            marginLeft: 0 ,
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#767680E5',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 13,
          height: 13,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#c4bfd2' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
 

  return (
    <div className='invoices-addnewpopup'>
      <div className='invoices-addnewpopup-header'>
        <div className='invoices-addnewpopup-header-title'>
          <p>Create new invoice</p>
        </div>

        <div className='invoices-addnewpopup-header-btn'>
          <IconButton onClick={handleCloseAddNewPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-addnewpopup-list'>

        {
          clientExistance === 'existing' ?
            <>
                <div className='invoices-addnewpopup-item flex'>
                    <p className='invoices-addnewpopup-item-title'>
                      Client*
                    </p>

                    <TextField
                        className='invoices-addnewpopup-item-input'
                        variant="outlined"
                        onChange={handleClient}
                    />
                </div>

                <div className='invoices-addnewpopup-item flex pb-0'>
                    <p className='invoices-addnewpopup-item-title'>
                      Project
                    </p>

                    <FormControl fullWidth>
                        <Select
                          className="invoices-addnewpopup-item-select"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={project}
                          onChange={handleProject}
                        >
                          <MenuItem value='project1'>Project 1</MenuItem>
                          <MenuItem value='project2'>Project 2</MenuItem>
                          <MenuItem value='project3'>Project 3</MenuItem>
                          <MenuItem value='project4'>Project 4</MenuItem>
                        </Select>
                    </FormControl>


                </div>
            </>
          :
            <>
              <div className='invoices-addnewpopup-item flex'>
                  <p className='invoices-addnewpopup-item-title'>
                    Company name*
                  </p>

                  <TextField
                      className='invoices-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleCompanyName}
                  />
              </div>

              <div className='invoices-addnewpopup-item flex'>
                  <p className='invoices-addnewpopup-item-title'>
                    Fist name*
                  </p>

                  <TextField
                      className='invoices-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleFirstName}
                  />
              </div>
              
              <div className='invoices-addnewpopup-item flex'>
                  <p className='invoices-addnewpopup-item-title'>
                    Last name*
                  </p>

                  <TextField
                      className='invoices-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleLastName}
                  />
              </div>
              
              <div className='invoices-addnewpopup-item flex'>
                  <p className='invoices-addnewpopup-item-title'>
                    Email address*
                  </p>

                  <TextField
                      className='invoices-addnewpopup-item-input'
                      variant="outlined"
                      type='email'
                      onChange={handleEmail}
                  />
              </div>
            </>
        }

        <div className='invoices-addnewpopup-item flex'>
            <div className='invoices-addnewpopup-item-project_selection'>
                <ToggleButtonGroup
                  value={clientExistance}
                  exclusive
                  onChange={handleClientExistance}
                >
                  <ToggleButton value="new">New client</ToggleButton>
                  <ToggleButton value="existing">Existing client</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
        
        <div className='invoices-addnewpopup-item flex'>
          <p className="invoices-addnewpopup-item-title">
              Invoice date*
          </p>

          <div className='invoices-addnewpopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={createDate} 
                onChange={handleCreateDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-addnewpopup-item flex'>
          <p className="invoices-addnewpopup-item-title">
              Due date*
          </p>

          <div className='invoices-addnewpopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={dueDate} 
                onChange={handleDueDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-addnewpopup-item flex'>
            <p className='invoices-addnewpopup-item-title'>
              Category*
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoices-addnewpopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value='category1'>Category 1</MenuItem>
                  <MenuItem value='category2'>Category 2</MenuItem>
                  <MenuItem value='category3'>Category 3</MenuItem>
                  <MenuItem value='category4'>Category 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='invoices-addnewpopup-item switch'>
            <p className='invoices-addnewpopup-item-title' onClick={handleAdditionalInfo}>
              Additional information
            </p>

            {/* <Switch
                checked={additionalInfo}
                onChange={handleAdditionalInfo}
                // inputProps={{ 'aria-label': 'controlled' }}
            /> */}

            <IOSSwitch
              checked={additionalInfo}
              onChange={handleAdditionalInfo}
            />
        </div>

        {
          additionalInfo ? 
              <>
                <div className='invoices-addnewpopup-item tags'>
                  <p className='invoices-addnewpopup-item-title'>
                    Tags
                  </p>

                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={tag}
                    onChange={handleTag}
                  >
                    {tags.map((tag) => (
                      <MenuItem
                        key={tag}
                        value={tag}
                      >
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className='invoices-addnewpopup-item notes'>
                  <p className='invoices-addnewpopup-item-title'>
                    Notes
                  </p>

                  <TextField
                      className='invoices-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleNotes}
                      multiline
                      maxRows={5}
                  />
                </div>

                <div className='invoices-addnewpopup-item terms'>
                  <p className='invoices-addnewpopup-item-title'>
                    Terms and conditions
                  </p>

                  <TextField
                      className='invoices-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleTerms}
                      multiline
                      maxRows={5}
                  />
                </div>
              </>
            :
              ''
        }

        <div className='invoices-addnewpopup-item flex'>
            <Alert variant="outlined" severity="warning" icon={<LoopIcon sx={{color: "#93742A"}} />}>
                Recurring invoice options are available after an invoice has been created
            </Alert>
        </div>

        <div className='invoices-addnewpopup-item flex'>
            <p className='invoices-addnewpopup-item-title'>
              * Required
            </p>
        </div>


        <div className='invoices-addnewpopup-btn'>
          <Button className='invoices-addnewpopup-btn-reset' onClick={handleCancelFilters}>Cancel</Button>

          <Button className='invoices-addnewpopup-btn-submit' onClick={handleSubmitFilters}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddNewPopup;
