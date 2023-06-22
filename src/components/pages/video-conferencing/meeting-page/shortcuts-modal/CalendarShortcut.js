import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Calendar from 'react-calendar';
import calendarIcon from '../../../../../assets/images/calendarIcon.png';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TimeField } from "@mui/x-date-pickers/TimeField";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';






const CalendarShortcut = () => {

  const [date, setDate] = useState(new Date());

  const onChangeDate = (newDate) => {
    setDate(newDate);
    console.log(newDate)
  }

  const [timeValue, setTimeValue] = useState(dayjs());
  const dayNow = dayjs().date();
  const monthNow = dayjs().format('MMM');
  const yearNow = dayjs().format('YYYY');




  return (
    <div className="shortcut-modal_wrapper">
      <div className="shortcut-modal_header">
        <div className='shortcut-modal_header-info'>
          <div className="shortcut-modal_header-info-icon">
            <img src={calendarIcon} />
          </div>

          <div className="shortcut-modal_header-info_text">
            <p className="shortcut-modal_header-info_text-title">Calendar</p>
            <p className="shortcut-modal_header-info_text-subtitle">Add event</p>
          </div>
        </div>

        <div className='shortcut-modal_header-close'>
          <IconButton aria-label="delete">
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <div className="shortcut-modal_content">
        <Grid container>
          <Grid item xs={12} md={5} lg={5} className="shortcut-modal_content-calendar">
            <Calendar
              onChange={onChangeDate}
              value={date}
            />
          </Grid>
          
          <Grid item xs={12} md={7} lg={7}>
            
            <form className="shortcut-modal_content_form">
              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                  {monthNow} {dayNow}, {yearNow}
                </p>
              </div>

              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                    Event name
                </p>
                <TextField placeholder="Name your event" className="shortcut-modal_content_form-item-input" />
              </div>

              <div className="shortcut-modal_content_form-item">
                <p className="shortcut-modal_content_form-item-title">
                    Time
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    value={timeValue}
                    onChange={(newValue) => setTimeValue(newValue)}
                    format="hh:mm a"
                    className="my-services__video-conference_form_time"
                    size="small"
                  />
                </LocalizationProvider>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CalendarShortcut;
