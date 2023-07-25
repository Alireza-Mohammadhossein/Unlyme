import React, { useState } from 'react';
import './products-popups.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';






const InvoiceRecordPopup = ({ handleCloseInvoiceRecordPopup, data}) => {

  return (
    <div className='invoices-invoicerecordpopup'>
      <div className='invoices-invoicerecordpopup-header'>
        <div className='invoices-invoicerecordpopup-header-title'>
          <p>Invoice record</p>
        </div>

        <div className='invoices-invoicerecordpopup-header-btn'>
          <IconButton onClick={handleCloseInvoiceRecordPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-invoicerecordpopup-list'>
        <table className='invoices-invoicerecordpopup-table'>
            <tbody className='invoices-invoicerecordpopup-table-body'>
                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Invoice ID</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>#{data.id}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Client</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.creator}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Project</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.project}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Amount</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.amount}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Invoice date</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Due date</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
                </tr>
                
                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Category</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.category}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Tags</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.tags}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Notes</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.notes}</td>
                </tr>

                <tr className='invoices-invoicerecordpopup-table-body-tr'>
                    <td className='invoices-invoicerecordpopup-table-body-tr-title'>Terms and conditions</td>
                    <td className='invoices-invoicerecordpopup-table-body-tr-value'>{data.terms}</td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>



  );
}


export default InvoiceRecordPopup;
