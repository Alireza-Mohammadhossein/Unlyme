import React from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";





const DeleteEarningPopup = ({ handleCloseDeleteEarningPopup, data }) => {


  return (
    <div className='money-deletepopup'>
      <div className='money-deletepopup-header'>
        <div className='money-deletepopup-header-title'>
          <p>Delete earning</p>
        </div>
        
        <div className='money-deletepopup-header-subtitle'>
          <p>Are you sure you want to delete this earning?</p>
        </div>
      </div>

      <div className='money-deletepopup-content'>
            <div className='money-deletepopup-content-btn'>
                <Button onClick={() => handleCloseDeleteEarningPopup(false)}>
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
                  handleCloseDeleteEarningPopup(false);
                  }}>
                    Delete
                </Button>
            </div>
      </div>
    </div>



  );
}


export default DeleteEarningPopup;
