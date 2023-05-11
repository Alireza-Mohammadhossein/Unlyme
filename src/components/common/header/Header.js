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
// import { connect } from 'react-redux';
// import { signoutUser } from '../../app/AppActions';
// import { useSelector, useDispatch } from "react-redux";
// import { signoutUser } from "../../../redux/app/appSlice";
import Tooltip from "@mui/material/Tooltip";
import searchIcon from "../../../assets/images/header/search.gif";
import HeaderChatPopup from "../header-chatpopup/HeaderChatPopup";
import HeaderNotePopup from "../header-notepopup/HeaderNotePopup";
import HeaderNotificationPopup from "../header-notificationpopup/HeaderNotificationPopup";
import HeaderAssistantPopup from "../header-assistantpopup/HeaderAssistantPopup";
import HeaderSettingPopup from "../header-setting/HeaderSettingPopup";



const Header = ({theme, setTheme}) => {

  // const userTokenStatus = useSelector((state) => state.app.token);
  // const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const setLanguage = () => {
    const newLang = _.find(SUPPORTED_LANGUAGES, (id) => id !== i18n.language);
    i18n.changeLanguage(newLang, () => {
      localStorage.setItem(LOCAL_STORAGE_LOCALE, newLang);
    });
  };

  // popups toggler
  const [chatPopupToggler, setChatPopupToggler] = useState(false);
  const [mailPopupToggler, setMailPopupToggler] = useState(false);
  const [notePopupToggler, setNotePopupToggler] = useState(false);
  const [notificationPopupToggler, setNotificationPopupToggler] = useState(false);
  const [settingPopupToggler, setSettingPopupToggler] = useState(false);
  const [assistantPopupToggler, setAssistantPopupToggler] = useState(false);
  const [newAssistantToggler, setNewAssistantToggler] = useState(false);

  const [assistantText, setAssistantText] = useState("");
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

                if (!assistantPopupToggler) {
                  setAssistantPopupToggler(true);
                  setNewAssistantToggler(true);
                  setMessage(assistantText);
                  setAssistantText("");
                }
              }}
            >
              <div className="header__details-area_searchbar_container">
                <input
                  className="header__details-area_searchbar-input"
                  placeholder={t("HEADER.SEARCH_PLACEHOLDER")}
                  inputProps={{ "aria-label": "search" }}
                  value={assistantText}
                  onChange={(e) => {
                    setAssistantText(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>

          <div className="header__details-area_items">
            <div
              className="header__details-area_items-globe"
              onClick={() => {
                setAssistantPopupToggler(true);
                setChatPopupToggler(false);
                setNotePopupToggler(false);
                setNotificationPopupToggler(false);
                setSettingPopupToggler(false);
              }}
            >
              <Tooltip title="Unlyme Assistant" arrow placement="bottom">
                <img src={searchIcon} alt="assistant" />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                setChatPopupToggler(!chatPopupToggler);
                setNotePopupToggler(false);
                setNotificationPopupToggler(false);
                setSettingPopupToggler(false);
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
                setNotePopupToggler(!notePopupToggler);
                setChatPopupToggler(false);
                setNotificationPopupToggler(false);
                setSettingPopupToggler(false);
                setAssistantPopupToggler(false);
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
                setNotificationPopupToggler(!notificationPopupToggler);
                setChatPopupToggler(false);
                setNotePopupToggler(false);
                setSettingPopupToggler(false);
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
                  setSettingPopupToggler(!settingPopupToggler);
                  setChatPopupToggler(false);
                  setNotePopupToggler(false);
                  setNotificationPopupToggler(false);
                }}
              >
                <img
                  src={`${ASSETS_URL}/assets/images/header/account.png`}
                  alt="chat"
                />
              </div>
            </div>
          </div>

          {chatPopupToggler ? (
            <div className="header__popup-area">
              <HeaderChatPopup setChatPopupToggler={setChatPopupToggler} />
            </div>
          ) : (
            ""
          )}

          {notePopupToggler ? (
            <div className="header__popup-area">
              <HeaderNotePopup setNotePopupToggler={setNotePopupToggler} />
            </div>
          ) : (
            ""
          )}

          {notificationPopupToggler ? (
            <div className="header__popup-area">
              <HeaderNotificationPopup
                setNotificationPopupToggler={setNotificationPopupToggler}
              />
            </div>
          ) : (
            ""
          )}

          {assistantPopupToggler ? (
            <div className="header__popup-area">
              <HeaderAssistantPopup
                setAssistantPopupToggler={setAssistantPopupToggler}
                setNewAssistantToggler={setNewAssistantToggler}
                newAssistantToggler={newAssistantToggler}
                assistantText={assistantText}
                message={message}
                setMessage={setMessage}
              />
            </div>
          ) : (
            ""
          )}

          {settingPopupToggler ? (
            <div className="header__popup-area">
              <HeaderSettingPopup
                setSettingPopupToggler={setSettingPopupToggler}
                theme={theme}
                setTheme={setTheme}
              />
            </div>
          ) : (
            ""
          )}

        </div>

        {/* <div className="header__search-bar">
          <span className="header__search-bar_title">{t('HEADER.HOW_CAN_UNLYME_HELP_YOU')}</span>
          <div className="header__search-bar_input-container">
            <input className="header__search-bar_input" placeholder={t('HEADER.SEARCH_PLACEHOLDER')} />
            <button onClick={() => alert('s')} className="header__search-bar_button" />
          </div>
          <div
            className="header__search-bar_chat"
            onClick={() => setChatIsShowed(true)} 
          />
        </div>
        <div
          style={{backgroundImage: `url(${ASSETS_URL}/assets/icons/${i18n.language}.svg)`}}
          onClick={setLanguage}
          className="header__language"
        />
        <Link className="header__profile" to="/settings"></Link>
        {/* <div className="header__notifications" onClick={() => alert('notification')} /> */}
        {/* <div className="header__exit" onClick={() => dispatch(signoutUser())} /> */}
      </div>
      {/* <ChatPopup visible={chatIsShowed} onClose={() => setChatIsShowed(false)} /> */}
    </>
  );
};

// const mapStateToProps = state => ({
//   token: state.app.token
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     signoutUser: () => dispatch(signoutUser())
//   }
// };

export default Header;
