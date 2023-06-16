import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import AddIcon from '@mui/icons-material/Add';
import TimezoneSelect from 'react-timezone-select';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import scheduleIcon from '../../../../../assets/images/vide-conferencing/schedule.png';
import dateIcon from '../../../../../assets/images/vide-conferencing/date.png';
import nameIcon from '../../../../../assets/images/vide-conferencing/name.png';
import timezoneIcon from '../../../../../assets/images/vide-conferencing/timezone.png';
import passwordIcon from '../../../../../assets/images/vide-conferencing/password.png';
import './schedule.scss';



  

const Schedule = ({handleShowMain}) => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  const [startTimeValue, setStartTimeValue] = useState(dayjs());
  const [endTimeValue, setEndTimeValue] = useState(dayjs());

  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  

const [password, setPassword] = useState('')
  const handlePassword = () => {
    setPassword(!password);
  };

  return (
    <div className="schedule">
        <div className="schedule-actions">
            <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={handleShowMain}>
                Back
            </Button>
        </div>

        <div className="schedule-content">
            <div className="schedule-content_icon">
                <img src={scheduleIcon} alt='schedule' />

                <p>Schedule</p>
            </div>
            
            <form className="schedule-content_form">
                <div className="schedule-content_form-item">
                    <p className="schedule-content_form-item-title">
                        <img src={nameIcon} alt="conference name" />
                        <span>Conference name</span>
                    </p>
                    <TextField placeholder="Name your conference" className="schedule-content_form-item-input" />
                </div>

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-date">
                    <p className="schedule-content_form-item-date-title">
                          <img src={dateIcon} alt="date" />
                          <span>Date & Time</span>
                    </p>

                    <form className="schedule-content_form-item-date-form">
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4} className="schedule-content_form-item-date-form-field">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              defaultValue={dayjs()}
                              disablePast
                            />
                          </LocalizationProvider>
                        </Grid>

                        <Grid item xs={6} md={4} className="schedule-content_form-item-date-form-field">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimeField
                              value={startTimeValue}
                              onChange={(newValue) => setStartTimeValue(newValue)}
                              format="hh:mm a"
                              size="small"
                            />
                          </LocalizationProvider>
                        </Grid>
                        
                        <Grid item xs={6} md={4} className="schedule-content_form-item-date-form-field">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimeField
                              value={endTimeValue}
                              onChange={(newValue) => setEndTimeValue(newValue)}
                              format="hh:mm a"
                              size="small"
                            />
                          </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} className="schedule-content_form-item-date-form-field">
                          <Button variant="outlined" startIcon={<AddIcon />} >
                              Add to calendar
                          </Button>
                        </Grid>
                      </Grid>
                    </form>

                  </div>

                </div>

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-timezone">
                    <p className="schedule-content_form-item-timezone-title">
                        <img src={timezoneIcon} alt="conference name" />
                        <span>Time zone</span>
                    </p>
                    
                    <div className="schedule-content_form-item-timezone-select">
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />
                    </div>
                  </div>
                </div>

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-switch">
                    <div className="schedule-content_form-item-switch-label" onClick={handlePassword}>
                        <img src={passwordIcon} alt="password" />
                        <span>Password protection</span>
                    </div>
                    <div className="schedule-content_form-item-switch-btn">
                        <Switch
                            checked={password}
                            onChange={handlePassword}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                  </div>

                </div>

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-submit">
                    <button className="schedule-content_form-item-submit-btn">
                        Start
                    </button>
                  </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Schedule;