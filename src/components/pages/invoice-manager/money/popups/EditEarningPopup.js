import React, { useState } from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Switch from '@mui/material/Switch';
import InputAdornment from '@mui/material/InputAdornment';
import { toast } from "react-toastify";
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';





const EditEarningPopup = ({ handleCloseEditEarningPopup, data}) => {


  const [amount, setAmount] = useState(data.amount);
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const [date, setDate] = useState(dayjs(data.date));
  const handleDate = (newValue) => {
    setDate(newValue);
  };

  const [paymentMethod, setPaymentMethod] = useState(data.paymentMethod);
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


  const [transactionID, setTransactionID] = useState(data.transactionID);
  const handleTransactionID = (event) => {
      setTransactionID(event.target.value);
  };

  const handleCancelEdit = () => {
    handleCloseEditEarningPopup();
    setDate(null);
    setPaymentMethod('');
    setAdditionalInfo(false);
  }

  const handleSubmitEdit = () => {
    handleCloseEditEarningPopup();
    setDate(null);
    setPaymentMethod('');
    setAdditionalInfo(false);
    toast.success('You have clicked on Submit edits', {
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
    <div className='money-editinvoicepopup'>
      <div className='money-editinvoicepopup-header'>
        <div className='money-editinvoicepopup-header-title'>
          <p>Edit earning</p>
        </div>

        <div className='money-editinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseEditEarningPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-editinvoicepopup-list'>

        <div className='money-editinvoicepopup-item flex'>
          <p className="money-editinvoicepopup-item-title">
              Amount*
          </p>

          <div className='money-editinvoicepopup-item-number'>
            <TextField
              placeholder=""
              value={amount}
              onChange={handleAmount}
              className="money-editinvoicepopup-item-number-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>
        </div>

        <div className='money-editinvoicepopup-item flex'>
          <p className="money-editinvoicepopup-item-title">
              Date*
          </p>

          <div className='money-editinvoicepopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={date} 
                onChange={handleDate}
                // defaultValue={dayjs()}
                // defaultValue={dayjs(`${data.date}`)}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='money-editinvoicepopup-item flex'>
          <p className='money-editinvoicepopup-item-title'>
            Payment method*
          </p>

          <FormControl fullWidth>
            <Select
              className="money-editinvoicepopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // defaultValue={data.paymentMethod}
              value={paymentMethod}
              onChange={handlePaymentMethod}
            >
              <MenuItem value='Paypal'>Paypal</MenuItem>
              <MenuItem value='Paypal2'>Paypal 2</MenuItem>
              <MenuItem value='Paypal3'>Paypal 3</MenuItem>
              <MenuItem value='Paypal4'>Paypal 4</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='money-editinvoicepopup-item flex'>
          <p className='money-editinvoicepopup-item-title'>
            Transaction ID
          </p>

          <TextField
            className='money-editinvoicepopup-item-input'
            variant="outlined"
            value={transactionID}
            onChange={handleTransactionID}
            // multiline
            // maxRows={5}
          />
        </div>

        <div className='money-editinvoicepopup-item switch'>
            <p className='money-editinvoicepopup-item-title' onClick={handleAdditionalInfo}>
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
                <div className='money-editinvoicepopup-item notes'>
                  <p className='money-editinvoicepopup-item-title'>
                    Notes**
                  </p>

                  <div style={{width: '380px'}}>
                    <TextField
                        className='money-editinvoicepopup-item-input'
                        variant="outlined"
                        onChange={handleNotes}
                        multiline
                        maxRows={5}
                    />

                    <span className='notif'>
                      ** Private, not visible to the client
                    </span>
                  </div>
                </div>
              </>
            :
              ''
        }

        <div className='money-editinvoicepopup-item flex'>
          <p className='money-editinvoicepopup-item-title'>
            * Required
          </p>
        </div>

        <div className='money-editinvoicepopup-btn'>
          <Button className='money-editinvoicepopup-btn-reset' onClick={handleCancelEdit}>Cancel</Button>

          <Button className='money-editinvoicepopup-btn-submit' onClick={handleSubmitEdit}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default EditEarningPopup;
