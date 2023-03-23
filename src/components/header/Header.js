import React from 'react';
import "./header.scss";
import language_flag from "../../assets/icons/en.svg"

const Header = () => {
  const SITE_NAME = 'WayWe';

  return (
    <>
      <div className="header">
        <a href="/" className="header__site-name">
          {SITE_NAME}
        </a>
        <div className="header__search-bar">
          <span className="header__search-bar_title">How can WAYWE help you?</span>
          <div className="header__search-bar_input-container">
            <input className="header__search-bar_input" placeholder="Describe your task..." />
            <button onClick={() => alert('s')} className="header__search-bar_button" />
          </div>
          <div
            className="header__search-bar_chat"
            // onClick={() => setChatIsShowed(true)} 
          />
        </div>
        <div
          style={{backgroundImage: `url(${language_flag})`}}
          // onClick={setLanguage}
          className="header__language"
        />
        <a className="header__profile" href="/settings" />
        <div className="header__notifications" onClick={() => alert('notification')} />
        <div className="header__exit" onClick={() => alert('exit')} />
      </div>
      {/* <ChatPopup visible={chatIsShowed} onClose={() => setChatIsShowed(false)} /> */}
    </>
  );
};

export default Header;
