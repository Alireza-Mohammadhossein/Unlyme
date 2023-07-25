import React from 'react';
import './products-popups.scss';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";



const DeleteProductPopup = ({ handleCloseDeleteProductPopup, data }) => {

  return (
    <div className='products-deletepopup'>
      <div className='products-deletepopup-header'>
        <div className='products-deletepopup-header-title'>
          <p>Delete product</p>
        </div>
        
        <div className='products-deletepopup-header-subtitle'>
          <p>Are you sure you want to delete this product?</p>
        </div>
      </div>

      <div className='products-deletepopup-content'>
            <div className='products-deletepopup-content-btn'>
                <Button onClick={() => handleCloseDeleteProductPopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='products-deletepopup-content-btn'>
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
                  handleCloseDeleteProductPopup(false);
                  }}>
                    Delete
                </Button>
            </div>
      </div>
    </div>



  );
}


export default DeleteProductPopup;
