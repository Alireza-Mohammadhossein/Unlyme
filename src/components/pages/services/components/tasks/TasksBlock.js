import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import storeTasks from "../../../tasks/utils/store";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { sampleTasks } from '../../../../../mocks/mocks';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import calendarIcon from '../../../../../assets/images/my-services/tasks/calendar.svg';
import commentsIcon from '../../../../../assets/images/my-services/tasks/message.svg';
import moreIcon from '../../../../../assets/images/my-services/tasks/settings.svg';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenTasksWidgetModal, handleCloseTasksWidgetModal } from '../../../../../redux/app/appsModalSlice';

import TasksPage from "../../../tasks/TasksPage";





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
      {value === index && <>{children}</>}
    </div>
  );
}



const TasksBlock = () => {

  // Sample data for columns and tasks
  // const dataStorage = JSON.parse(window.localStorage.getItem("tasks"));
  
  // const initialState = () => {
  //   if (dataStorage) {
  //     return dataStorage;
  //   } else {
  //     window.localStorage.setItem("tasks", JSON.stringify(storeTasks));
  //     return storeTasks;
  //   }
  // };
  // const [data, setData] = useState(initialState);
  const [data, setData] = useState(sampleTasks);



  const ITEM_HEIGHT = 48;
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);

  const options = ["Edit", "Add description", "Delete"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openActions = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const dispatch = useDispatch();
  const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  const openWorkDriveWidgetModal = useSelector((state) => state.appsModal.openWorkDriveWidgetModal);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  const handleOpenTasksModal = () => {
    dispatch(handleOpenTasksWidgetModal());
  };
  const handleCloseTasksModal = () => {
    dispatch(handleCloseTasksWidgetModal());
  };

  
  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  // setting modals 
  const [anchorElSetting, setAnchorElSetting] = useState(null);
  const open = Boolean(anchorElSetting);
  const handleOpenSetting = (event) => {
    setAnchorElSetting(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorElSetting(null);
  };
  
 

  const handleOpenCreateNewTaskPopup = () => {
    const tasksButton = document.querySelector('[aria-label="Tasks"]')  
    tasksButton.click();

    // const createEventButton = document.querySelector('[aria-label="calendar create event"]')
    // createEventButton.click();

    const createEventButtonInterval = setInterval(() => {
      const createEventButton = document.querySelector('[tabindex="0"] [aria-label="add new card"]')

      if (createEventButton) {
        createEventButton.click();

        clearInterval(createEventButtonInterval)
      }
    },500)
  }



  return (
    <>
      <div className={`my-services__tasks ${openNotesWidgetModal || appsModal || openCalendarWidgetModal || openTasksWidgetModal || openWorkDriveWidgetModal ? 'back-transparent' : ''}`}>
        <div className="my-services__tasks_header">

          <div className="my-services__tasks_header-view">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="my-services__tasks_header-view_tab"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              {data.listIds.map((listId, index) => {
                const list = data.lists[listId];

                return (
                    <Tab key={listId} label={list.title} index={index} />
                )
              })}
            </Tabs>
          </div>

          <div className="my-services__tasks_header-more">
            <IconButton aria-label="add" onClick={handleOpenCreateNewTaskPopup}>
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="expand" onClick={handleOpenTasksModal}>
              <img src={expandIcon} />
            </IconButton>
          </div>
        </div>

        <div className="my-services__tasks_content">
            {data.listIds.map((listId, index) => {
              const list = data.lists[listId];

              return (
                <TabPanel key={listId} value={value} index={index} className="my-services__tasks_content-list">
                  {list.cards.map((item, index) => (
                    <div key={item.id} className="my-services__tasks_content-item">
                      <div className="my-services__tasks_content-item-info">
                        <p className="my-services__tasks_content-item-info-title">{item.title}</p>

                        <p className="my-services__tasks_content-item-info-date">
                          <img src={calendarIcon} />
                          <span>Due to: 02 June at 17:00</span>
                         </p>
                      </div>

                      <div className="my-services__tasks_content-item-details">
                        <div className="my-services__tasks_content-item-details-members">
                          <AvatarGroup max={4}>
                            {item.members.map((member) => (
                              <Avatar src={member} className="my-services__tasks_content-item-details-members-member" />
                            ))}
                          </AvatarGroup>
                          
                        </div>

                        {
                          item.tags.length > 0 ?
                            <div className="my-services__tasks_content-item-details-tags">
                              {item.tags.map((tag) => (
                                <span key={tag} style={{backgroundColor: item.color}} className="my-services__tasks_content-item-details-tags-tag">{tag}</span>
                              ))}
                            </div>
                          :
                            ''
                        }


                        <div className="my-services__tasks_content-item-details-comments">
                          <IconButton aria-label="comments">
                            <img src={commentsIcon} />
                          </IconButton>
                          {item.comments ? item.comments.length : '0'}
                        </div>


                        <div className="my-services__tasks_content-item-details-actions">
                          <IconButton
                            aria-label="setting"
                            onClick={handleOpenSetting}
                          >
                            <img src={moreIcon} />
                            
                            {/* <SettingsOutlinedIcon /> */}
                          </IconButton>

                          <Menu
                            anchorEl={anchorElSetting}
                            open={open}
                            onClose={handleCloseSetting}
                            disableScrollLock={true}
                            className="my-services__popup"
                          >
                            <MenuItem 
                              sx={{minWidth: '120px'}}
                            >
                              View
                            </MenuItem>

                            <MenuItem>
                              Edit
                            </MenuItem>

                            <MenuItem>
                              Delete
                            </MenuItem>
                          </Menu>


                        </div>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              )
            })}
        </div>
      </div>


      <Modal
        open={openTasksWidgetModal}
        onClose={handleCloseTasksModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="apps-modal"
        disableEnforceFocus 
      >
        <div className={`apps-modal-container ${firstPopupTab ? 'firstPopupShow' : ''} ${secondPopupTab ? 'secondPopupShow' : ''}`} >
          
          <TasksPage handleCloseTasksModal={handleCloseTasksModal} />
        </div>
      </Modal>
    </>
    
  );
};

export default TasksBlock;
