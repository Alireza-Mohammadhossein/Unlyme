import React from 'react';
import './invoices-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DeleteInvoicePopup = ({ handleCloseDeleteInvoicePopup, data }) => {




  return (
    <div className='invoices-deletepopup'>
      <div className='invoices-deletepopup-header'>
        <div className='invoices-deletepopup-header-title'>
          <p>Delete invoice</p>
        </div>
        
        <div className='invoices-deletepopup-header-subtitle'>
          <p>Are you sure you want to delete this invoice?</p>
        </div>
      </div>

      <div className='invoices-deletepopup-content'>
            <div className='invoices-deletepopup-content-btn'>
                <Button onClick={() => handleCloseDeleteInvoicePopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='invoices-deletepopup-content-btn'>
                <Button onClick={() => {
                  toast.error(`You have clicked on Delete invoice by id = ${data.id}!`, {
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
                  handleCloseDeleteInvoicePopup(false);
                  }}>
                    Delete
                </Button>
            </div>
      </div>
    </div>



  );
}


export default DeleteInvoicePopup;
