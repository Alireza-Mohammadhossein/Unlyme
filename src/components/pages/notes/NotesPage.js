import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../assets/images/my-services/notes.png";
import "./notes-page.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import NotesDetailsBar from './NotesDetailsBar';
import NotesPageContent from './NotesPageContent';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import gridIcon from "../../../assets/images/notepage/new/grid-view.svg";
import listIcon from "../../../assets/images/notepage/new/list-view.svg";
// import { CustomToolbarQuill } from "./CustomToolbarQuill";






const NotesPage = () => {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  const [searchNote, setSearchNote] = useState('');



  const [viewMode, setViewMode] = useState('list');
  const handleViewMode = (event, newView) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };



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
            <Grid
              item
              xl={2}
              lg={3}
              md={3}
              xs={12}
              className='cloud-page__header_share'
              sx={{display: 'flex', justifyContent: 'space-between'}}
            >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div className='cloud-page__header_share_icon'>
                  <img src={icon} />
                </div>

                <div className="cloud-page__header_share_title">
                  {t("NOTES_PAGE.TITLE")}
                </div>
              </div>

              <div>
                <div className='cloud-page__header_share_view'>
                  <ToggleButtonGroup
                      value={viewMode}
                      exclusive
                      onChange={handleViewMode}
                      aria-label="text alignment"
                      className='cloud-page__header_notes-details_actions_toggler'
                  >
                      <ToggleButton value="list" aria-label="list view">
                          <img src={listIcon} />
                          {/* <FormatListBulletedOutlinedIcon /> */}
                      </ToggleButton>
                      <ToggleButton value="grid" aria-label="grid view">
                          <img src={gridIcon} />
                          {/* <GridViewOutlinedIcon /> */}
                      </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xl={10}
              lg={9}
              md={9}
              xs={12}
              sx={{display: 'flex', alignItems: 'center'}}>
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

