import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../../assets/images/my-services/video-conference.png";
import "./meeting-page.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import MeetingDetailsBar from './MeetingDetailsBar';
import MeetingPageContent from './MeetingPageContent';
// import { CustomToolbarQuill } from "./CustomToolbarQuill";






const MeetingPage = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className="page-container">
      <div className="cloud-page">
        <div className="cloud-page__header">
          <div className="grid-content">
            <div className="grid-content_left">
              <div className='cloud-page__header_share'>
                <div className='cloud-page__header_share_icon'>
                  <img src={icon} />
                </div>

                <div className="cloud-page__header_share_title">
                {t("VIDEO_CONFERENCING_PAGE.TITLE")}
                </div>
              </div>
            </div>

            <div className="grid-content_right">
              <div className='cloud-page__header_video-conferencing_details'>
                <MeetingDetailsBar />
              </div>
            </div>
          </div>

        </div>
        <div className="cloud-page__content">
          <MeetingPageContent />
        </div>
      </div>

    </div>
  );
};

export default MeetingPage;

