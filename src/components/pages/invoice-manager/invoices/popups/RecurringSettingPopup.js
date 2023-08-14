import React, { useState } from 'react';
import './invoices-popups.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import helpIcon from '../../../../../assets/images/invoice-manager/help-circle.svg';




const RecurringSettingPopup = ({ handleCloseRecurringSettingPopup }) => {

    const [repeatNumber, setRepeatNumber] = useState();
    const handleRepeatNumber = (event) => {
      setRepeatNumber(event.target.value);
    };

    const [repeatUnit, setRepeatUnit] = useState();
    const handleRepeatUnit = (event) => {
      setRepeatUnit(event.target.value);
    };

    const [cycleNumber, setCycleNumber] = useState();
    const handleCycleNumber = (event) => {
      setCycleNumber(event.target.value);
    };

    const [nextInvoice, setNextInvoice] = useState(null);
    const handleNextInvoice = (newValue) => {
      setNextInvoice(newValue);
    };

    


    const handleCancelRecurring = () => {
        handleCloseRecurringSettingPopup();
        setRepeatNumber(null);
        setRepeatUnit(null);
        setCycleNumber(null);
        setNextInvoice(null);
    }

    const handleSubmitRecurring = () => {
        handleCloseRecurringSettingPopup();
        setRepeatNumber(null);
        setRepeatUnit(null);
        setCycleNumber(null);
        setNextInvoice(null);
    }

    const [firstAlert, setFirstAlert] = useState(true);
    const [secondAlert, setSecondAlert] = useState(true);

 

  return (
    <div className='invoices-recurringsettingpopup'>
      <div className='invoices-recurringsettingpopup-header'>
        <div className='invoices-recurringsettingpopup-header-title'>
          <p>Recurring setting</p>
        </div>

        <div className='invoices-recurringsettingpopup-header-btn'>
          <IconButton onClick={handleCloseRecurringSettingPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-recurringsettingpopup-list'>

        <div className='invoices-recurringsettingpopup-item'>
            <p className='invoices-recurringsettingpopup-item-title'>
              Repeat every
            </p>

            <div className='invoices-recurringsettingpopup-item-double'>
                <div className='invoices-recurringsettingpopup-item-double-container'>
                    <FormControl fullWidth>
                        <Select
                          className="invoices-recurringsettingpopup-item-select"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={repeatNumber}
                          onChange={handleRepeatNumber}
                          defaultValue={1}
                        >
                          <MenuItem value='1'>1</MenuItem>
                          <MenuItem value='2'>2</MenuItem>
                          <MenuItem value='3'>3</MenuItem>
                          <MenuItem value='4'>4</MenuItem>
                          <MenuItem value='5'>5</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='invoices-recurringsettingpopup-item-double-container'>
                    <FormControl fullWidth>
                        <Select
                          className="invoices-recurringsettingpopup-item-select"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={repeatUnit}
                          onChange={handleRepeatUnit}
                          defaultValue='month'
                        >
                          <MenuItem value='day' selected>Day</MenuItem>
                          <MenuItem value='week'>Week</MenuItem>
                          <MenuItem value='month'>Month</MenuItem>
                          <MenuItem value='year'>Year</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>

        <div className='invoices-recurringsettingpopup-item'>
            <p className='invoices-recurringsettingpopup-item-title'>
              Cycles
            </p>

            <div className='invoices-recurringsettingpopup-item-double'>
                <div className='invoices-recurringsettingpopup-item-double-container'>
                    <FormControl fullWidth>
                        <Select
                          className="invoices-recurringsettingpopup-item-select"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={cycleNumber}
                          onChange={handleCycleNumber}
                          defaultValue={1}
                        >
                          <MenuItem value='1'>1</MenuItem>
                          <MenuItem value='2'>2</MenuItem>
                          <MenuItem value='3'>3</MenuItem>
                          <MenuItem value='4'>4</MenuItem>
                          <MenuItem value='5'>5</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='invoices-recurringsettingpopup-item-double-container'>
                    <Tooltip className='invoices-recurringsettingpopup-item-tooltip' id='recurringsettingpopup_tooltip' title="Invoice will stop recurring after these number of cycles. For infinity, set the value to 0" arrow placement="top">
                        <IconButton>
                          {/* <HelpOutlineIcon /> */}
                          <img src={helpIcon} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>

        <div className='invoices-recurringsettingpopup-item'>
            <p className='invoices-recurringsettingpopup-item-title'>
              Next invoice date
            </p>

            <div className='invoices-recurringsettingpopup-item-double'>
                <div className='invoices-recurringsettingpopup-item-double-container'>
                    <div className='invoices-recurringsettingpopup-item-date'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            slotProps={{ textField: { placeholder: '' } }}
                            value={nextInvoice} 
                            onChange={handleNextInvoice}
                            // defaultValue={dayjs()}
                            // disablePast
                          />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className='invoices-recurringsettingpopup-item-double-container'>
                    <Tooltip className='invoices-recurringsettingpopup-item-tooltip' id='recurringsettingpopup_tooltip' title="See information below" arrow placement="top">
                        <IconButton>
                          {/* <HelpOutlineIcon /> */}
                          <img src={helpIcon} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>

        <div className='invoices-recurringsettingpopup-item'>
            <div className='invoices-recurringsettingpopup-item-alert'>
                {
                    firstAlert ? 
                        <Alert
                            icon={<img src={helpIcon} />}
                            variant="outlined"
                            action={
                                <IconButton
                                  aria-label="close"
                                  color="inherit"
                                  size="small"
                                  onClick={() => {
                                    setFirstAlert(false);
                                  }}
                                >
                                  <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            <AlertTitle>First invoice</AlertTitle>
                            The first invoice to be issued, is the parent/main invoice. This invoice will be sent as soon as you have published it.
                        </Alert>
                    :
                        ''
                }
            </div>
        </div>

        <div className='invoices-recurringsettingpopup-item'>
            <div className='invoices-recurringsettingpopup-item-alert'>
                {
                    secondAlert ? 
                        <Alert
                            icon={<img src={helpIcon} />}
                            variant="outlined"
                            action={
                                <IconButton
                                  aria-label="close"
                                  color="inherit"
                                  size="small"
                                  onClick={() => {
                                    setSecondAlert(false);
                                  }}
                                >
                                  <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            <AlertTitle>Next invoice Date</AlertTitle>
                            When you first create a recurring invoice, you must set the date when the recurring cycle will start. This rest of the dates will then be set automatically once the cycle has started.
                        </Alert>
                    :
                        ''
                }
            </div>
        </div>

        <div className='invoices-recurringsettingpopup-btn'>
          <Button className='invoices-recurringsettingpopup-btn-reset' onClick={handleCancelRecurring}>Cancel</Button>

          <Button className='invoices-recurringsettingpopup-btn-submit' onClick={handleSubmitRecurring}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default RecurringSettingPopup;
