import React, { useState, useEffect } from 'react';
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
import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from './DemoComponent';
import { GetScreenSize } from '../common/getScreenSize/GetScreenSize';
// import './services.scss';
// import { Link } from "react-router-dom";

// This component is for loading components in homepage


const Services = () => {
  const screenSize = GetScreenSize();
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const { t } = useTranslation();

  const layoutXL = [
    { i: "1", x: 0, y: 0, w: 3, h: 1 },
    { i: "2", x: 3, y: 0, w: 3, h: 1 },
    { i: "3", x: 6, y: 0, w: 3, h: 1 },
    { i: "4", x: 9, y: 0, w: 3, h: 1 },
    { i: "5", x: 0, y: 1, w: 3, h: 1 },
    { i: "6", x: 3, y: 1, w: 3, h: 1 },
    { i: "7", x: 6, y: 1, w: 3, h: 1 },
    { i: "8", x: 9, y: 1, w: 3, h: 1 },
    { i: "9", x: 0, y: 2, w: 3, h: 1 },
    { i: "10", x: 3, y: 2, w: 3, h: 1 },
    { i: "11", x: 6, y: 2, w: 3, h: 1 },
    { i: "12", x: 9, y: 2, w: 3, h: 1 },
  ];

  const layoutLG = [
    { i: "1", x: 0, y: 0, w: 4, h: 1 },
    { i: "2", x: 4, y: 0, w: 4, h: 1 },
    { i: "3", x: 8, y: 0, w: 4, h: 1 },
    { i: "4", x: 0, y: 1, w: 4, h: 1 },
    { i: "5", x: 4, y: 1, w: 4, h: 1 },
    { i: "6", x: 8, y: 1, w: 4, h: 1 },
    { i: "7", x: 0, y: 2, w: 4, h: 1 },
    { i: "8", x: 4, y: 2, w: 4, h: 1 },
    { i: "9", x: 8, y: 2, w: 4, h: 1 },
    { i: "10", x: 0, y: 3, w: 4, h: 1 },
    { i: "11", x: 4, y: 3, w: 4, h: 1 },
    { i: "12", x: 8, y: 3, w: 4, h: 1 },
  ];

  const layoutMD = [
    { i: "1", x: 0, y: 0, w: 6, h: 1 },
    { i: "2", x: 6, y: 0, w: 6, h: 1 },
    { i: "3", x: 0, y: 1, w: 6, h: 1 },
    { i: "4", x: 6, y: 1, w: 6, h: 1 },
    { i: "5", x: 0, y: 2, w: 6, h: 1 },
    { i: "6", x: 6, y: 2, w: 6, h: 1 },
    { i: "7", x: 0, y: 3, w: 6, h: 1 },
    { i: "8", x: 6, y: 3, w: 6, h: 1 },
    { i: "9", x: 0, y: 4, w: 6, h: 1 },
    { i: "10", x: 6, y: 4, w: 6, h: 1 },
    { i: "11", x: 0, y: 5, w: 6, h: 1 },
    { i: "12", x: 6, y: 5, w: 6, h: 1 },
  ];

  const layoutSM = [
    { i: "1", x: 0, y: 0, w: 12, h: 1 },
    { i: "2", x: 0, y: 1, w: 12, h: 1 },
    { i: "3", x: 0, y: 2, w: 12, h: 1 },
    { i: "4", x: 0, y: 3, w: 12, h: 1 },
    { i: "5", x: 0, y: 4, w: 12, h: 1 },
    { i: "6", x: 0, y: 5, w: 12, h: 1 },
    { i: "7", x: 0, y: 6, w: 12, h: 1 },
    { i: "8", x: 0, y: 7, w: 12, h: 1 },
    { i: "9", x: 0, y: 8, w: 12, h: 1 },
    { i: "10", x: 0, y: 9, w: 12, h: 1 },
    { i: "11", x: 0, y: 10, w: 12, h: 1 },
    { i: "12", x: 0, y: 11, w: 12, h: 1 },
  ];
  
  const layoutXS = [
    { i: "1", x: 0, y: 0, w: 12, h: 1 },
    { i: "2", x: 0, y: 1, w: 12, h: 1 },
    { i: "3", x: 0, y: 2, w: 12, h: 1 },
    { i: "4", x: 0, y: 3, w: 12, h: 1 },
    { i: "5", x: 0, y: 4, w: 12, h: 1 },
    { i: "6", x: 0, y: 5, w: 12, h: 1 },
    { i: "7", x: 0, y: 6, w: 12, h: 1 },
    { i: "8", x: 0, y: 7, w: 12, h: 1 },
    { i: "9", x: 0, y: 8, w: 12, h: 1 },
    { i: "10", x: 0, y: 9, w: 12, h: 1 },
    { i: "11", x: 0, y: 10, w: 12, h: 1 },
    { i: "12", x: 0, y: 11, w: 12, h: 1 },
  ];

  
  const gridLayout = { lg: screenSize === 'XL' ? layoutXL
    : screenSize === 'LG' ? layoutLG
    : screenSize === 'MD' ? layoutMD
    : screenSize === 'SM' ? layoutSM
    : layoutXS
  };

  return (
    <div className="container">
      <h1>
        {t('MY_SERVICES.H1')}
        <span className="btn btn--light-blue" style={{ marginLeft: 30 }}>
          Other services
        </span>
      </h1>

        <div className='row'>
        <ResponsiveGridLayout
          className={`services__layout ${screenSize === 'XL' ? 'layoutXL'
            : screenSize === 'LG' ? 'layoutLG'
            : screenSize === 'MD' ? 'layoutMD'
            : screenSize === 'SM' ? 'layoutSM'
            : 'layoutXS'
          }`}
          // autoSize = {true}
          layouts={gridLayout}
          // breakpoints={{ lg: 1200 }}
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          rowHeight={380}
          draggableCancel = '.MyNonDraggableAreaClassName'
          isResizable = {false}
          compactType = 'horizontal'
          // width={1200}
        >
          <div key="1" >
            <CalendarBlock />
          </div>
          <div key="2">
            <TasksBlock />
          </div>
          <div key="3">
            <BankBlock />
          </div>
          <div key="4">
            <OnlineConsultantBlock />
          </div>
          <div key="5">
            <CloudHostingBlock />
          </div>
          <div key="6">
            <SiteBuilderBlock />
          </div>
          <div key="7">
            <VideoConferencingBlock />
          </div>
          <div key="8">
            <CRMBlock />
          </div>
          <div key="9">
            <DomainsBlock />
          </div>
          <div key="10">
            <InvoiceManagerBlock />
          </div>
          <div key="11">
            <DiscBlock />
          </div>
          <div key="12">
            <SiteCopyingBlock />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>

  );


};

export default Services;

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then((fn) => fn.default(Services));
// }

// const Services = () => {
  // const { t } = useTranslation();

  // return (
  //   <div className="container">
  //     <h1>
  //       {t('MY_SERVICES.H1')}
  //       <span className="btn btn--light-blue" style={{ marginLeft: 30 }}>
  //         Other services
  //       </span>
  //     </h1>
  //     <div className="row">
  //       <div className="col-4">
  //         <CalendarBlock />
  //         <div className="site-vertical-separator" />
  //         <OnlineConsultantBlock />
  //         <div className="site-vertical-separator" />
  //         <VideoConferencingBlock />
  //       </div>
  //       <div className="col-4">
  //         <TasksBlock />
  //         <div className="site-vertical-separator" />
  //         <CloudHostingBlock />
  //         <div className="site-vertical-separator" />
  //         <SiteCopyingBlock />
  //         <div className="site-vertical-separator" />
  //         <CRMBlock />
  //         <div className="site-vertical-separator" />
  //         <InvoiceManagerBlock />
  //       </div>
  //       <div className="col-4">
  //         <BankBlock />
  //         <div className="site-vertical-separator" />
  //         <SiteBuilderBlock />
  //         <div className="site-vertical-separator" />
  //         <DomainsBlock />
  //         <div className="site-vertical-separator" />
  //         <DiscBlock />
  //       </div>
  //     </div>
  //     <div onClick={() => alert('s')} className="services__connect-other">
  //       Connect other services
  //     </div>
  //   </div>
  // );
// };

// export default Services;
