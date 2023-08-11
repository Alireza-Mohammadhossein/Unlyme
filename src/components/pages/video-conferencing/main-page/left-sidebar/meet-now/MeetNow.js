import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import MeetingPage from "../../../meeting-page/MeetingPage";
import Modal from '@mui/material/Modal';
import { handleOpenMeetingPageModal } from "../../../../../../redux/app/appsModalSlice";
import { handleCloseMeetingPageModal } from "../../../../../../redux/app/appsModalSlice";
import meetIcon from '../../../../../../assets/images/vide-conferencing/meet.png';
import attendeeIcon from '../../../../../../assets/images/vide-conferencing/attendee.png';
import nameIcon from '../../../../../../assets/images/vide-conferencing/name.png';
import micOffIcon from '../../../../../../assets/images/vide-conferencing/mic-off.png';
import micOnIcon from '../../../../../../assets/images/vide-conferencing/mic-on.png';
import videoOffIcon from '../../../../../../assets/images/vide-conferencing/video-off.png';
import videoOnIcon from '../../../../../../assets/images/vide-conferencing/video-on.png';
import recordIcon from '../../../../../../assets/images/vide-conferencing/record.png';
import passwordIcon from '../../../../../../assets/images/vide-conferencing/password.png';
import './meet-now.scss';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';



  

const MeetNow = ({handleShowMain}) => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const openMeetingPageModal = useSelector((state) => state.appsModal.openMeetingPageModal);
  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  const [mic, setMic] = useState(false);
  const [video, setVideo] = useState(false);
  const [record, setRecord] = useState(true);
  const [password, setPassword] = useState(false);

  const handleMic = () => {
    setMic(!mic);
  };

  const handleVideo = () => {
    setVideo(!video);
  };

  const handleRecord = () => {
    setRecord(!record);
  };

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
    <>
        <div className="meetnow">
            <div className="meetnow-actions">
                <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={handleShowMain}>
                    Back
                </Button>
            </div>

            <div className="meetnow-content">
                <div className="meetnow-content_icon">
                    <img src={meetIcon} alt='Meet now' />

                    <p>Meet Now</p>
                </div>
                
                <form className="meetnow-content_form">
                    <div className="meetnow-content_form-item">
                        <p className="meetnow-content_form-item-title">
                            <img src={nameIcon} alt="conference name" />
                            <span>Conference name</span>
                        </p>
                        <TextField placeholder="Name your conference" className="meetnow-content_form-item-input" />
                    </div>

                    <div className="meetnow-content_form-item">
                        <p className="meetnow-content_form-item-title">
                            <img src={attendeeIcon} alt="conference name" />
                            <span>Attendee</span>
                        </p>
                        <TextField placeholder="Enter attendee name" className="meetnow-content_form-item-input" />
                    </div>

                    <div className="meetnow-content_form-item-switch">
                        <div className="meetnow-content_form-item-switch-label" onClick={handleMic}>
                            <img src={mic ? micOnIcon : micOffIcon} alt="microphone" />
                            <span>Auto enable microphone</span>
                        </div>
                        <div className="meetnow-content_form-item-switch-btn">
                            <IOSSwitch
                                checked={mic}
                                onChange={handleMic}
                            />
                        </div>
                    </div>

                    <div className="meetnow-content_form-item-switch">
                        <div className="meetnow-content_form-item-switch-label" onClick={handleVideo}>
                            <img src={video ? videoOnIcon : videoOffIcon} alt="video" />
                            <span>Auto enable camera</span>
                        </div>
                        <div className="meetnow-content_form-item-switch-btn">
                            <IOSSwitch
                                checked={video}
                                onChange={handleVideo}
                                // inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>

                    <div className="meetnow-content_form-item-switch">
                        <div className="meetnow-content_form-item-switch-label" onClick={handleRecord}>
                            <img src={recordIcon} alt="record" />
                            <span>Auto enable recording</span>
                        </div>
                        <div className="meetnow-content_form-item-switch-btn">
                            <IOSSwitch
                                checked={record}
                                onChange={handleRecord}
                                // inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>

                    <div className="meetnow-content_form-item-switch">
                        <div className="meetnow-content_form-item-switch-label" onClick={handlePassword}>
                            <img src={passwordIcon} alt="password" />
                            <span>Password protection</span>
                        </div>
                        <div className="meetnow-content_form-item-switch-btn">
                            <IOSSwitch
                                checked={password}
                                onChange={handlePassword}
                                // inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>

                    {password ?
                            <div className="meetnow-content_form-item">
                                <p className="meetnow-content_form-item-title-info">
                                    {/* <img src={attendeeIcon} alt="conference name" /> */}
                                    <span>A password will be needed to start the conference.</span>
                                </p>
                                {/* <TextField placeholder="Enter your password..." className="meetnow-content_form-item-input" type="password" /> */}
                                <FormControl className="meetnow-content_form-item-input">
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

                    <div className="meetnow-content_form-item-submit">
                        <Button className="meetnow-content_form-item-submit-btn" onClick={() => dispatch(handleOpenMeetingPageModal())}>
                            Start
                        </Button>
                    </div>
                </form>
            </div>
        </div>


        <Modal
            open={openMeetingPageModal}
            onClose={handleCloseMeetingPageModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={`meeting-page-modal ${firstPopupTab ? 'meeting-page-modal-shift-one' : ''} ${secondPopupTab ? 'meeting-page-modal-shift-two' : ''}`}
            disableEnforceFocus 
        >
            <div className='meeting-page-modal-container' >
                <MeetingPage />
            </div>
        </Modal>

    </>
  );
}

export default MeetNow;