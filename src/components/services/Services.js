import React from 'react';
import Bank from './components/bank/Bank';
import CalendarBlock from './components/calendar/CalendarBlock';
import CloudHosting from './components/cloudHosting/CloudHosting';
import CRM from './components/crm/CRM';
import Disc from './components/disc/Disc';
import Domains from './components/domains/Domains';
import InvoiceManager from './components/invoiceManager/InvoiceManager';
import OnlineConsultant from './components/onlineConsultant/OnlineConsultant ';
import SitesCopying from './components/site-copying/SiteCopying';
import SiteBuilder from './components/siteBuilder/SiteBuilder';
import Tasks from './components/tasks/Tasks';
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
          <Tasks />
          <div className="site-vertical-separator" />
          <CloudHosting />
          <div className="site-vertical-separator" />
          <SitesCopying />
          <div className="site-vertical-separator" />
          <CRM />
          <div className="site-vertical-separator" />
          <InvoiceManager />
        </div>
        <div className="col-4">
          <Bank />
          <div className="site-vertical-separator" />
          <SiteBuilder />
          <div className="site-vertical-separator" />
          <Domains />
          <div className="site-vertical-separator" />
          <Disc />
        </div>
      </div>
      <div onClick={() => alert('s')} className="services__connect-other">
        Connect other services
      </div>
    </div>
  );
};

export default Services;
