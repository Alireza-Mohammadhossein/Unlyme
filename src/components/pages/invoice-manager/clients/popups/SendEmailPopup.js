import React from 'react';
import './clients-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const SendEmailPopup = ({ handleCloseSendEmailPopup, data }) => {


  return (
    <div className='clients-sendemailpopup'>
      <div className='clients-sendemailpopup-header'>
        <div className='clients-sendemailpopup-header-title'>
          <p>Email to client</p>
        </div>
        
        <div className='clients-sendemailpopup-header-subtitle'>
          <p>Are you sure you want to send this invoice by email to the client?</p>
        </div>
      </div>

      <div className='clients-sendemailpopup-content'>
            <div className='clients-sendemailpopup-content-btn'>
                <Button onClick={() => handleCloseSendEmailPopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='clients-sendemailpopup-content-btn'>
                <Button onClick={() => {
                  toast.success(`You have clicked on Send email by id = ${data.id}!`, {
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
                    Send
                </Button>
            </div>
      </div>
    </div>
  );
}


export default SendEmailPopup;
