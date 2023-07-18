import React from 'react';
import './invoice-manager-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const SendEmailPopup = ({ handleCloseSendEmailPopup, sendEmailId }) => {


  return (
    <div className='invoice-manager-sendemailpopup'>
      <div className='invoice-manager-sendemailpopup-header'>
        <div className='invoice-manager-sendemailpopup-header-title'>
          <p>Email to client</p>
        </div>
        
        <div className='invoice-manager-sendemailpopup-header-subtitle'>
          <p>Are you sure you want to send this invoice by email to the client?</p>
        </div>
      </div>

      <div className='invoice-manager-sendemailpopup-content'>
            <div className='invoice-manager-sendemailpopup-content-btn'>
                <Button onClick={() => handleCloseSendEmailPopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='invoice-manager-sendemailpopup-content-btn'>
                <Button onClick={() => {
                  toast.success(`You have clicked on Send email by id = ${sendEmailId}!`, {
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
                  handleCloseSendEmailPopup(false);
                  }}>
                    Delete
                </Button>
            </div>
      </div>
    </div>
  );
}


export default SendEmailPopup;
