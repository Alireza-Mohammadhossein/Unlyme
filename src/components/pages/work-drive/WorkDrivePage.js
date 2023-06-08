import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../assets/images/my-services/drive.png";
import "./work-drive-page.scss";
import WorkDriveDetailsBar from './WorkDriveDetailsBar';
import WorkDriveContent from './WorkDriveContent'
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';






const WorkDrivePage = () => {
  const { t, i18n } = useTranslation();
  setChonkyDefaults({ iconComponent: ChonkyIconFA });


  return (
    <div className="page-container">
      {/* <CloudPage
        title={t("NOTES_PAGE.TITLE")}
        icon={icon}
        content={NotesPageContent()}
      /> */}
      <div className="cloud-page">
        <div className="cloud-page__header">
          <Grid container spacing={2}>  
            <Grid item lg={3} md={3} xs={12} className='cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={icon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("WORK_DRIVE_PAGE.TITLE")}
              </div>
            </Grid>
            <Grid item lg={9} md={9} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
              <div className='cloud-page__header_work-drive-page-details'>
                <WorkDriveDetailsBar/>
              </div>
            </Grid>
          </Grid>


        </div>
        <div className="cloud-page__content">
          <WorkDriveContent />
        </div>
      </div>
    </div>
  );
};

export default WorkDrivePage;


