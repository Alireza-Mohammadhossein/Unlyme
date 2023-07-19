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
import { toast } from "react-toastify";






const InvoiceRecordPopup = ({ handleCloseInvoiceRecordPopup, data}) => {

  return (
    <div className='invoice-manager-invoicerecordpopup'>
      <div className='invoice-manager-invoicerecordpopup-header'>
        <div className='invoice-manager-invoicerecordpopup-header-title'>
          <p>Invoice record</p>
        </div>

        <div className='invoice-manager-invoicerecordpopup-header-btn'>
          <IconButton onClick={handleCloseInvoiceRecordPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoice-manager-invoicerecordpopup-list'>
        <table className='invoice-manager-invoicerecordpopup-table'>
            <tbody className='invoice-manager-invoicerecordpopup-table-body'>
                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Invoice ID</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>#{data.id}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Client</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.creator}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Project</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.project}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Amount</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.amount}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Invoice date</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Due date</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
                </tr>
                
                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Category</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.category}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Tags</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.tags}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Notes</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.notes}</td>
                </tr>

                <tr className='invoice-manager-invoicerecordpopup-table-body-tr'>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-title'>Terms and conditions</td>
                    <td className='invoice-manager-invoicerecordpopup-table-body-tr-value'>{data.terms}</td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>



  );
}


export default InvoiceRecordPopup;
