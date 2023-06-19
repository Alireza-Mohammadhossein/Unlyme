import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';






  
  
  
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
              <div className="meeting-page_sidebar_open-apps">
                <Button
                  variant="outlined"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  startIcon={<AddIcon />}
                  className="meeting-page_sidebar_open-apps_btn"
                >
                  Open Apps
                </Button>
                
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  disableScrollLock = {true}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      onClick={handleClose}
                    >
                      <Button
                        startIcon={<AddIcon />}
                        className="meeting-page_sidebar_open-apps_item-btn"
                      >
                        {option}
                      </Button>
                      
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </Grid>
  
  
          <Grid
            item
            lg={secondPopupTab ? 12 : 9}
            md={secondPopupTab ? 12 : 9}
            xs={12}
          >
            <div className="meeting-page_main">
                main
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default MeetingPageContent;