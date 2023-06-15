import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import './video-conferencing-rightside.scss';
import { useSelector, useDispatch } from "react-redux";



  
  
const VideoConferencingRightSide = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



  return (
    <div className="video-conferencing_rightside">
      right
    </div>
  );
}

export default VideoConferencingRightSide;