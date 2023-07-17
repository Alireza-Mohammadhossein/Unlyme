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




const DeleteInvoice = ({ setDeleteInvoicePopup }) => {




  return (
    <div className='invoice-manager-deletepopup'>
      <div className='invoice-manager-deletepopup-header'>
        <div className='invoice-manager-deletepopup-header-title'>
          <p>Delete invoice</p>
        </div>
        
        <div className='invoice-manager-deletepopup-header-subtitle'>
          <p>Are you sure you want to delete this invoice?</p>
        </div>
      </div>

      <div className='invoice-manager-deletepopup-content'>
            <div className='invoice-manager-deletepopup-content-btn'>
                <Button onClick={() => setDeleteInvoicePopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='invoice-manager-deletepopup-content-btn'>
                <Button onClick={() => setDeleteInvoicePopup(false)}>
                    Delete
                </Button>
            </div>
      </div>
    </div>



  );
}


export default DeleteInvoice;
