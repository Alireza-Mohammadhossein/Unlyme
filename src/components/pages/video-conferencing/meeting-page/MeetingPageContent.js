import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import MeetingPageSidebar from "./MeetingPageSidebar";
import MeetingPageMain from "./MeetingPageMain";





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div sx={{ p: 3 }}>
          {children}
        </div>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



  
  
  
  const MeetingPageContent = () => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


    const ITEM_HEIGHT = 48;
    const options = ["Add Calendar", "Add Tasks", "Add Notes"];
  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  
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