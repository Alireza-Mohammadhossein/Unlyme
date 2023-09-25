import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./todos-page.scss";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import arrowDownIcon from '../../../assets/images/todos/arrow-down.svg';
import checkIcon from '../../../assets/images/todos/check.svg';
import addIcon from '../../../assets/images/todos/plus.svg';
import addBlueIcon from '../../../assets/images/todos/plus-blue.svg';
import eyeIcon from '../../../assets/images/todos/eye.svg';
import editIcon from '../../../assets/images/todos/edit.svg';
import trashIcon from '../../../assets/images/todos/trash.svg';
import sortIcon from '../../../assets/images/todos/sort.svg';
import editGrayIcon from '../../../assets/images/todos/edit-gray.svg';
import moreIcon from '../../../assets/images/todos/more.svg';
import checkedIcon from '../../../assets/images/todos/checked.svg';
import noCheckedIcon from '../../../assets/images/todos/nochecked.svg';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';



  
  
  
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

    const [addTask, setAddTask] = useState(false)



  
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
                <Button className="todos-page-main_header-filter-actions-btn">
                  <img src={addIcon} />
                  Add New
                </Button>

                <Button className="todos-page-main_header-filter-actions-btn">
                  <img src={eyeIcon} />
                  Show All
                </Button>

                <Button className="todos-page-main_header-filter-actions-btn">
                  <img src={editIcon} />
                  Rename
                </Button>

                <Button className="todos-page-main_header-filter-actions-btn">
                  <img src={trashIcon} />
                  Delete
                </Button>
              </div>
            </div>

            <div className="todos-page-main_header-task">
              <div className="todos-page-main_header-task-add">
                <Button className="todos-page-main_header-task-add-btn" onClick={() => setAddTask(!addTask)}>
                  <img src={addBlueIcon} />
                  Add Task
                </Button>
              </div>

              <div className="todos-page-main_header-task-sort">
                <Button className="todos-page-main_header-task-sort-btn">
                  <img src={sortIcon} />
                  Sort by
                </Button>
              </div>
            </div>

            {
              addTask ? 
                <div className="todos-page-main_header-input">
                  <TextField
                    autoFocus
                    // onBlur={() => setAddTask(false)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={editGrayIcon} alt="Edit Icon" />
                        </InputAdornment>
                      ),
                    }}
                    placeholder='Enter a description' />
                </div>
              :
                ''
            }
          </div>

          
          <div className="todos-page-main_list">
            <div className="todos-page-main_list-task">
              <Checkbox
                className="todos-page-main_list-task-checkbox"
                icon={<img src={noCheckedIcon} alt='no checked' />}
                checkedIcon={<img src={checkedIcon} alt='checked' />}
              />

              <div className="todos-page-main_list-task-title">
                <p>
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              
              <div className="todos-page-main_list-task-members">
                <AvatarGroup max={3}>
                    <Avatar className="my-services__tasks_content-item-details-members-member" />
                    <Avatar className="my-services__tasks_content-item-details-members-member" />
                    <Avatar className="my-services__tasks_content-item-details-members-member" />
                </AvatarGroup>
              </div>

              <div className="todos-page-main_list-task-action">
                <IconButton>
                  <img src={moreIcon} alt="more" />
                </IconButton>
              </div>
            </div>

            <div className="todos-page-main_list-task">
              <Checkbox
                className="todos-page-main_list-task-checkbox"
                icon={<img src={noCheckedIcon} alt='no checked' />}
                checkedIcon={<img src={checkedIcon} alt='checked' />}
              />

              <div className="todos-page-main_list-task-title">
                <p className="done">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              
              <div className="todos-page-main_list-task-members">
                <AvatarGroup max={3}>
                    <Avatar className="my-services__tasks_content-item-details-members-member" />
                    <Avatar className="my-services__tasks_content-item-details-members-member" />
                    <Avatar className="my-services__tasks_content-item-details-members-member" />
                </AvatarGroup>
              </div>

              <div className="todos-page-main_list-task-action">
                <IconButton>
                  <img src={moreIcon} alt="more" />
                </IconButton>
              </div>
            </div>
          </div>        
        </div>
      </div>
    );
  }

  export default TodosPageContent;