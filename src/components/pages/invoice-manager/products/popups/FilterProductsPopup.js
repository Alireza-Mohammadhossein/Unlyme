import React, { useState } from 'react';
import './products-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';




const FilterProductsPopup = ({ setFilterProductsPopup }) => {


  const [rateMin, setRateMin] = useState('');
  const handleRateMin = (event) => {
    setRateMin(event.target.value);
  };

  const [rateMax, setRateMax] = useState('');
  const handleRateMax = (event) => {
    setRateMax(event.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };




  const handleResetFilters = () => {
    setRateMin('');
    setRateMax('');
    setCategory('');
  }

  const handleSubmitFilters = () => {
    setFilterProductsPopup(false)
    setRateMin('');
    setRateMax('');
    setCategory('');
  }


  return (
    <div className='products-filterpopup'>
      <div className='products-filterpopup-header'>
        <div className='products-filterpopup-header-title'>
          <FilterListIcon />
          <p>Filter products</p>
        </div>

        <div className='products-filterpopup-header-btn'>
          <IconButton onClick={() => setFilterProductsPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='products-filterpopup-list'>
        <div className='products-filterpopup-item'>
          <p className="products-filterpopup-item-title">
              Rate
          </p>

          <div className='products-filterpopup-item-double'>
            <TextField
              placeholder="Min"
              value={rateMin}
              onChange={handleRateMin}
              className="products-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              placeholder="Max"
              value={rateMax}
              onChange={handleRateMax}
              className="products-filterpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

          </div>
        </div>

        <div className='products-filterpopup-item'>
          <p className="products-filterpopup-item-title">
              Category
          </p>

          <FormControl fullWidth>
            <Select
              className="products-filterpopup-item-select"
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


        <div className='products-filterpopup-btn'>
          <Button className='products-filterpopup-btn-reset' onClick={handleResetFilters}>Reset</Button>

          <Button className='products-filterpopup-btn-submit' onClick={handleSubmitFilters}>Apply Filter</Button>
        </div>
      </div>
    </div>
  );
}


export default FilterProductsPopup;
