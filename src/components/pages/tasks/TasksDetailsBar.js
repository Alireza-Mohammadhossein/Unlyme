import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';



const TasksDetailsBar = () => {
  const dispatch = useDispatch();
    

    return (
      <div className='cloud-page__header_tasks-page_details-close'>
        <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
          <CloseIcon />
        </IconButton>
      </div>
    )
} 

export default TasksDetailsBar;
