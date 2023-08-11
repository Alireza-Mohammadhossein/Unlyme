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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import scheduleIcon from '../../../../../../assets/images/vide-conferencing/schedule.png';
import dateIcon from '../../../../../../assets/images/vide-conferencing/date.png';
import nameIcon from '../../../../../../assets/images/vide-conferencing/name.png';
import attendeeIcon from '../../../../../../assets/images/vide-conferencing/attendee.png';
import timezoneIcon from '../../../../../../assets/images/vide-conferencing/timezone.png';
import passwordIcon from '../../../../../../assets/images/vide-conferencing/password.png';
import './schedule.scss';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';




  

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


  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 23,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      marginTop: 3 ,
      marginBottom: 3 ,
      marginRight: 5 ,
      marginLeft: 4 ,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
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
      width: 17,
      height: 17,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#c4bfd2' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


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
                        <Grid item xs={12} md={3} className="schedule-content_form-item-date-form-field">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              defaultValue={dayjs()}
                              disablePast
                            />
                          </LocalizationProvider>
                        </Grid>

                        <Grid item xs={6} md={3} className="schedule-content_form-item-date-form-field">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimeField
                              value={startTimeValue}
                              onChange={(newValue) => setStartTimeValue(newValue)}
                              format="hh:mm a"
                              size="small"
                            />
                          </LocalizationProvider>
                        </Grid>
                        
                        <Grid item xs={6} md={3} className="schedule-content_form-item-date-form-field">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimeField
                              value={endTimeValue}
                              onChange={(newValue) => setEndTimeValue(newValue)}
                              format="hh:mm a"
                              size="small"
                            />
                          </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} md={3} className="schedule-content_form-item-date-form-field">
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
                    <p className="schedule-content_form-item-title">
                        <img src={attendeeIcon} alt="conference name" />
                        <span>Attendee</span>
                    </p>
                    <TextField placeholder="Enter attendee name" className="schedule-content_form-item-input" />
                </div>

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-checkbox">
                    <FormControlLabel control={<Checkbox />} label="Recurring meeting" />
                  </div>

                </div>

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-switch">
                    <div className="schedule-content_form-item-switch-label" onClick={handlePassword}>
                        <img src={passwordIcon} alt="password" />
                        <span>Password protection</span>
                    </div>
                    <div className="schedule-content_form-item-switch-btn">
                        <IOSSwitch
                            checked={password}
                            onChange={handlePassword}
                            // inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                  </div>

                </div>

                {password ?
                    <div className="schedule-content_form-item">
                        <p className="schedule-content_form-item-title-info">
                            {/* <img src={attendeeIcon} alt="conference name" /> */}
                            <span>A password will be needed to start the conference.</span>
                        </p>
                        {/* <TextField placeholder="Enter your password..." className="schedule-content_form-item-input" type="password" /> */}
                        <FormControl className="schedule-content_form-item-input">
                          <OutlinedInput
                            placeholder="Enter your password"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                    </div>
                  :
                    ''
                }

                <div className="schedule-content_form-item">
                  <div className="schedule-content_form-item-submit">
                    <Button className="schedule-content_form-item-submit-btn">
                        Schedule
                    </Button>
                  </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Schedule;