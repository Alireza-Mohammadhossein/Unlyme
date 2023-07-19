import React, { useState } from 'react';
import './money-popups.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from "react-toastify";





const AttachProjectPopup = ({ handleCloseAttachProjectPopup, data }) => {

    const [project, setProject] = useState('');
    const handleProject = (event) => {
      setProject(event.target.value);
    };

    
    const handleCancelProject = () => {
        handleCloseAttachProjectPopup();
        setProject('');
      }
    
      const handleSubmitProject = (data) => {
        handleCloseAttachProjectPopup();
        setProject('');
        toast.error(`You have clicked on Delete invoice by id = ${data.data.id}!`, {
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
          <p>Attach to a project {data.data.id}</p>
        </div>

        <div className='money-cloneinvoicepopup-header-btn'>
          <IconButton onClick={handleCloseAttachProjectPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='money-cloneinvoicepopup-list'>
        <div className='money-cloneinvoicepopup-item flex'>
            <p className='money-cloneinvoicepopup-item-title'>
              Project
            </p>

            <FormControl fullWidth>
                <Select
                  className="money-cloneinvoicepopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={project}
                  onChange={handleProject}
                >
                  <MenuItem value='project1'>Project 1</MenuItem>
                  <MenuItem value='project2'>Project 2</MenuItem>
                  <MenuItem value='project3'>Project 3</MenuItem>
                  <MenuItem value='project4'>Project 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='money-cloneinvoicepopup-btn'>
          <Button className='money-cloneinvoicepopup-btn-reset' onClick={handleCancelProject}>Cancel</Button>

          <Button className='money-cloneinvoicepopup-btn-submit' onClick={() => handleSubmitProject(data)}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AttachProjectPopup;
