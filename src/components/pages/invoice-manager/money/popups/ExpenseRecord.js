import React, { useState } from 'react';
import './money-popups.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';






const ExpenseRecordPopup = ({ handleCloseExpenseRecordPopup, data}) => {

  return (
    <div className='money-invoicerecordpopup'>
      <div className='money-invoicerecordpopup-header'>
        <div className='money-invoicerecordpopup-header-title'>
          <p>Expense record</p>
        </div>

        <div className='money-invoicerecordpopup-header-btn'>
          <IconButton onClick={handleCloseExpenseRecordPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-invoicerecordpopup-list'>
        <table className='money-invoicerecordpopup-table'>
            <tbody className='money-invoicerecordpopup-table-body'>
                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Date</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.date}</td>
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
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Recorded by</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.recorder}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Description</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.description}</td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>File attachment</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'></td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Financial</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>
                      <span className={data.billable ? 'active-label' : 'notactive-label'}>
                        {data.billable ? 'Billable' : 'Not billable'}
                      </span>

                      <span className={data.invoiced ? 'active-label' : 'notactive-label'}>
                        {data.invoiced ? 'Invoiced' : 'Not invoiced'}
                      </span>
                    </td>
                </tr>

                <tr className='money-invoicerecordpopup-table-body-tr expense'>
                    <td className='money-invoicerecordpopup-table-body-tr-title'>Amount</td>
                    <td className='money-invoicerecordpopup-table-body-tr-value'>{data.amount}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}


export default ExpenseRecordPopup;
