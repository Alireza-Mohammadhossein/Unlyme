import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ChatPopup from '../chat-popup/ChatPopup';
import language_flag from "../../../assets/icons/en.svg";


const Header = () => {
  const SITE_NAME = 'WAYWE';
  const [chatIsShowed, setChatIsShowed] = useState(false);

  return (
    <>
      <div className="header">
        <Link to="/" className="header__site-name">
          {SITE_NAME}
        </Link>
        <div className="header__search-bar">
          <span className="header__search-bar_title">How can WAYWE help you?</span>
          <div className="header__search-bar_input-container">
            <input className="header__search-bar_input" placeholder="Describe your task..." />
            <button onClick={() => alert('s')} className="header__search-bar_button" />
          </div>
          <div
            className="header__search-bar_chat"
            onClick={() => setChatIsShowed(true)} 
          />
        </div>
        <div
          style={{backgroundImage: `url(${language_flag})`}}
          // onClick={setLanguage}
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
