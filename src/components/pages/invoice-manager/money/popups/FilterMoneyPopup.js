import React, { useState } from 'react';
import './money-popups.scss';
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




const FilterMoneyPopup = ({ setFilterMoneyPopup }) => {



  const [client, setClient] = useState('');
  const handleClient = (event) => {
    setClient(event.target.value);
  };

  const [project, setProject] = useState('');
  const handleProject = (event) => {
    setProject(event.target.value);
  };

  const [invoiceID, setInvoiceID] = useState('');
  const handleInvoiceID = (event) => {
    setInvoiceID(event.target.value);
  };

  const [amountMin, setAmountMin] = useState('');
  const handleAmountMin = (event) => {
    setAmountMin(event.target.value);
  };

  const [amountMax, setAmountMax] = useState('');
  const handleAmountMax = (event) => {
    setAmountMax(event.target.value);
  };

  const [dateStart, setDateStart] = useState(null);
  const handleDateStart = (newValue) => {
    setDateStart(newValue);
  };

  const [dateEnd, setDateEnd] = useState(null);
  const handleDateEnd = (newValue) => {
    setDateEnd(newValue);
  };


  const [paymentMethod, setPaymentMethod] = useState('');
  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const [creator, setCreator] = useState('');
  const handleCreator = (event) => {
    setCreator(event.target.value);
  };

  const [recurring, setRecurring] = useState('');
  const handleRecurring = (event) => {
    setRecurring(event.target.value);
  };

  const [status, setStatus] = useState('');
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleResetFilters = () => {
    setClient('');
    setProject('');
    setInvoiceID('');
    setAmountMin('');
    setAmountMax('');
    setDateStart(null);
    setDateEnd(null);
    setPaymentMethod('');
    setCreator('');
    setRecurring('');
    setStatus('');
  }

  const handleSubmitFilters = () => {
    setFilterMoneyPopup(false)
    setClient('');
    setProject('');
    setInvoiceID('');
    setAmountMin('');
    setAmountMax('');
    setDateStart(null);
    setDateEnd(null);
    setPaymentMethod('');
    setCreator('');
    setRecurring('');
    setStatus('');
  }


  return (
    <div className='money-filterpopup'>
      <div className='money-filterpopup-header'>
        <div className='money-filterpopup-header-title'>
          <FilterListIcon />
          <p>Filter Payments</p>
        </div>

        <div className='money-filterpopup-header-btn'>
          <IconButton onClick={() => setFilterMoneyPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-filterpopup-list'>
        <div className='money-filterpopup-item'>
          <p className="money-filterpopup-item-title">
              Client Name
          </p>

          <FormControl fullWidth>
            <Select
              className="money-filterpopup-item-select"
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

        <div className='money-filterpopup-item'> 
          <p className="money-filterpopup-item-title">
              Project
          </p>

          <FormControl fullWidth>
            <Select
              className="money-filterpopup-item-select"
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

        <div className='money-filterpopup-item'>
          <p className="money-filterpopup-item-title">
            Invoice ID
          </p>

          <div className='money-filterpopup-item-double'>
            <TextField
              placeholder=""
              value={invoiceID}
              onChange={handleInvoiceID}
              className="money-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">INV-</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='money-filterpopup-item'>
          <p className="money-filterpopup-item-title">
            Amount
          </p>

          <div className='money-filterpopup-item-double'>
            <TextField
              placeholder="Min"
              value={amountMin}
              onChange={handleAmountMin}
              className="money-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              placeholder="Max"
              value={amountMax}
              onChange={handleAmountMax}
              className="money-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='money-filterpopup-item'>
          <p className="money-filterpopup-item-title">
              Date
          </p>

          <div className='money-filterpopup-item-double'>
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

        <div className='money-filterpopup-item'>
          <p className="money-filterpopup-item-title">
              Payment Method
          </p>

          <FormControl fullWidth>
            <Select
              className="money-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={paymentMethod}
              onChange={handlePaymentMethod}
            >
              <MenuItem value='paypal'>Paypal</MenuItem>
              <MenuItem value='paypal1'>Paypal1</MenuItem>
              <MenuItem value='paypal2'>Paypal2</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='money-filterpopup-item'>
          <p className="money-filterpopup-item-title">
              Status
          </p>

          <FormControl fullWidth>
            <Select
              className="money-filterpopup-item-select"
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

        <div className='money-filterpopup-btn'>
          <Button className='money-filterpopup-btn-reset' onClick={handleResetFilters}>Reset</Button>

          <Button className='money-filterpopup-btn-submit' onClick={handleSubmitFilters}>Apply Filter</Button>
        </div>
      </div>
    </div>
  );
}


export default FilterMoneyPopup;
