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




const FilterPopup = ({ setFilterPopup }) => {



  const [client, setClient] = useState('');
  const handleClient = (event) => {
    setClient(event.target.value);
  };

  const [project, setProject] = useState('');
  const handleProject = (event) => {
    setProject(event.target.value);
  };

  const [invoiceMin, setInvoiceMin] = useState('');
  const handleInvoiceMin = (event) => {
    setInvoiceMin(event.target.value);
  };

  const [invoiceMax, setInvoiceMax] = useState('');
  const handleInvoiceMax = (event) => {
    setInvoiceMax(event.target.value);
  };

  const [paymentMin, setPaymentMin] = useState('');
  const handlePaymentMin = (event) => {
    setPaymentMin(event.target.value);
  };

  const [paymentMax, setPaymentMax] = useState('');
  const handlePaymentMax = (event) => {
    setPaymentMax(event.target.value);
  };

  const [createDateStart, setCreateDateStart] = useState(null);
  const handleCreateDateStart = (newValue) => {
    setCreateDateStart(newValue);
  };

  const [createDateEnd, setCreateDateEnd] = useState(null);
  const handleCreateDateEnd = (newValue) => {
    setCreateDateEnd(newValue);
  };

  const [dueDateStart, setDueDateStart] = useState(null);
  const handleDueDateStart = (newValue) => {
    setDueDateStart(newValue);
  };
  
  const [dueDateEnd, setDueDateEnd] = useState(null);
  const handleDueDateEnd = (newValue) => {
    setDueDateEnd(newValue);
  };

  const [status, setStatus] = useState('');
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const [creator, setCreator] = useState('');
  const handleCreator = (event) => {
    setCreator(event.target.value);
  };

  const [recurring, setRecurring] = useState('');
  const handleRecurring = (event) => {
    setRecurring(event.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleResetFilters = () => {
    setClient('');
    setProject('');
    setInvoiceMin('');
    setInvoiceMax('');
    setPaymentMin('');
    setPaymentMax('');
    setCreateDateStart(null);
    setCreateDateEnd(null);
    setDueDateStart(null);
    setDueDateEnd(null);
    setStatus('');
    setCreator('');
    setRecurring('');
    setCategory('');
  }

  const handleSubmitFilters = () => {
    setFilterPopup(false)
    setClient('');
    setProject('');
    setInvoiceMin('');
    setInvoiceMax('');
    setPaymentMin('');
    setPaymentMax('');
    setCreateDateStart(null);
    setCreateDateEnd(null);
    setDueDateStart(null);
    setDueDateEnd(null);
    setStatus('');
    setCreator('');
    setRecurring('');
    setCategory('');
  }


  return (
    <div className='invoices-filterpopup'>
      <div className='invoices-filterpopup-header'>
        <div className='invoices-filterpopup-header-title'>
          <FilterListIcon />
          <p>Filter invoices</p>
        </div>

        <div className='invoices-filterpopup-header-btn'>
          <IconButton onClick={() => setFilterPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-filterpopup-list'>
        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Client Name
          </p>

          <FormControl fullWidth>
            <Select
              className="invoices-filterpopup-item-select"
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

        <div className='invoices-filterpopup-item'> 
          <p className="invoices-filterpopup-item-title">
              Project
          </p>

          <FormControl fullWidth>
            <Select
              className="invoices-filterpopup-item-select"
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

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Invoice Amount
          </p>

          <div className='invoices-filterpopup-item-double'>
            <TextField
              placeholder="Min"
              value={invoiceMin}
              onChange={handleInvoiceMin}
              className="invoices-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              placeholder="Max"
              value={invoiceMax}
              onChange={handleInvoiceMax}
              className="invoices-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Payments Amount
          </p>

          <div className='invoices-filterpopup-item-double'>
            <TextField
              placeholder="Min"
              value={paymentMin}
              onChange={handlePaymentMin}
              className="invoices-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              placeholder="Max"
              value={paymentMax}
              onChange={handlePaymentMax}
              className="invoices-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Date Created
          </p>

          <div className='invoices-filterpopup-item-double'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: 'Start' } }}
                value={createDateStart} 
                onChange={handleCreateDateStart}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: 'End' } }}
                value={createDateEnd}
                onChange={handleCreateDateEnd}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Due Date
          </p>

          <div className='invoices-filterpopup-item-double'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: 'Start' } }}
                value={dueDateStart}
                onChange={handleDueDateStart}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: 'End' } }}
                value={dueDateEnd}
                onChange={handleDueDateEnd}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Status
          </p>

          <FormControl fullWidth>
            <Select
              className="invoices-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatus}
            >
              <MenuItem value='paid'>Paid</MenuItem>
              <MenuItem value='due'>Due</MenuItem>
              <MenuItem value='overdue'>Overdue</MenuItem>
              <MenuItem value='draft'>Draft</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Added by
          </p>

          <FormControl fullWidth>
            <Select
              className="invoices-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={creator}
              onChange={handleCreator}
            >
              <MenuItem value='paid'>Paid</MenuItem>
              <MenuItem value='due'>Due</MenuItem>
              <MenuItem value='overdue'>Overdue</MenuItem>
              <MenuItem value='draft'>Draft</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Recurring
          </p>

          <FormControl fullWidth>
            <Select
              className="invoices-filterpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={recurring}
              onChange={handleRecurring}
            >
              <MenuItem value='option1'>Option 1</MenuItem>
              <MenuItem value='option2'>Option 2</MenuItem>
              <MenuItem value='option3'>Option 3</MenuItem>
              <MenuItem value='option4'>Option 4</MenuItem>
            </Select>
          </FormControl>

        </div>

        <div className='invoices-filterpopup-item'>
          <p className="invoices-filterpopup-item-title">
              Category
          </p>

          <FormControl fullWidth>
            <Select
              className="invoices-filterpopup-item-select"
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

        <div className='invoices-filterpopup-btn'>
          <Button className='invoices-filterpopup-btn-reset' onClick={handleResetFilters}>Reset</Button>

          <Button className='invoices-filterpopup-btn-submit' onClick={handleSubmitFilters}>Apply Filter</Button>
        </div>
      </div>
    </div>
  );
}


export default FilterPopup;
