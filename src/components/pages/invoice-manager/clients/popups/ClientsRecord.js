import React, { useState } from 'react';
import './clients-popups.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';






const ClientsRecordPopup = ({ handleCloseClientsRecordPopup, data}) => {

  return (
    <div className='clients-invoicerecordpopup'>
      <div className='clients-invoicerecordpopup-header'>
        <div className='clients-invoicerecordpopup-header-title'>
          <p>Clients record</p>
        </div>

        <div className='clients-invoicerecordpopup-header-btn'>
          <IconButton onClick={handleCloseClientsRecordPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='clients-invoicerecordpopup-list'>
        <table className='clients-invoicerecordpopup-table'>
            <tbody className='clients-invoicerecordpopup-table-body'>
                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Payment ID</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>#{data.id}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Amount</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.amount}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Invoice ID</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.invoice}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Date</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Payment method</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.paymentMethod}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Client</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.client}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Project</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.project}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Notes</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.notes}</td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>



  );
}


export default ClientsRecordPopup;
