import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../assets/images/my-services/notes.png";
import "./video-conferencing-page.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import VideoConferencingLeftSide from "./left-sidebar/VideoConferencingLeftSide";
import VideoConferencingRightSide from "./right-sidebar/VideoConferencingRightSide";





function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"div"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  
  
  
  const VideoConferencingPageContent = () => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  
  
  
    return (
      <div className="video-conferencing-page">
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              display: {
                lg: secondPopupTab ? "none" : "block",
                md: secondPopupTab ? "none" : "block",
              },
            }}
          >
            <div className="video-conferencing-page_sidebar">  
              <div className="video-conferencing-page_sidebar-section">
                <VideoConferencingLeftSide />
              </div>
            </div>
          </Grid>
  
  
          <Grid
            item
            lg={secondPopupTab ? 12 : 6}
            md={secondPopupTab ? 12 : 6}
            xs={12}
          >
            <div className="video-conferencing-page_main">
              <div className="video-conferencing-page_main_video-conferencing">
                <VideoConferencingRightSide />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default VideoConferencingPageContent;