import React, { useState } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import ChatPopup from '../chat-popup/ChatPopup';
import { ASSETS_URL, LOCAL_STORAGE_LOCALE, SITE_NAME, SUPPORTED_LANGUAGES } from '../../../types';


const Header = () => {
  console.log(ASSETS_URL);
  // const language_flag = "Unlyme/assets/icons";

  const { t, i18n } = useTranslation()
  const [chatIsShowed, setChatIsShowed] = useState(false);

  const setLanguage = () => {
    const newLang = _.find(SUPPORTED_LANGUAGES, id => id !== i18n.language);
    i18n.changeLanguage(newLang, () => {
      localStorage.setItem(LOCAL_STORAGE_LOCALE, newLang);
    });
  };


  return (
    <>
      <div className="header">
        <Link to="/" className="header__site-name">
          {SITE_NAME}
        </Link>
        <div className="header__search-bar">
          <span className="header__search-bar_title">{t('HEADER.HOW_CAN_WAYWE_HELP_YOU')}</span>
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
        <div className="header__notifications" onClick={() => alert('notification')} />
        <div className="header__exit" onClick={() => alert('exit')} />
      </div>
      <ChatPopup visible={chatIsShowed} onClose={() => setChatIsShowed(false)} />
    </>
  );
};

export default Header;
