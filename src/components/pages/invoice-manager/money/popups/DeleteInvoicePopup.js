import React from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DeleteInvoicePopup = ({ handleCloseDeleteInvoicePopup, data }) => {




  return (
    <div className='money-deletepopup'>
      <div className='money-deletepopup-header'>
        <div className='money-deletepopup-header-title'>
          <p>Delete payment</p>
        </div>
        
        <div className='money-deletepopup-header-subtitle'>
          <p>Are you sure you want to delete this payment?</p>
        </div>
      </div>

      <div className='money-deletepopup-content'>
            <div className='money-deletepopup-content-btn'>
                <Button onClick={() => handleCloseDeleteInvoicePopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='money-deletepopup-content-btn'>
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
