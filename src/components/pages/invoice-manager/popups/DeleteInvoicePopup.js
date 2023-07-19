import React from 'react';
import './invoice-manager-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DeleteInvoicePopup = ({ handleCloseDeleteInvoicePopup, data }) => {




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
                <Button onClick={() => handleCloseDeleteInvoicePopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='invoice-manager-deletepopup-content-btn'>
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
