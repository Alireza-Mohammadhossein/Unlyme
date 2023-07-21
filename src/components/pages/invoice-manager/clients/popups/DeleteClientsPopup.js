import React from 'react';
import './clients-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DeleteClientsPopup = ({ handleCloseDeleteClientsPopup, data }) => {


  return (
    <div className='clients-deletepopup'>
      <div className='clients-deletepopup-header'>
        <div className='clients-deletepopup-header-title'>
          <p>Delete client</p>
        </div>
        
        <div className='clients-deletepopup-header-subtitle'>
          <p>Are you sure you want to delete this client?</p>
        </div>
      </div>

      <div className='clients-deletepopup-content'>
            <div className='clients-deletepopup-content-btn'>
                <Button onClick={() => handleCloseDeleteClientsPopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='clients-deletepopup-content-btn'>
                <Button onClick={() => {
                  toast.error(`You have clicked on Delete client by id = ${data.id}!`, {
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
                  handleCloseDeleteClientsPopup(false);
                  }}>
                    Delete
                </Button>
            </div>
      </div>
    </div>



  );
}


export default DeleteClientsPopup;
