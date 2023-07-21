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
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Company ID</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>#{data.id}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Company name</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.company}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Account owner</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.owner}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Email Address</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.email}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Category</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.category}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Project</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.project}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Description</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.description}</td>
                </tr>

                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>Billing address</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.billing}</td>
                </tr>
                
                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>App modules</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.modules}</td>
                </tr>
                
                <tr className='clients-invoicerecordpopup-table-body-tr'>
                    <td className='clients-invoicerecordpopup-table-body-tr-title'>More info</td>
                    <td className='clients-invoicerecordpopup-table-body-tr-value'>{data.info}</td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>



  );
}


export default ClientsRecordPopup;
