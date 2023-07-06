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
        <Grid container spacing={3}>
          <Grid
            item
            lg={3}
            md={3}
            xs={12}
            sx={{
              display: {
                lg: secondPopupTab ? "none" : "block",
                md: secondPopupTab ? "none" : "block",
              },
            }}
          >
            <div className="meeting-page_sidebar">
              <MeetingPageSidebar />
            </div>
          </Grid>
  
  
          <Grid
            item
            lg={secondPopupTab ? 12 : 9}
            md={secondPopupTab ? 12 : 9}
            xs={12}
          >
            <div className="meeting-page_main">
                <MeetingPageMain />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default MeetingPageContent;