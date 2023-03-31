import React from 'react';
import { useTranslation } from 'react-i18next';
import BankBlock from './components/bank/BankBlock';
import CalendarBlock from './components/calendar/CalendarBlock';
import CloudHostingBlock from './components/cloudHosting/CloudHostingBlock';
import CRMBlock from './components/crm/CRMBlock';
import DiscBlock from './components/disc/DiscBlock';
import DomainsBlock from './components/domains/DomainsBlock';
import InvoiceManagerBlock from './components/invoiceManager/InvoiceManagerBlock';
import OnlineConsultantBlock from './components/onlineConsultant/OnlineConsultantBlock';
import SiteCopyingBlock from './components/site-copying/SiteCopyingBlock';
import SiteBuilderBlock from './components/siteBuilder/SiteBuilderBlock';
import TasksBlock from './components/tasks/TasksBlock';
import VideoConferencingBlock from './components/videoConferencing/VideoConferencingBlock';
// import './services.scss';
// import { Link } from "react-router-dom";

// This component is for loading components in homepage
const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>
        {t('MY_SERVICES.H1')}
        <span className="btn btn--light-blue" style={{ marginLeft: 30 }}>
          Other services
        </span>
      </h1>
      <div className="row">
        <div className="col-4">
          <CalendarBlock />
          <div className="site-vertical-separator" />
          <OnlineConsultantBlock />
          <div className="site-vertical-separator" />
          <VideoConferencingBlock />
        </div>
        <div className="col-4">
          <TasksBlock />
          <div className="site-vertical-separator" />
          <CloudHostingBlock />
          <div className="site-vertical-separator" />
          <SiteCopyingBlock />
          <div className="site-vertical-separator" />
          <CRMBlock />
          <div className="site-vertical-separator" />
          <InvoiceManagerBlock />
        </div>
        <div className="col-4">
          <BankBlock />
          <div className="site-vertical-separator" />
          <SiteBuilderBlock />
          <div className="site-vertical-separator" />
          <DomainsBlock />
          <div className="site-vertical-separator" />
          <DiscBlock />
        </div>
      </div>
      <div onClick={() => alert('s')} className="services__connect-other">
        Connect other services
      </div>
    </div>
  );
};

export default Services;
