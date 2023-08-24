import React, { useState } from 'react';
import './popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CirclePicker } from 'react-color';
import Checkbox from '@mui/material/Checkbox';






const SettingPopup = ({ handleCloseSettingPopup, selectedCategory, categoryIndex, Calendar_page_current_events}) => {

    const [newSelectedCategory, setNewSelectedCategory] = useState(selectedCategory)

    const [title, setTitle] = useState(selectedCategory.name);
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const [color, setColor] = useState(selectedCategory.color);
    const handleColor = (event) => {
      setColor(event.target.value);
    };

    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active);
    }


    


    const handleCancelEdit = () => {
      
      Calendar_page_current_events.splice(categoryIndex,categoryIndex+1);
      handleCloseSettingPopup();
    }
  
    const handleSubmitEdit = () => {
        Calendar_page_current_events[categoryIndex] = { ...Calendar_page_current_events[categoryIndex], color: color, name: title, category: title };
        handleCloseSettingPopup();
    }


  return (
    <div className='settingpopup'>
      <div className='settingpopup-header'>
        <div className='settingpopup-header-title'>
          <p>Edit calendar</p>
        </div>

        <div className='settingpopup-header-btn'>
          <IconButton onClick={handleCloseSettingPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='settingpopup-list'>
        <div className='settingpopup-item flex'>
          <p className="settingpopup-item-title">
              Title
          </p>

          <FormControl fullWidth>
            <TextField className="settingpopup-item-input" value={title} onChange={handleTitle} />
          </FormControl>
        </div>

        <div className='settingpopup-item flex'>
            <p className='settingpopup-item-title'>
              Color
            </p>

            <FormControl fullWidth>

                <Select
                  className="settingpopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  onChange={handleColor}
                >
                  <MenuItem value={color}><div className='settingpopup-item-select-container'>{color} <span style={{backgroundColor: color}} className="bullet"></span></div></MenuItem>
                  
                  <MenuItem disableRipple={true} className='settingpopup-item-select-color'>
                      <CirclePicker onChangeComplete={(e) => {
                            setColor(e.hex)
                            console.log(color)
                        }} />
                  </MenuItem>
                </Select>
            </FormControl>
        </div>


        <div className='settingpopup-item'>
          <div className='settingpopup-item-checkbox'>
            <FormControlLabel control={<Checkbox value={active} onChange={handleActive} />} label="Active" />
          </div>
        </div>


        <div className='settingpopup-btn'>
          <Button className='settingpopup-btn-reset' onClick={handleCancelEdit}>Delete</Button>

          <Button className='settingpopup-btn-submit' onClick={handleSubmitEdit}>Save</Button>
        </div>
      </div>

    </div>



  );
}


export default SettingPopup;
