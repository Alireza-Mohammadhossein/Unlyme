import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import './video-conferencing-leftside.scss';
import { useSelector, useDispatch } from "react-redux";



  
  
const VideoConferencingLeftSide = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



  return (
    <div className="video-conferencing_leftside">
      left
    </div>
  );
}

export default VideoConferencingLeftSide;