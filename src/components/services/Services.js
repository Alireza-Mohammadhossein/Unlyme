import React from 'react';
import CalendarBlock from './components/calendar/CalendarBlock';
import OnlineConsultant from './components/onlineConsultant/OnlineConsultant ';
import VideoConferencing from './components/videoConferencing/VideoConferencing';
import './services.scss';
// import { Link } from "react-router-dom";

// This component is for loading components in homepage
const Services = () => {
  return (
    <div className="container">
      <h1>
        Connected Apps and Services
        <span className="btn btn--light-blue" style={{ marginLeft: 30 }}>
          Other services
        </span>
      </h1>
      <div className="row">
        <div className="col-4">
          <CalendarBlock />
          <div className="site-vertical-separator" />
          <OnlineConsultant />
          <div className="site-vertical-separator" />
          <VideoConferencing />
        </div>
        <div className="col-4">
        </div>
        <div className="col-4">
        </div>
      </div>
      <div onClick={() => alert('s')} className="services__connect-other">
        Connect other services
      </div>
    </div>
  );
};

export default Services;
