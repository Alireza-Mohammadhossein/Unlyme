import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



  
  
const Schedule = ({handleShowMain}) => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



  return (
    <div className="video-conferencing_schedule">
        <div className="video-conferencing_schedule-actions">
            <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={handleShowMain}>
                Back
            </Button>
        </div>
    </div>
  );
}

export default Schedule;