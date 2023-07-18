import React, { useState } from 'react';
import './invoice-manager-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";




const ChangeCategoryPopup = ({ handleCloseChangeCategoryPopup }) => {

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
      } 

  return (
    <div className='invoice-manager-cloneinvoicepopup'>
      <div className='invoice-manager-cloneinvoicepopup-header'>
        <div className='invoice-manager-cloneinvoicepopup-header-title'>
          <p>Change category</p>
        </div>

        <div className='invoice-manager-cloneinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseChangeCategoryPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoice-manager-cloneinvoicepopup-list'>
        <div className='invoice-manager-cloneinvoicepopup-item flex'>
            <p className='invoice-manager-cloneinvoicepopup-item-title'>
              Category
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoice-manager-cloneinvoicepopup-item-select"
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

        <div className='invoice-manager-cloneinvoicepopup-btn'>
          <Button className='invoice-manager-cloneinvoicepopup-btn-reset' onClick={handleCancelCategory}>Cancel</Button>

          <Button className='invoice-manager-cloneinvoicepopup-btn-submit' onClick={handleSubmitCategory}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default ChangeCategoryPopup;
