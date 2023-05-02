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
import logo_white from "../../../assets/images/logo_white.png";

const Menu = () => {
  const screenSize = GetScreenSize();
  const { t, i18n } = useTranslation();

  const [showed, setShowed] = useState(false);

  const data = [
    {
      id: 1,
      icon: "dashboard",
      title: "MY_SERVICES",
      link: "/",
      img: `${ASSETS_URL}/assets/images/services/dashboard.png`,
    },
    {
      id: 2,
      icon: "domain",
      title: "DOMAINS",
      link: "/services/domains",
      img: `${ASSETS_URL}/assets/images/services/domains.png`,
    },
    {
      id: 3,
      icon: "web",
      title: "SITE_BUILDER",
      link: "/services/site-builder",
      img: `${ASSETS_URL}/assets/images/services/web.png`,
    },
    {
      id: 4,
      icon: "content_copy",
      title: "COPY_SITES",
      link: "/services/copy-sites",
      img: `${ASSETS_URL}/assets/images/services/copy-sites.png`,
    },
    {
      id: 5,
      icon: "monetization_on",
      title: "BANK",
      link: "/services/bank",
      img: `${ASSETS_URL}/assets/images/services/bank.png`,
    },
    {
      id: 6,
      icon: "settings",
      title: "SETTINGS",
      link: "/settings",
      img: `${ASSETS_URL}/assets/images/services/settings.png`,
    },
    {
      id: 8,
      icon: "calendar_month",
      title: "CALENDAR",
      link: "/services/calendar",
      img: `${ASSETS_URL}/assets/images/services/calendar.png`,
    },
    {
      id: 7,
      icon: "mail_outline",
      title: "ONLINE_CONSULTANT",
      link: "/services/online-consultant",
      img: `${ASSETS_URL}/assets/images/services/online-consultant.png`,
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
