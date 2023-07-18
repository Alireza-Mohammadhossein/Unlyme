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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoopIcon from '@mui/icons-material/Loop';
import Alert from '@mui/material/Alert';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { toast } from "react-toastify";





const AddPaymentPopup = ({ handleCloseAddPaymentPopup, data }) => {


    const [createDate, setCreateDate] = useState(null);
    const handleCreateDate = (newValue) => {
      setCreateDate(newValue);
    };

    const [paymentMethod, setPaymentMethod] = useState('');
    const handlePaymentMethod = (event) => {
      setPaymentMethod(event.target.value);
    };

    const [transactionID, setTransactionID] = useState('');
    const handleTransactionID = (event) => {
      setTransactionID(event.target.value);
    };


    const [additionalInfo, setAdditionalInfo] = useState(false);
    const handleAdditionalInfo = () => {
        setAdditionalInfo(!additionalInfo);
    };
    


    const handleCancelPayment = () => {
      handleCloseAddPaymentPopup();
      setCreateDate(null);
      setAdditionalInfo(false);
    }
  
    const handleSubmitPayment = () => {
      handleCloseAddPaymentPopup();
      setCreateDate(null);
      setAdditionalInfo(false);
      toast.error(`You have clicked on Add new payment by id = ${data.data.id}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }


    const [notes, setNotes] = useState('');
    const handleNotes = (event) => {
        setNotes(event.target.value);
    };


    const [invoiceAmount, setInvoiceAmount] = useState('');
    const handleInvoiceAmount = (event) => {
      setInvoiceAmount(event.target.value);
    };
 

  return (
    <div className='invoice-manager-addpaymentpopup'>
      <div className='invoice-manager-addpaymentpopup-header'>
        <div className='invoice-manager-addpaymentpopup-header-title'>
          <p>Add new payment</p>
        </div>

        <div className='invoice-manager-addpaymentpopup-header-btn'>
          <IconButton onClick={handleCloseAddPaymentPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoice-manager-addpaymentpopup-list'>
        <div className='invoice-manager-addpaymentpopup-item flex'>
          <p className="invoice-manager-addpaymentpopup-item-title">
              Invoice Amount
          </p>

          <div className='invoice-manager-addpaymentpopup-item-price'>
            <TextField
              placeholder="Amount"
              value={invoiceAmount}
              onChange={handleInvoiceAmount}
              className="invoice-manager-addpaymentpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>
        </div>
        
        <div className='invoice-manager-addpaymentpopup-item flex'>
          <p className="invoice-manager-addpaymentpopup-item-title">
              Date
          </p>

          <div className='invoice-manager-addpaymentpopup-item-date'>
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

        <div className='invoice-manager-addpaymentpopup-item flex'>
            <p className='invoice-manager-addpaymentpopup-item-title'>
              Payment method
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoice-manager-addpaymentpopup-item-select"
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

        <div className='invoice-manager-addpaymentpopup-item flex'>
          <p className='invoice-manager-addpaymentpopup-item-title'>
            Transaction ID
          </p>

          <TextField
              className='invoice-manager-addpaymentpopup-item-input'
              variant="outlined"
              onChange={handleTransactionID}
          />
        </div>

        <div className='invoice-manager-addpaymentpopup-item switch'>
            <p className='invoice-manager-addpaymentpopup-item-title' onClick={handleAdditionalInfo}>
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
                <div className='invoice-manager-addpaymentpopup-item notes'>
                  <p className='invoice-manager-addpaymentpopup-item-title'>
                    Notes
                  </p>

                  <TextField
                      className='invoice-manager-addpaymentpopup-item-input'
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

        <div className='invoice-manager-addpaymentpopup-item flex'>
          <FormControlLabel control={<Checkbox sx={{color: '#3089dc'}} defaultChecked />} label="Send the client a Payment received email" sx={{color: '#888888'}} />
        </div>

        <div className='invoice-manager-addpaymentpopup-btn'>
          <Button className='invoice-manager-addpaymentpopup-btn-reset' onClick={handleCancelPayment}>Cancel</Button>

          <Button className='invoice-manager-addpaymentpopup-btn-submit' onClick={handleSubmitPayment}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddPaymentPopup;
