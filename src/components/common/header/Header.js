import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import {
  ASSETS_URL,
  LOCAL_STORAGE_LOCALE,
  SUPPORTED_LANGUAGES,
} from "../../../types";
// import logo from "../../../assets/images/header/white-logo.svg";
import logo from "../../../assets/images/logo.png";
import Tooltip from "@mui/material/Tooltip";
// import searchIcon from "../../../assets/images/header/search.gif";
import { useSelector, useDispatch } from "react-redux";
import { 
  toggleChatPopup,
  toggleNotePopup, 
  toggleNotificationPopup, 
  toggleSettingPopup, 
  toggleAssistantPopup, 
  toggleNewAssistantPopup,
  toggleSecondPopupTab, 
  setAssistantText, 
  setAssistantMessage
} from '../../../redux/app/popupSlice';
import searchIcon from "../../../assets/images/header/AI-icon.png";
import search from "../../../assets/images/header/new-icons/search.png";
import chatIcon from '../../../assets/images/header/new-icons/chat-icon.png';
import mailIcon from '../../../assets/images/header/new-icons/mails-icon.png';
import notesIcon from '../../../assets/images/header/new-icons/notes-icon.png';
import notificationIcon from '../../../assets/images/header/new-icons/notifications-icon.png';
import settingIcon from '../../../assets/images/header/new-icons/setting.png';



const Header = () => {
  // const userTokenStatus = useSelector((state) => state.app.token);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const setLanguage = () => {
    const newLang = _.find(SUPPORTED_LANGUAGES, (id) => id !== i18n.language);
    i18n.changeLanguage(newLang, () => {
      localStorage.setItem(LOCAL_STORAGE_LOCALE, newLang);
    });
  };

  
  // popups toggler
  const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);

  const [assistantInputText, setAssistantInputText] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="header">
        <div className="header__logo-area">
          <Link to="/" className="header__logo-area_link">
            <img
              src={logo}
              alt="Unlyme logo"
              className="header__logo-area_img"
            />
          </Link>
        </div>

        <div className="header__details-area">
          <div className="header__details-area_searchbar">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (!assistantPopup) {
                  dispatch(toggleAssistantPopup());
                  dispatch(toggleNewAssistantPopup())
                  dispatch(setAssistantMessage(assistantInputText))
                  setAssistantInputText("");
                  dispatch(toggleSecondPopupTab())
                }
              }}
            >

              <div className="header__details-area_searchbar_container">
                <label><img src={search} /></label>
                <input
                  className="header__details-area_searchbar-input"
                  placeholder={t("HEADER.SEARCH_PLACEHOLDER")}
                  InputProps={{ "aria-label": "search" }}
                  value={assistantInputText}
                  onChange={(e) => {
                    // dispatch(setAssistantText(e.target.value))
                    setAssistantInputText(e.target.value);
                  }}
                />

                <div
                  className="header__details-area_searchbar-globe"
                  onClick={() => {
                    dispatch(toggleAssistantPopup())
                  }}
                >
                  <Tooltip title="Unlyme Assistant" arrow placement="bottom">
                    <img src={searchIcon} alt="assistant" />
                  </Tooltip>
                </div>
              </div>
            </form>
          </div>

          <div className="header__details-area_items">
            {/* <div
              className="header__details-area_items-globe"
              onClick={() => {
                dispatch(toggleAssistantPopup())
              }}
            >
              <Tooltip title="Unlyme Assistant" arrow placement="bottom">
                <img src={searchIcon} alt="assistant" />
              </Tooltip>
            </div> */}

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleChatPopup())
              }}
            >
              <Tooltip title="Chat" arrow placement="bottom">
                <img
                  src={chatIcon}
                  alt="chat"
                />
              </Tooltip>
            </div>

            <div className="header__details-area_items-icon">
              <Tooltip title="Mails" arrow placement="bottom">
                <img
                  src={mailIcon}
                  alt="mails"
                />
              </Tooltip>


            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleNotePopup())
              }}
            >
              <Tooltip title="Notes" arrow placement="bottom">
                <img
                  src={notesIcon}
                  alt="notes"
                />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleNotificationPopup())
              }}
            >
              <Tooltip title="Notifications" arrow placement="bottom">
                <img
                  src={notificationIcon}
                  alt="notifications"
                />
              </Tooltip>
            </div>

            <div className="header__details-area_items-icon" onClick={() => {
                  dispatch(toggleSettingPopup())
                }}>
                <img
                  src={settingIcon}
                  alt="chat"
                />

            </div>
          </div>

          {/* <div className="header__details-area_account">
            <div className="header__details-area_account-icon" onClick={() => {
                  dispatch(toggleSettingPopup())
                }}>
                <img
                  src={settingIcon}
                  alt="chat"
                />

            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};


export default Header;
