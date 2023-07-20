import React, { useState } from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




const AddNewEarningPopup = ({ handleCloseAddNewEarningPopup }) => {

  const [invoiceID, setInvoiceID] = useState('');
  const handleInvoiceID = (event) => {
    setInvoiceID(event.target.value);
  };

  const [amount, setAmount] = useState('');
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const [date, setDate] = useState(null);
  const handleDate = (newValue) => {
    setDate(newValue);
  };

  const [paymentMethod, setPaymentMethod] = useState('');
  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };


  const [additionalInfo, setAdditionalInfo] = useState(false);
  const handleAdditionalInfo = () => {
      setAdditionalInfo(!additionalInfo);
  };

  const [notes, setNotes] = useState('');
  const handleNotes = (event) => {
      setNotes(event.target.value);
  };


  const [transactionID, setTransactionID] = useState('');
  const handleTransactionID = (event) => {
      setTransactionID(event.target.value);
  };



  const handleCancelAddEarning = () => {
    handleCloseAddNewEarningPopup();
    setDate(null);
    setPaymentMethod('');
    setAdditionalInfo(false);
  }

  const handleSubmitAddEarning = () => {
    handleCloseAddNewEarningPopup();
    setDate(null);
    setPaymentMethod('');
    setAdditionalInfo(false);
  }



  return (
    <div className='money-addnewpopup'>
      <div className='money-addnewpopup-header'>
        <div className='money-addnewpopup-header-title'>
          <p>Add new earning</p>
        </div>

        <div className='money-addnewpopup-header-btn'>
          <IconButton onClick={handleCloseAddNewEarningPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-addnewpopup-list'>
        
        <div className='money-addnewpopup-item flex'>
          <p className="money-addnewpopup-item-title">
              Invoice ID
          </p>

          <div className='money-addnewpopup-item-number'>
            <TextField
              placeholder=""
              value={invoiceID}
              onChange={handleInvoiceID}
              className="money-addnewpopup-item-number-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">INV-</InputAdornment>,
              }}
            />
          </div>
        </div>

        <div className='money-addnewpopup-item flex'>
          <p className="money-addnewpopup-item-title">
              Amount
          </p>

          <div className='money-addnewpopup-item-number'>
            <TextField
              placeholder=""
              value={amount}
              onChange={handleAmount}
              className="money-addnewpopup-item-number-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>
        </div>

        <div className='money-addnewpopup-item flex'>
          <p className="money-addnewpopup-item-title">
              Date
          </p>

          <div className='money-addnewpopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={date} 
                onChange={handleDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='money-addnewpopup-item flex'>
            <p className='money-addnewpopup-item-title'>
              Payment method
            </p>

            <FormControl fullWidth>
                <Select
                  className="money-addnewpopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentMethod}
                  onChange={handlePaymentMethod}
                >
                  <MenuItem value='paypal1'>Paypal 1</MenuItem>
                  <MenuItem value='paypal2'>Paypal 2</MenuItem>
                  <MenuItem value='paypal3'>Paypal 3</MenuItem>
                  <MenuItem value='paypal4'>Paypal 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='money-addnewpopup-item flex'>
            <p className='money-addnewpopup-item-title'>
              Transaction ID
            </p>

            
            <TextField
              className='money-addnewpopup-item-input'
              variant="outlined"
              onChange={handleTransactionID}
              // multiline
              // maxRows={5}
            />
        </div>

        <div className='money-addnewpopup-item switch'>
            <p className='money-addnewpopup-item-title' onClick={handleAdditionalInfo}>
              Additional information
            </p>

            <Switch
                checked={additionalInfo}
                onChange={handleAdditionalInfo}
                // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>

        {
          additionalInfo ? 
              <>
                <div className='money-addnewpopup-item notes'>
                  <p className='money-addnewpopup-item-title'>
                    Notes
                  </p>

                  <TextField
                      className='money-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleNotes}
                      multiline
                      maxRows={5}
                  />
                </div>
              </>
            :
              ''
        }

        <div className='money-addnewpopup-item flex'>
          <FormControlLabel control={<Checkbox sx={{color: '#3089dc'}} defaultChecked />} label="Send the client a Payment received email" sx={{color: '#888888'}} />
        </div>


        <div className='money-addnewpopup-btn'>
          <Button className='money-addnewpopup-btn-reset' onClick={handleCancelAddEarning}>Cancel</Button>

          <Button className='money-addnewpopup-btn-submit' onClick={handleSubmitAddEarning}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddNewEarningPopup;
