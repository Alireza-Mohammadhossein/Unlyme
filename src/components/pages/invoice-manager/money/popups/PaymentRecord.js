import React, { useState } from 'react';
import './money-popups.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';






const PaymentRecordPopup = ({ handleClosePaymentRecordPopup, data}) => {

  return (
    <div className='money-invoicerecordpopup'>
      <div className='money-invoicerecordpopup-header'>
        <div className='money-invoicerecordpopup-header-title'>
          <p>Payment record</p>
        </div>

        <div className='money-invoicerecordpopup-header-btn'>
          <IconButton onClick={handleClosePaymentRecordPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-invoicerecordpopup-list'>
        <table className='money-invoicerecordpopup-table'>
            <tbody className='money-invoicerecordpopup-table-body'>
                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Payment ID</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>#{data.id}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Amount</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.amount}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Invoice ID</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.invoice}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Date</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Payment method</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.paymentMethod}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Client</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.client}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Project</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.project}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Notes</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.notes}</td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>



  );
}


export default PaymentRecordPopup;
