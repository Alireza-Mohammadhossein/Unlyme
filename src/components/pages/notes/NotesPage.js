import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../assets/images/my-services/notes.png";
import "./notes-page.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import NotesDetailsBar from './NotesDetailsBar';
import NotesPageContent from './NotesPageContent';
// import { CustomToolbarQuill } from "./CustomToolbarQuill";






const NotesPage = () => {
  const { t, i18n } = useTranslation();

  const [searchNote, setSearchNote] = useState('');


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
            <Grid item xl={2} lg={3} md={3} xs={12} className='cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={icon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("NOTES_PAGE.TITLE")}
              </div>
            </Grid>
            <Grid item xl={10} lg={9} md={9} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
              <div className='cloud-page__header_notes-details'>
                <NotesDetailsBar setSearchNote={setSearchNote} />
              </div>
            </Grid>
          </Grid>


        </div>
        <div className="cloud-page__content">
          <NotesPageContent searchNote={searchNote} setSearchNote={setSearchNote} />
        </div>
      </div>
    </div>
  );
};

export default NotesPage;

