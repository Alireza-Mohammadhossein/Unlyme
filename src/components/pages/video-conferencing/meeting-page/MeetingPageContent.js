import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useSelector} from "react-redux";
import MeetingPageSidebar from "./MeetingPageSidebar";
import MeetingPageMain from "./MeetingPageMain";



  
  const MeetingPageContent = () => {
  
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  
    return (
      <div className="meeting-page">

        <div className="grid-content">
          <div className="grid-content_left">
            <div className="meeting-page_sidebar">
              <MeetingPageSidebar />
            </div>
          </div>

          <div className="grid-content_right">
            <div className="meeting-page_main">
              <MeetingPageMain />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default MeetingPageContent;