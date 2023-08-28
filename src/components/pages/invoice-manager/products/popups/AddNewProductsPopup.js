import React, { useState } from 'react';
import './products-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Switch from '@mui/material/Switch';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';
import helpIcon from '../../../../../assets/images/invoice-manager/help-circle.svg';
import { styled } from '@mui/material/styles';




const AddNewProductsPopup = ({ handleCloseAddNewProductsPopup }) => {

  const [description, setDescription] = useState('');
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const [rate, setRate] = useState('');
  const handleRate = (event) => {
    setRate(event.target.value);
  };

  const [units, setUnits] = useState('');
  const handleUnits = (event) => {
    setUnits(event.target.value);
  };

  const [category, setCategory] = useState('default');
  const handleCategory = (event) => {
      setCategory(event.target.value);
  };

  const [additionalInfo, setAdditionalInfo] = useState(false);
  const handleAdditionalInfo = () => {
      setAdditionalInfo(!additionalInfo);
  };

  const [estimateNotes, setEstimateNotes] = useState('');
  const handleEstimateNotes = (event) => {
    setEstimateNotes(event.target.value);
  };


  const handleCancelAddPayment = () => {
    handleCloseAddNewProductsPopup();
    setAdditionalInfo(false);
  }

  const handleSubmitAddPayment = () => {
    handleCloseAddNewProductsPopup();
    setAdditionalInfo(false);
  }


  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 31,
    height: 18,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      height: '100%',
      marginTop: 0 ,
      marginBottom: 0 ,
      marginRight: 0 ,
      marginLeft: 2 ,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        marginTop: 0 ,
        marginBottom: 0 ,
        marginRight: 2 ,
        marginLeft: 0 ,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#51A3FFCC',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 13,
      height: 13,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#7676804D' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


  return (
    <div className='products-addnewpopup'>
      <div className='products-addnewpopup-header'>
        <div className='products-addnewpopup-header-title'>
          <p>Add new product</p>
        </div>

        <div className='products-addnewpopup-header-btn'>
          <IconButton onClick={handleCloseAddNewProductsPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='products-addnewpopup-list'>

        <div className='products-addnewpopup-item description'>
          <p className='products-addnewpopup-item-title'>
            Description*
          </p>

          <TextField
              className='products-addnewpopup-item-input'
              variant="outlined"
              onChange={handleDescription}
              multiline
              maxRows={5}
          />
        </div>

        <div className='products-addnewpopup-item flex'>
          <p className="products-addnewpopup-item-title">
              Rate*
          </p>

          <div className='products-addnewpopup-item-number'>
            <TextField
              placeholder=""
              value={rate}
              onChange={handleRate}
              className="products-addnewpopup-item-number-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>
        </div>

        <div className='products-addnewpopup-item notes'>
          <p className='products-addnewpopup-item-title'>
            Units*

            <Tooltip className='tooltip' id='addnewproductpopup_tooltip' title="Example: Hr, Each, Item" arrow placement="top-start">
              <IconButton>
                {/* <HelpOutlineIcon /> */}
                <img src={helpIcon} /> 
              </IconButton>
            </Tooltip>
          </p>

          <TextField
              className='products-addnewpopup-item-input'
              variant="outlined"
              onChange={handleUnits}
          />
        </div>

        <div className='products-addnewpopup-item flex'>
            <p className='products-addnewpopup-item-title'>
              Category*
            </p>

            <FormControl fullWidth>
                <Select
                  className="products-addnewpopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value='default'>Default</MenuItem>
                  <MenuItem value='category2'>Category 2</MenuItem>
                  <MenuItem value='category3'>Category 3</MenuItem>
                  <MenuItem value='category4'>Category 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='products-addnewpopup-item switch'>
            <p className='products-addnewpopup-item-title' onClick={handleAdditionalInfo}>
              Estimate notes
              
              <Tooltip className='tooltip' id='addnewproductpopup_tooltip' title="These notes will be displayed when editing an estimate or invoice. These notes are not visible to the client. " arrow placement="top-start">
                <IconButton>
                  {/* <HelpOutlineIcon /> */}

                  <img src={helpIcon} />
                </IconButton>
              </Tooltip>
            </p>

            {/* <Switch
                checked={additionalInfo}
                onChange={handleAdditionalInfo}
                // inputProps={{ 'aria-label': 'controlled' }}
            /> */}

            <IOSSwitch
              checked={additionalInfo}
              onChange={handleAdditionalInfo}
            />
        </div>

        {
          additionalInfo ? 
              <>
                <div className='products-addnewpopup-item estimate'>
                  <TextField
                      className='products-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleEstimateNotes}
                      multiline
                      maxRows={5}
                  />
                </div>
              </>
            :
              ''
        }


        <div className='products-addnewpopup-item flex'>
          <p className='products-addnewpopup-item-title required'>
            * Required
          </p>
        </div>


        <div className='products-addnewpopup-btn'>
          <Button className='products-addnewpopup-btn-reset' onClick={handleCancelAddPayment}>Cancel</Button>

          <Button className='products-addnewpopup-btn-submit' onClick={handleSubmitAddPayment}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddNewProductsPopup;
