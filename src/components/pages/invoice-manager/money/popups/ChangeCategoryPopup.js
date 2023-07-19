import React, { useState } from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from "react-toastify";




const ChangeCategoryPopup = ({ handleCloseChangeCategoryPopup, data }) => {

    const [category, setCategory] = useState('');
    const handleCategory = (event) => {
      setCategory(event.target.value);
    };

    
    const handleCancelCategory = () => {
        handleCloseChangeCategoryPopup();
        setCategory('');
      }
    
      const handleSubmitCategory = () => {
        handleCloseChangeCategoryPopup();
        setCategory('');
        toast.error(`You have clicked on Change category by id = ${data.data.id}!`, {
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
      } 

  return (
    <div className='money-cloneinvoicepopup'>
      <div className='money-cloneinvoicepopup-header'>
        <div className='money-cloneinvoicepopup-header-title'>
          <p>Change category</p>
        </div>

        <div className='money-cloneinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseChangeCategoryPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-cloneinvoicepopup-list'>
        <div className='money-cloneinvoicepopup-item flex'>
            <p className='money-cloneinvoicepopup-item-title'>
              Category
            </p>

            <FormControl fullWidth>
                <Select
                  className="money-cloneinvoicepopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value='category1'>Category 1</MenuItem>
                  <MenuItem value='category2'>Category 2</MenuItem>
                  <MenuItem value='category3'>Category 3</MenuItem>
                  <MenuItem value='category4'>Category 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='money-cloneinvoicepopup-btn'>
          <Button className='money-cloneinvoicepopup-btn-reset' onClick={handleCancelCategory}>Cancel</Button>

          <Button className='money-cloneinvoicepopup-btn-submit' onClick={handleSubmitCategory}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default ChangeCategoryPopup;
