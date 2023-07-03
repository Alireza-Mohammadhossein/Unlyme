import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tooltip from "@mui/material/Tooltip";
import dashboardIcon from '../../../assets/images/my-services/dashboard.png';
import domainsIcon from '../../../assets/images/my-services/domains.png';
import driveIcon from '../../../assets/images/my-services/drive.png';
import tasksIcon from '../../../assets/images/my-services/tasks.png';
import copySitesIcon from '../../../assets/images/my-services/copy-sites.png';
import bankIcon from '../../../assets/images/my-services/bank.png';
import settingIcon from '../../../assets/images/my-services/setting.png';
import onlineConsultantIcon from '../../../assets/images/my-services/logo-builder.png';
import calendarIcon from '../../../assets/images/my-services/calendar.png';
import notesIcon from '../../../assets/images/my-services/notes.png';
import emailIcon from '../../../assets/images/my-services/email.png';
import videoConferencingIcon from '../../../assets/images/my-services/video-conference.png';

import Calendar from '../../pages/calendar/CalendarPage';
import Notes from '../../pages/notes/NotesPage';
import Emails from '../../pages/email/EmailPage';
import WorkDrive from '../../pages/work-drive/WorkDrivePage';
import Tasks from '../../pages/tasks/TasksPage';
import VideoConferencing from '../../pages/video-conferencing/main-page/VideoConferencingPage';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


import { useSelector, useDispatch } from "react-redux";
import { handleCloseAppsModal, handleOpenAppsModal } from '../../../redux/app/appsModalSlice';





const Menu = ({screenSize}) => {
  // const screenSize = GetScreenSize();
  const { t, i18n } = useTranslation();
  

  const data = [
    // {
    //   id: 1,
    //   icon: "dashboard",
    //   title: "MY_SERVICES",
    //   link: "/",
    //   img: `${dashboardIcon}`,
    // },
    {
      id: 8,
      icon: "calendar_month",
      title: "CALENDAR",
      link: "/services/calendar",
      img: `${calendarIcon}`,
      componentName: 'Calendar',
      component: Calendar,
    },
    {
      id: 9,
      icon: "calendar_month",
      title: "NOTES",
      link: "/services/notes",
      img: `${notesIcon}`,
      componentName: 'Notes',
      component: Notes,
    },
    {
      id: 10,
      icon: "calendar_month",
      title: "EMAILS",
      link: "/services/email",
      img: `${emailIcon}`,
      componentName: 'Emails',
      component: Emails,
    },    
    {
      id: 3,
      icon: "web",
      title: "WORK_DRIVE",
      link: "/services/work-drive",
      img: `${driveIcon}`,
      componentName: 'WorkDrive',
      component: WorkDrive,
    },  
    {
      id: 11,
      icon: "Tasks",
      title: "TASKS",
      link: "/services/tasks",
      img: `${tasksIcon}`,
      componentName: 'Tasks',
      component: Tasks,
    },
    {
      id: 12,
      icon: "Video Conferencing",
      title: "VIDEO_CONFERENCING",
      link: "/services/video-conferencing",
      img: `${videoConferencingIcon}`,
      componentName: 'VideoConferencing',
      component: VideoConferencing,
    },
    {
      id: 2,
      icon: "domain",
      title: "DOMAINS",
      link: "/services/domains",
      img: `${domainsIcon}`,
      componentName: 'Tasks',
      component: Tasks,
    },
    // {
    //   id: 4,
    //   icon: "content_copy",
    //   title: "COPY_SITES",
    //   link: "/services/copy-sites",
    //   img: `${copySitesIcon}`,
    //   component: Tasks,
    // },
    // {
    //   id: 5,
    //   icon: "monetization_on",
    //   title: "BANK",
    //   link: "/services/bank",
    //   img: `${bankIcon}`,
    //   component: Tasks,
    // },
    // {
    //   id: 6,
    //   icon: "settings",
    //   title: "SETTINGS",
    //   link: "/settings",
    //   img: `${settingIcon}`,
    //   component: Tasks,
    // },
    // {
    //   id: 7,
    //   icon: "mail_outline",
    //   title: "ONLINE_CONSULTANT",
    //   link: "/services/online-consultant",
    //   img: `${onlineConsultantIcon}`,
    //   component: Tasks,
    // },

  ];

  const dispatch = useDispatch();

  const appsModal = useSelector((state) => state.appsModal.openAppsModal);
  // const [appsModal, setAppsModal] = useState(false);
  // const SelectedComponent = useSelector((state) => state.appsModal.SelectedComponent);
  const [selectedComponent, setSelectedComponent] = useState('');
  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  
  const openAppsModalHandler = (componentName) => {
    dispatch(handleOpenAppsModal());
    setSelectedComponent(componentName);
  };
  
  const closeAppsModalHandler = () => {
    dispatch(handleCloseAppsModal())
  };



  return (
    <div
      className={`menu
     ${
       screenSize === "XL"
         ? "menuXL"
         : screenSize === "LG"
         ? "menuLG"
         : screenSize === "MD"
         ? "menuMD"
         : screenSize === "SM"
         ? "menuSM"
         : "menuXS"
     }
    `}
    >
      <ul className="menu__list">
        <li className="menu__item">
          <Link to='/' className="menu__item-link">
            <Tooltip title='dashboard' arrow placement="right">
              <div className="menu__item-icon">
                <img src={dashboardIcon} className="menu__item-img" />
              </div>
            </Tooltip>
          </Link>
          {/* <Tooltip title={t(`MENU.MY_SERVICES`)} arrow placement="right">
            <Button>
                <div className="menu__item-icon">
                  <img src={dashboardIcon} className="menu__item-img" />
                </div>
            </Button>
          </Tooltip> */}
        </li>

        {data.map((item) => (
          <li key={item.id} className="menu__item">
            <Tooltip title={t(`MENU.${item.title}`)} arrow placement="right">
              {/* <Button onClick={() => openAppsModalHandler(item.component)}> */}
              <Button onClick={() => openAppsModalHandler(item.componentName)}>
                  <div className="menu__item-icon">
                    <img src={item.img} className="menu__item-img" />
                  </div>
              </Button>
            </Tooltip>
            {/* <Link to={item.link} className="menu__item-link">
              <Tooltip title={t(`MENU.${item.title}`)} arrow placement="right">
                <div className="menu__item-icon">
                  <img src={item.img} className="menu__item-img" />
                </div>
              </Tooltip>
            </Link> */}
          </li>
        ))}
      </ul>

      <Modal
        open={appsModal}
        onClose={closeAppsModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="apps-modal"
        disableEnforceFocus 
      >
        <div className={`apps-modal-container ${firstPopupTab ? 'firstPopupShow' : ''} ${secondPopupTab ? 'secondPopupShow' : ''}`} >
          {/* {SelectedComponent && <SelectedComponent />} */}
          {/* <Tasks /> */}
          {/* <SelectedComponent /> */}
          {/* {showSelectedComponent} */}

          {
      selectedComponent === 'Calendar' ? <Calendar /> :
      selectedComponent === 'Notes' ? <Notes /> :
      selectedComponent === 'Emails' ? <Emails /> :
      selectedComponent === 'WorkDrive' ? <WorkDrive /> :
      selectedComponent === 'Tasks' ? <Tasks /> :
      selectedComponent === 'VideoConferencing' ? <VideoConferencing /> :
      ''
    }
        </div>
      </Modal>
    </div>
  );
};

export default Menu;
