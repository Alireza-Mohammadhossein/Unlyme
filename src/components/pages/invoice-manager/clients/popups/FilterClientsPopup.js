import React, { useState } from 'react';
import './clients-popups.scss';
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




const FilterClientsPopup = ({ setFilterClientsPopup }) => {



  const [client, setClient] = useState('');
  const handleClient = (event) => {
    setClient(event.target.value);
  };

  const [project, setProject] = useState('');
  const handleProject = (event) => {
    setProject(event.target.value);
  };

  const [amountMin, setAmountMin] = useState('');
  const handleAmountMin = (event) => {
    setAmountMin(event.target.value);
  };

  const [amountMax, setAmountMax] = useState('');
  const handleAmountMax = (event) => {
    setAmountMax(event.target.value);
  };

  const [paymentsMin, setPaymentsMin] = useState('');
  const handlePaymentsMin = (event) => {
    setPaymentsMin(event.target.value);
  };

  const [paymentsMax, setPaymentsMax] = useState('');
  const handlePaymentsMax = (event) => {
    setPaymentsMax(event.target.value);
  };

  const [dateStart, setDateStart] = useState(null);
  const handleDateStart = (newValue) => {
    setDateStart(newValue);
  };

  const [dateEnd, setDateEnd] = useState(null);
  const handleDateEnd = (newValue) => {
    setDateEnd(newValue);
  };

  const [status, setStatus] = useState('');
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleResetFilters = () => {
    setClient('');
    setProject('');
    setAmountMin('');
    setAmountMax('');
    setPaymentsMin('');
    setPaymentsMax('');
    setDateStart(null);
    setDateEnd(null);
    setStatus('');
  }

  const handleSubmitFilters = () => {
    setFilterClientsPopup(false)
    setClient('');
    setProject('');
    setAmountMin('');
    setAmountMax('');
    setPaymentsMin('');
    setPaymentsMax('');
    setDateStart(null);
    setDateEnd(null);
    setStatus('');
  }


  return (
    <div className='clients-filterpopup'>
      <div className='clients-filterpopup-header'>
        <div className='clients-filterpopup-header-title'>
          <FilterListIcon />
          <p>Filter Clients</p>
        </div>

        <div className='clients-filterpopup-header-btn'>
          <IconButton onClick={() => setFilterClientsPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='clients-filterpopup-list'>
        <div className='clients-filterpopup-item'>
          <p className="clients-filterpopup-item-title">
              Client Name
          </p>

          <FormControl fullWidth>
            <Select
              className="clients-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={client}
              onChange={handleClient}
            >
              <MenuItem value='user1'>User 1</MenuItem>
              <MenuItem value='user2'>User 2</MenuItem>
              <MenuItem value='user3'>User 3</MenuItem>
              <MenuItem value='user4'>User 4</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='clients-filterpopup-item'> 
          <p className="clients-filterpopup-item-title">
              Project
          </p>

          <FormControl fullWidth>
            <Select
              className="clients-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={project}
              onChange={handleProject}
            >
              <MenuItem value='user1'>Project 1</MenuItem>
              <MenuItem value='user2'>Project 2</MenuItem>
              <MenuItem value='user3'>Project 3</MenuItem>
              <MenuItem value='user4'>Project 4</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='clients-filterpopup-item'>
          <p className="clients-filterpopup-item-title">
              Status
          </p>

          <FormControl fullWidth>
            <Select
              className="clients-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatus}
            >
              <MenuItem value='status1'>Status 1</MenuItem>
              <MenuItem value='status2'>Status 2</MenuItem>
              <MenuItem value='status3'>Status 3</MenuItem>
              <MenuItem value='status4'>Status 4</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='clients-filterpopup-item'>
          <p className="clients-filterpopup-item-title">
            Amount
          </p>

          <div className='clients-filterpopup-item-double'>
            <TextField
              placeholder="Min"
              value={amountMin}
              onChange={handleAmountMin}
              className="clients-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              placeholder="Max"
              value={amountMax}
              onChange={handleAmountMax}
              className="clients-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='clients-filterpopup-item'>
          <p className="clients-filterpopup-item-title">
            Payments
          </p>

          <div className='clients-filterpopup-item-double'>
            <TextField
              placeholder="Min"
              value={paymentsMin}
              onChange={handlePaymentsMin}
              className="clients-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              placeholder="Max"
              value={paymentsMax}
              onChange={handlePaymentsMax}
              className="clients-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='clients-filterpopup-item'>
          <p className="clients-filterpopup-item-title">
              Date Created
          </p>

          <div className='clients-filterpopup-item-double'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: 'Start' } }}
                value={dateStart} 
                onChange={handleDateStart}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: 'End' } }}
                value={dateEnd}
                onChange={handleDateEnd}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>


        <div className='clients-filterpopup-btn'>
          <Button className='clients-filterpopup-btn-reset' onClick={handleResetFilters}>Reset</Button>

          <Button className='clients-filterpopup-btn-submit' onClick={handleSubmitFilters}>Apply Filter</Button>
        </div>
      </div>
    </div>
  );
}


export default FilterClientsPopup;
