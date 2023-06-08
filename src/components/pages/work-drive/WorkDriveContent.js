import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import "./work-drive-page.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';




  
  const WorkDriveContent = () => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


    // const ITEM_HEIGHT = 48;
    const options = ["Edit", "Add description", "Delete"];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  
    return (
      <div className="work-drive-page">
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
            <div className="work-drive-page_sidebar">
              <div className="work-drive-page_sidebar_create-event">


                <Button
                  // variant="outlined"
                  startIcon={<AddIcon />}
                  className="work-drive-page_sidebar_create-event_btn"
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  // onClick={handleCreateNote}
                >
                  {t("WORK_DRIVE_ADD.NEW")}
                </Button>
                <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          // maxHeight: ITEM_HEIGHT * 4.5,
                          // height: 'auto'
                          width: "30ch",
                        },
                      }}
                    >

                      <MenuItem onClick={handleClose} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <NoteAddOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Add new file" />
                      </MenuItem>

                      <MenuItem onClick={handleClose} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <CreateNewFolderOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Add new folder" />
                      </MenuItem>

                      <Divider />

                      <MenuItem onClick={handleClose} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <UploadFileOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Upload file" />
                          
                      </MenuItem>

                      <MenuItem onClick={handleClose} sx={{ padding: '10px 15px' }} >
                                <ListItemIcon>
                                  <DriveFolderUploadOutlinedIcon sx={{ color: '#777777' }} />
                                </ListItemIcon>
                                <ListItemText primary="Upload folder" />
                      </MenuItem>
                </Menu>


              </div>
  
              <div className="work-drive-page_sidebar-section">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  // value={showNote}
                  // onChange={handleShowNote}
                  aria-label="Vertical tabs example"
                  className="work-drive-page_sidebar-section_notes-list"
                >
                </Tabs>
              </div>
            </div>
          </Grid>
  
  
          <Grid
            item
            lg={secondPopupTab ? 12 : 9}
            md={secondPopupTab ? 12 : 9}
            xs={12}
          >
            <div className="work-drive-page_main">
              <div className="work-drive-page_main_notes">
  
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default WorkDriveContent;