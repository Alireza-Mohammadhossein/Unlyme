import React, { useState } from 'react';
import './invoice-manager-popups.scss';
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





const AddNewPopup = ({ handleCloseAddNewPopup }) => {


    const [client, setClient] = useState('');
    const handleClient = (event) => {
      setClient(event.target.value);
    };
  
    const [project, setProject] = useState('');
    const handleProject = (event) => {
      setProject(event.target.value);
    };

    const [clientExistance, setClientExistance] = useState('existing');
    const handleClientExistance = (event, newAlignment) => {
        setClientExistance(newAlignment);
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



 

  return (
    <div className='invoice-manager-addnewpopup'>
      <div className='invoice-manager-addnewpopup-header'>
        <div className='invoice-manager-addnewpopup-header-title'>
          <p>Create new invoice</p>
        </div>

        <div className='invoice-manager-addnewpopup-header-btn'>
          <IconButton onClick={handleCloseAddNewPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoice-manager-addnewpopup-list'>

        {
            clientExistance === 'existing' ?
                <>
                    <div className='invoice-manager-addnewpopup-item flex'>
                    <p className='invoice-manager-addnewpopup-item-title'>
                      Client
                    </p>

                    <TextField
                        className='invoice-manager-addnewpopup-item-input'
                        variant="outlined"
                        onChange={handleClient}
                    />
                    </div>

                    <div className='invoice-manager-addnewpopup-item flex pb-0'>
                        <p className='invoice-manager-addnewpopup-item-title'>
                          Project
                        </p>

                        <FormControl fullWidth>
                            <Select
                              className="invoice-manager-addnewpopup-item-select"
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
                ''
        }

        <div className='invoice-manager-addnewpopup-item flex'>
            <div className='invoice-manager-addnewpopup-item-project_selection'>
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
        
        <div className='invoice-manager-addnewpopup-item flex'>
          <p className="invoice-manager-addnewpopup-item-title">
              Invoice date
          </p>

          <div className='invoice-manager-addnewpopup-item-date'>
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

        <div className='invoice-manager-addnewpopup-item flex'>
          <p className="invoice-manager-addnewpopup-item-title">
              Due date
          </p>

          <div className='invoice-manager-addnewpopup-item-date'>
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

        <div className='invoice-manager-addnewpopup-item flex'>
            <p className='invoice-manager-addnewpopup-item-title'>
              Category
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoice-manager-addnewpopup-item-select"
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

        <div className='invoice-manager-addnewpopup-item switch'>
            <p className='invoice-manager-addnewpopup-item-title' onClick={handleAdditionalInfo}>
              Additional information
            </p>

            <Switch
                checked={additionalInfo}
                onChange={handleAdditionalInfo}
                // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>

        <div className='invoice-manager-addnewpopup-item flex'>
            <Alert variant="outlined" severity="warning" icon={<LoopIcon sx={{color: "#93742A"}} />}>
                Recurring invoice options are available after an invoice has been created
            </Alert>
        </div>

        <div className='invoice-manager-addnewpopup-btn'>
          <Button className='invoice-manager-addnewpopup-btn-reset' onClick={handleCancelFilters}>Cancel</Button>

          <Button className='invoice-manager-addnewpopup-btn-submit' onClick={handleSubmitFilters}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddNewPopup;
