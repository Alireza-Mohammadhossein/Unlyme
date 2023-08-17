import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Calendar from 'react-calendar';
import Button from '@mui/material/Button';
import taskIcon from '../../../../../assets/images/my-services/tasks.png';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from "react-redux";
import { handleCloseShortcut } from "../../../../../redux/app/appsModalSlice";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs from "dayjs";







const TasksShortcut = () => {
  const dispatch = useDispatch();
  const [startTimeValue, setStartTimeValue] = useState(dayjs());



  return (
    <div className="shortcut-modal_wrapper">
      <div className="shortcut-modal_header">
        <div className='shortcut-modal_header-info'>
          <div className="shortcut-modal_header-info-icon">
            <img src={taskIcon} />
          </div>

          <div className="shortcut-modal_header-info_text">
            <p className="shortcut-modal_header-info_text-title">Tasks</p>
            <p className="shortcut-modal_header-info_text-subtitle">Add new task</p>
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
            <Grid item xs={12} md={4} lg={4} className="shortcut-modal_content_task">
                <div className="shortcut-modal_content_form-item">
                  <p className="shortcut-modal_content_form-item-title">
                      Task name
                  </p>
                  <TextField placeholder="Name your task" className="shortcut-modal_content_form-item-input" />
                </div>
            </Grid>

            <Grid item xs={6} md={4} lg={3} className="shortcut-modal_content_task" sx={{paddingLeft: '5px !important'}}>
              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                    Date deadline
                </p>
    
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker className="shortcut-modal_content_task-date" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

            </Grid>
            
            <Grid item xs={6} md={4} lg={3} className="shortcut-modal_content_task" sx={{paddingLeft: '5px !important'}}>
              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                    {/* Time deadline */}
                </p>
    
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    value={startTimeValue}
                    onChange={(newValue) => setStartTimeValue(newValue)}
                    format="hh:mm a"
                    size="small"
                    className="shortcut-modal_content_task-date time"
                  />
                </LocalizationProvider>
              </div>
            </Grid>

            <Grid item xs={12} md={12} lg={2} className="shortcut-modal_content_task">
            </Grid>
            
            <Grid item xs={12} md={12} lg={12} className="shortcut-modal_content_task">
              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                    Description
                </p>
                <TextField placeholder="Add description" className="shortcut-modal_content_form-item-input" multiline rows={4} />
              </div>
            </Grid>
          </Grid>
        </form>

        <div className="shortcut-modal_content_submit">
          <Button className="shortcut-modal_content_submit-btn">
            Save task
          </Button>
        </div>
      </div>

      {/* <div className="shortcut-modal_footer">
        <Button className="shortcut-modal_footer-btn">
          Save
        </Button>
      </div> */}
    </div>
  );
};

export default TasksShortcut;
