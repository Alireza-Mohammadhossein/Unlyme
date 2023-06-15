import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tooltip from "@mui/material/Tooltip";
import { GetScreenSize } from "../getScreenSize/GetScreenSize";
import {
  ASSETS_URL,
  LOCAL_STORAGE_LOCALE,
  SITE_NAME,
  SUPPORTED_LANGUAGES,
} from "../../../types";
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




const Menu = ({screenSize}) => {
  // const screenSize = GetScreenSize();
  const { t, i18n } = useTranslation();

  const data = [
    {
      id: 1,
      icon: "dashboard",
      title: "MY_SERVICES",
      link: "/",
      img: `${dashboardIcon}`,
    },
    {
      id: 8,
      icon: "calendar_month",
      title: "CALENDAR",
      link: "/services/calendar",
      img: `${calendarIcon}`,
    },
    {
      id: 9,
      icon: "calendar_month",
      title: "NOTES",
      link: "/services/notes",
      img: `${notesIcon}`,
    },
    {
      id: 10,
      icon: "calendar_month",
      title: "EMAILS",
      link: "/services/email",
      img: `${emailIcon}`,
    },    
    {
      id: 3,
      icon: "web",
      title: "WORK_DRIVE",
      link: "/services/work-drive",
      img: `${driveIcon}`,
    },  
    {
      id: 11,
      icon: "Tasks",
      title: "TASKS",
      link: "/services/tasks",
      img: `${tasksIcon}`,
    },
    {
      id: 12,
      icon: "Video Conferencing",
      title: "VIDEO_CONFERENCING",
      link: "/services/video-conferencing",
      img: `${videoConferencingIcon}`,
    },
    {
      id: 2,
      icon: "domain",
      title: "DOMAINS",
      link: "/services/domains",
      img: `${domainsIcon}`,
    },
    {
      id: 4,
      icon: "content_copy",
      title: "COPY_SITES",
      link: "/services/copy-sites",
      img: `${copySitesIcon}`,
    },
    {
      id: 5,
      icon: "monetization_on",
      title: "BANK",
      link: "/services/bank",
      img: `${bankIcon}`,
    },
    {
      id: 6,
      icon: "settings",
      title: "SETTINGS",
      link: "/settings",
      img: `${settingIcon}`,
    },
    {
      id: 7,
      icon: "mail_outline",
      title: "ONLINE_CONSULTANT",
      link: "/services/online-consultant",
      img: `${onlineConsultantIcon}`,
    },

  ];

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
        {data.map((item) => (
          <li key={item.id} className="menu__item">
            <Link to={item.link} className="menu__item-link">
              <Tooltip title={t(`MENU.${item.title}`)} arrow placement="right">
                <div className="menu__item-icon">
                  <img src={item.img} className="menu__item-img" />
                </div>
              </Tooltip>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
