import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import {
  ASSETS_URL,
  LOCAL_STORAGE_LOCALE,
  SUPPORTED_LANGUAGES,
} from "../../../types";
import logo from "../../../assets/images/header/white-logo.svg";
import Tooltip from "@mui/material/Tooltip";
import searchIcon from "../../../assets/images/header/search.gif";
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
              </div>
            </form>
          </div>

          <div className="header__details-area_items">
            <div
              className="header__details-area_items-globe"
              onClick={() => {
                dispatch(toggleAssistantPopup())
                // setAssistantPopupToggler(true);
                // setChatPopupToggler(false);
                // setNotePopupToggler(false);
                // setNotificationPopupToggler(false);
                // setSettingPopupToggler(false);
              }}
            >
              <Tooltip title="Unlyme Assistant" arrow placement="bottom">
                <img src={searchIcon} alt="assistant" />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleChatPopup())
                // setChatPopupToggler(!chatPopupToggler);
                // setNotePopupToggler(false);
                // setAssistantPopupToggler(false);
                // setNotificationPopupToggler(false);
                // setSettingPopupToggler(false);

                // if(chatPopupToggler === false) {
                //   document.getElementById('cloud-page').classList.add('first-shrink');
                // } else if(chatPopupToggler === true) {
                //   document.getElementById('cloud-page').classList.remove('first-shrink');
                // }
              }}
            >
              <Tooltip title="Chat" arrow placement="bottom">
                <img
                  src={`${ASSETS_URL}/assets/images/header/chat-icon.png`}
                  alt="chat"
                />
              </Tooltip>
            </div>

            <div className="header__details-area_items-icon">
              <Tooltip title="Mails" arrow placement="bottom">
                <img
                  src={`${ASSETS_URL}/assets/images/header/mails-icon.png`}
                  alt="mails"
                />
              </Tooltip>


            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleNotePopup())
                // setNotePopupToggler(!notePopupToggler);
                // setChatPopupToggler(false);
                // setNotificationPopupToggler(false);
                // setSettingPopupToggler(false);
                // setAssistantPopupToggler(false);
              }}
            >
              <Tooltip title="Notes" arrow placement="bottom">
                <img
                  src={`${ASSETS_URL}/assets/images/header/notes-icon.png`}
                  alt="notes"
                />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleNotificationPopup())
                // setNotificationPopupToggler(!notificationPopupToggler);
                // setAssistantPopupToggler(false);
                // setChatPopupToggler(false);
                // setNotePopupToggler(false);
                // setSettingPopupToggler(false);
              }}
            >
              <Tooltip title="Notifications" arrow placement="bottom">
                <img
                  src={`${ASSETS_URL}/assets/images/header/notifications-icon.png`}
                  alt="notifications"
                />
              </Tooltip>
            </div>
          </div>

          <div className="header__details-area_account">
            <div className="header__details-area_account-icon">
              {/* <Link
                className="header__details-area_account-link"
                to="/settings"
              >
                <img
                  src={`${ASSETS_URL}/assets/images/header/account.png`}
                  alt="chat"
                />
              </Link> */}

              <div
                className="header__details-area_account-link"
                onClick={() => {
                  dispatch(toggleSettingPopup())
                  // setSettingPopupToggler(!settingPopupToggler);
                  // setChatPopupToggler(false);
                  // setNotePopupToggler(false);
                  // setAssistantPopupToggler(false);
                  // setNotificationPopupToggler(false);
                }}
              >
                <img
                  src={`${ASSETS_URL}/assets/images/header/account.png`}
                  alt="chat"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};


export default Header;
