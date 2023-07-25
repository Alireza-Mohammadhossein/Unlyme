import React from 'react';
import './products-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DetachInvoicePopup = ({ handleCloseDetachInvoicePopup, data }) => {




  return (
    <div className='invoices-detachpopup'>
      <div className='invoices-detachpopup-header'>
        <div className='invoices-detachpopup-header-title'>
          <p>Detach from project</p>
        </div>
        
        <div className='invoices-detachpopup-header-subtitle'>
          <p>Are you sure you want to detach this invoice from the project?</p>
        </div>
      </div>

      <div className='invoices-detachpopup-content'>
            <div className='invoices-detachpopup-content-btn'>
                <Button onClick={() => handleCloseDetachInvoicePopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='invoices-detachpopup-content-btn'>
                <Button onClick={() => {
                  toast.error(`You have clicked on Detach invoice! by id = ${data.data.id}!`, {
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
                  handleCloseDetachInvoicePopup(false);
                  }}>
                    Detach
                </Button>
            </div>
      </div>
    </div>



  );
}


export default DetachInvoicePopup;
