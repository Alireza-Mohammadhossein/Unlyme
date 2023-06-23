import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Calendar from 'react-calendar';
import noteIcon from '../../../../../assets/images/tasksIcon.png';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import { handleCloseShortcut } from "../../../../../redux/app/appsModalSlice";




const NotesShortcut = () => {
  const dispatch = useDispatch();

  return (
    <div className="shortcut-modal_wrapper">
      <div className="shortcut-modal_header">
        <div className='shortcut-modal_header-info'>
          <div className="shortcut-modal_header-info-icon">
            <img src={noteIcon} />
          </div>

          <div className="shortcut-modal_header-info_text">
            <p className="shortcut-modal_header-info_text-title">Notes</p>
            <p className="shortcut-modal_header-info_text-subtitle">Add new note</p>
          </div>
        </div>

        <div className='shortcut-modal_header-close'>
          <IconButton aria-label="delete" onClick={() => dispatch(handleCloseShortcut())}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <div className="shortcut-modal_content">
      <form>

        <Grid container sx={{rowGap: '20px', marginTop: '20px'}}>
          <Grid item xs={12} className="shortcut-modal_content_task">
              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                    Title
                </p>
                <TextField placeholder="Title" className="shortcut-modal_content_form-item-input" />
              </div>
          </Grid>

          <Grid item xs={12} className="shortcut-modal_content_task">
            <div className="shortcut-modal_content_form-item">
              <p className="shortcut-modal_content_form-item-title">
                  Note
              </p>
              <TextField placeholder="Add description" className="shortcut-modal_content_form-item-input" multiline rows={4} />
            </div>
          </Grid>
        </Grid>
      </form>

      </div>
    </div>
  );
};

export default NotesShortcut;
