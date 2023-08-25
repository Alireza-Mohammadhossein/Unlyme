import React, { useState } from 'react';
import './invoices-popups.scss';
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
    <div className='invoices-attachpopup'>
      <div className='invoices-attachpopup-header'>
        <div className='invoices-attachpopup-header-title'>
          <p>Attach to a project {data.data.id}</p>
        </div>

        <div className='invoices-attachpopup-header-btn'>
          <IconButton onClick={handleCloseAttachProjectPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-attachpopup-list'>
        <div className='invoices-attachpopup-item flex'>
            <p className='invoices-attachpopup-item-title'>
              Project
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoices-attachpopup-item-select"
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

        <div className='invoices-attachpopup-btn'>
          <Button className='invoices-attachpopup-btn-reset' onClick={handleCancelProject}>Cancel</Button>

          <Button className='invoices-attachpopup-btn-submit' onClick={() => handleSubmitProject(data)}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AttachProjectPopup;
