import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./todos-page.scss";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import trashIcon from "../../../assets/images/notepage/new/trash.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import arrowDownIcon from '../../../assets/images/todos/arrow-down.svg';
import checkIcon from '../../../assets/images/todos/check.svg';




  
  
  
  const TodosPageContent = () => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [selectedProject, setSelectedProject] = useState('No project');



  
    return (
      <div className="todos-page">
        <div className="todos-page-main">
          
          <div className="todos-page-main_header">
            <div className="todos-page-main_header-filter">
              <div className="todos-page-main_header-filter-project">
                <Button
                  onClick={handleClick}
                  // startIcon={<AddIcon />}
                >
                  {selectedProject}

                  <img src={arrowDownIcon} alt='arrow down' />
                </Button>


                <Menu
                  id="video-conference-apps"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  disableScrollLock = {true}
                >
                  <MenuItem onClick={handleClose}>
                    <Button
                      // startIcon={<AddIcon />}
                      className="meeting-page_sidebar_open-apps_item-btn"
                      onClick={() => setSelectedProject('No project')}
                    >
                      No project
                    </Button>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Button
                      // startIcon={<AddIcon />}
                      className="meeting-page_sidebar_open-apps_item-btn"
                      onClick={() => setSelectedProject('Project one')}
                    >
                      Project one
                    </Button>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Button
                      // startIcon={<AddIcon />}
                      className="meeting-page_sidebar_open-apps_item-btn"
                      onClick={() => setSelectedProject('Project two')}
                    >
                      Project Two
                    </Button>
                  </MenuItem>
                </Menu>
              </div>
              
              <div className="todos-page-main_header-filter-actions">
              
              </div>
            </div>

            <div className="todos-page-main_header-task">
              <div className="todos-page-main_header-task-add">
              
              </div>

              <div className="todos-page-main_header-task-sort">
              
              </div>
            </div>

            <div className="todos-page-main_header-input">

            </div>
          </div>

          
          <div className="todos-page-main-list">
            
          </div>          
        </div>
      </div>
    );
  }

  export default TodosPageContent;