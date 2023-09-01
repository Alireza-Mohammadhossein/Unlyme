import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './video-conferencing-leftside.scss';
import { useSelector, useDispatch } from "react-redux";
import meetIcon from '../../../../../assets/images/vide-conferencing/meet.png';
import scheduleIcon from '../../../../../assets/images/vide-conferencing/schedule.png';
import MeetNow from "./meet-now/MeetNow";
import Schedule from './schedule/Schedule';




  
  
const VideoConferencingLeftSide = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  const [showMain, setShowMain] = useState(true);
  const [showMeet, setShowMeet] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  
  const handleShowMain = () => {
    setShowMain(true);
    setShowMeet(false);
    setShowSchedule(false);
  }

  const handleShowMeet = () => {
    setShowMeet(true);
    setShowMain(false)
  }

  const handleShowSchedule = () => {
    setShowSchedule(true);
    setShowMain(false)
  }

  

  return (
    <div className="video-conferencing_leftside">
      <div className={`video-conferencing_leftside_actions ${!showMain ? 'close' : ''}`}>
        <div className='video-conferencing_leftside_actions-btn' onClick={handleShowMeet}>
          <img src={meetIcon} alt='Meet now' />
          <p>Meet now</p>
        </div>

        <div className='video-conferencing_leftside_actions-btn' onClick={handleShowSchedule}>
          <img src={scheduleIcon} alt='Schedule' />
          <p>Schedule</p>
        </div>
      </div>

      <div className={`meetnow-container ${showMeet ? 'open' : ''}`}>
        <MeetNow handleShowMain={handleShowMain} />
      </div>

      <div className={`schedule-container ${showSchedule ? 'open' : ''}`}>
        <Schedule handleShowMain={handleShowMain} />
      </div>
    </div>
  );
}

export default VideoConferencingLeftSide;