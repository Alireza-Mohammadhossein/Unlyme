import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import meetIcon from '../../../../../assets/images/vide-conferencing/meet.png';
import attendeeIcon from '../../../../../assets/images/vide-conferencing/attendee.png';
import nameIcon from '../../../../../assets/images/vide-conferencing/name.png';
import micOffIcon from '../../../../../assets/images/vide-conferencing/mic-off.png';
import videoOffIcon from '../../../../../assets/images/vide-conferencing/video-off.png';
import recordOnIcon from '../../../../../assets/images/vide-conferencing/record-on.png';
import passwordOnIcon from '../../../../../assets/images/vide-conferencing/password-on.png';
import './meet-now.scss';



  
  
const MeetNow = ({handleShowMain}) => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  const [mic, setMic] = useState(false);
  const [video, setVideo] = useState(false);
  const [record, setRecord] = useState(true);
  const [password, setPassword] = useState(true);

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

  return (
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
                        <img src={micOffIcon} alt="microphone" />
                        <span>Auto enable microphone</span>
                    </div>
                    <div className="meetnow-content_form-item-switch-btn">
                        <Switch
                            checked={mic}
                            onChange={handleMic}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                </div>

                <div className="meetnow-content_form-item-switch">
                    <div className="meetnow-content_form-item-switch-label" onClick={handleVideo}>
                        <img src={videoOffIcon} alt="video" />
                        <span>Auto enable camera</span>
                    </div>
                    <div className="meetnow-content_form-item-switch-btn">
                        <Switch
                            checked={video}
                            onChange={handleVideo}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                </div>

                <div className="meetnow-content_form-item-switch">
                    <div className="meetnow-content_form-item-switch-label" onClick={handleRecord}>
                        <img src={recordOnIcon} alt="record" />
                        <span>Auto enable recording</span>
                    </div>
                    <div className="meetnow-content_form-item-switch-btn">
                        <Switch
                            checked={record}
                            onChange={handleRecord}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                </div>

                <div className="meetnow-content_form-item-switch">
                    <div className="meetnow-content_form-item-switch-label" onClick={handlePassword}>
                        <img src={passwordOnIcon} alt="password" />
                        <span>Password protection</span>
                    </div>
                    <div className="meetnow-content_form-item-switch-btn">
                        <Switch
                            checked={password}
                            onChange={handlePassword}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default MeetNow;