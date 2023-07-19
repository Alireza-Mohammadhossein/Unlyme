import React from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DetachInvoicePopup = ({ handleCloseDetachInvoicePopup, data }) => {




  return (
    <div className='money-detachpopup'>
      <div className='money-detachpopup-header'>
        <div className='money-detachpopup-header-title'>
          <p>Detach from project</p>
        </div>
        
        <div className='money-detachpopup-header-subtitle'>
          <p>Are you sure you want to detach this invoice from the project?</p>
        </div>
      </div>

      <div className='money-detachpopup-content'>
            <div className='money-detachpopup-content-btn'>
                <Button onClick={() => handleCloseDetachInvoicePopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='money-detachpopup-content-btn'>
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
