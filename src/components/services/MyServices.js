import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BankBlock from './components/bank/BankBlock';
import CalendarBlock from './components/calendar/CalendarBlock';
import CloudHostingBlock from './components/cloudHosting/CloudHostingBlock';
import DiscBlock from './components/disc/DiscBlock';
import DomainsBlock from './components/domains/DomainsBlock';
import GuideBlock from './components/guide/GuideBlock';
import Services from './components/services/ServicesBlock';
import WorkDrive from './components/workDrive/WorkDrive';
import SiteCopyingBlock from './components/site-copying/SiteCopyingBlock';
import WebsiteBuilderBlock from './components/websiteBuilder/WebsiteBuilderBlock';
import TasksBlock from './components/tasks/TasksBlock';
import VideoConferencingBlock from './components/videoConferencing/VideoConferencingBlock';
import { Responsive, WidthProvider } from "react-grid-layout";
import { GetScreenSize } from '../common/getScreenSize/GetScreenSize';
import LogoBuilder from './components/logoBuilder/LogoBuilder';
import AIEngine from './components/aiEngine/AIEngine';
// import './services.scss';
// import { Link } from "react-router-dom";



// This component is for loading components in homepage

const MyServices = () => {
  const screenSize = GetScreenSize();
  const { t } = useTranslation();
  const ResponsiveGridLayout = WidthProvider(Responsive);


// default layout for all screens
  const layoutXL = [
    { i: "calendar", x: 0, y: 0, w: 3, h: 1 },
    { i: "domains", x: 3, y: 0, w: 3, h: 1 },
    { i: "ai", x: 6, y: 0, w: 6, h: 1 },

    { i: "tasks", x: 0, y: 1, w: 6, h: 1 },
    { i: "cloud", x: 6, y: 1, w: 3, h: 1 },
    { i: "logo-builder", x: 9, y: 1, w: 3, h: 1 },
    
    { i: "copy-site", x: 0, y: 2, w: 3, h: 1 },
    { i: "drive", x: 3, y: 2, w: 6, h: 1 },
    { i: "disc", x: 9, y: 2, w: 3, h: 1 },

    { i: "bank", x: 0, y: 3, w: 6, h: 1 },
    { i: "website-builder", x: 6, y: 3, w: 6, h: 1 },

    { i: "video-conference",  x: 0, y: 4, w: 6, h: 1 },
    { i: "services",  x: 6, y: 4, w: 3, h: 1 },
  ];

  const layoutLG = [
    { i: "calendar", x: 0, y: 0, w: 4, h: 1 },
    { i: "ai", x: 4, y: 0, w: 8, h: 1 },

    { i: "tasks", x: 0, y: 1, w: 8, h: 1 },
    { i: "domains", x: 8, y: 1, w: 4, h: 1 },
    
    { i: "cloud", x: 0, y: 2, w: 4, h: 1 },
    { i: "drive", x: 4, y: 2, w: 8, h: 1 },
    
    { i: "bank", x: 0, y: 3, w: 8, h: 1 },
    { i: "logo-builder", x: 8, y: 3, w: 4, h: 1 },
    
    { i: "copy-site", x: 0, y: 4, w: 4, h: 1 },
    { i: "website-builder", x: 4, y: 4, w: 8, h: 1 },
    
    { i: "video-conference", x: 0, y: 5, w: 8, h: 1 },
    { i: "disc", x: 8, y: 5, w: 4, h: 1 },

    { i: "services", x: 0, y: 6, w: 4, h: 1 },
  ];

  const layoutMD = [
    { i: "calendar", x: 0, y: 0, w: 6, h: 1 },
    { i: "domains", x: 6, y: 0, w: 6, h: 1 },

    { i: "ai", x: 0, y: 1, w: 6, h: 1 },
    { i: "tasks", x: 6, y: 1, w: 6, h: 1 },

    { i: "cloud", x: 0, y: 2, w: 6, h: 1 },
    { i: "drive", x: 6, y: 2, w: 6, h: 1 },
    
    { i: "bank", x: 0, y: 3, w: 6, h: 1 },
    { i: "logo-builder", x: 6, y: 3, w: 6, h: 1 },

    { i: "copy-site", x: 0, y: 4, w: 6, h: 1 },
    { i: "website-builder", x: 6, y: 4, w: 6, h: 1 },

    { i: "video-conference", x: 0, y: 5, w: 6, h: 1 },
    { i: "disc", x: 6, y: 5, w: 6, h: 1 },

    { i: "services", x: 0, y: 6, w: 6, h: 1 },
  ];

  const layoutSM = [
    { i: "calendar", x: 0, y: 0, w: 12, h: 1 },
    { i: "domains", x: 0, y: 1, w: 12, h: 1 },
    { i: "ai", x: 0, y: 2, w: 12, h: 1 },
    { i: "tasks", x: 0, y: 3, w: 12, h: 1 },
    { i: "cloud", x: 0, y: 4, w: 12, h: 1 },
    { i: "drive", x: 0, y: 5, w: 12, h: 1 },
    { i: "bank", x: 0, y: 6, w: 12, h: 1 },
    { i: "logo-builder", x: 7, y: 3, w: 12, h: 1 },
    { i: "copy-site", x: 0, y: 8, w: 12, h: 1 },
    { i: "website-builder", x: 0, y: 9, w: 12, h: 1 },
    { i: "video-conference", x: 0, y: 10, w: 12, h: 1 },
    { i: "disc", x: 0, y: 11, w: 12, h: 1 },
    { i: "services", x: 0, y: 12, w: 12, h: 1 },
  ];
  
  const layoutXS = [
    { i: "calendar", x: 0, y: 0, w: 12, h: 1 },
    { i: "domains", x: 0, y: 1, w: 12, h: 1 },
    { i: "ai", x: 0, y: 2, w: 12, h: 1 },
    { i: "tasks", x: 0, y: 3, w: 12, h: 1 },
    { i: "cloud", x: 0, y: 4, w: 12, h: 1 },
    { i: "drive", x: 0, y: 5, w: 12, h: 1 },
    { i: "bank", x: 0, y: 6, w: 12, h: 1 },
    { i: "logo-builder", x: 7, y: 3, w: 12, h: 1 },
    { i: "copy-site", x: 0, y: 8, w: 12, h: 1 },
    { i: "website-builder", x: 0, y: 9, w: 12, h: 1 },
    { i: "video-conference", x: 0, y: 10, w: 12, h: 1 },
    { i: "disc", x: 0, y: 11, w: 12, h: 1 },
    { i: "services", x: 0, y: 12, w: 12, h: 1 },
  ];


  // call getFromLS and set layouts to originalLayouts 
  const originalLayouts = getFromLS("layouts") || {
    lg: screenSize === 'XL' ? layoutXL
    : screenSize === 'LG' ? layoutLG
    : screenSize === 'MD' ? layoutMD
    : screenSize === 'SM' ? layoutSM
    : layoutXS
  };

  const rowHeight = screenSize === 'LG' ? 315 : 380; 

  const [layouts, setLayouts] = useState(JSON.parse(JSON.stringify(originalLayouts)));

  // call saveToLS when screen size change
  const onLayoutChange = (layout, layouts) => {
    saveToLS("layouts", layouts);
    // setLayouts(layouts);
  }


  // after loading content, when sizescreen change it will update the layout
  useEffect(() => {
    setLayouts(originalLayouts);
  }, [screenSize])


  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = (event) => {
    if(!isCollapsed) {
      const parent = event.target.parentNode.parentNode.parentNode.parentNode;
      parent.style.height = '78px';
      parent.style.overflowY = 'hidden';
    } else {
      const parent = event.target.parentNode.parentNode.parentNode.parentNode;
      parent.style.height = '380px';
      parent.style.overflowY = '';
    }

    setIsCollapsed(!isCollapsed);
  }
  
  return (
    <div className="container">
        <div className='row'>
        <ResponsiveGridLayout
          className={`my-services my-services__layout ${screenSize === 'XL' ? 'layoutXL'
            : screenSize === 'LG' ? 'layoutLG'
            : screenSize === 'MD' ? 'layoutMD'
            : screenSize === 'SM' ? 'layoutSM'
            : 'layoutXS'
          }`}
          layouts={layouts}
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          rowHeight = {rowHeight}
          margin= {[30, 30]}
          useCSSTransforms= {false}
          draggableCancel = '.MyNonDraggableAreaClassName'
          isResizable = {false}
          compactType = 'horizontal'
          onLayoutChange={onLayoutChange}
        >

          <div key="calendar" >
            <CalendarBlock handleCollapse={handleCollapse} />
          </div>
          
          <div key="domains">
            <DomainsBlock handleCollapse={handleCollapse} />
          </div>
          
          {/* <div key="guide">
            <GuideBlock/>
          </div> */}

          <div key="ai">
            <AIEngine/>
          </div>
          
          <div key="tasks">
            <TasksBlock handleCollapse={handleCollapse} />
          </div>
          
          <div key="cloud">
            <CloudHostingBlock />
          </div>
          
          <div key="logo-builder">
            <LogoBuilder />
          </div>
          
          <div key="drive">
            <WorkDrive />
          </div>
          
          <div key="website-builder">
            <WebsiteBuilderBlock />
          </div>
          
          <div key="bank">
            <BankBlock />
          </div>
          
          <div key="copy-site">
            <SiteCopyingBlock />
          </div>
          
          <div key="video-conference">
            <VideoConferencingBlock />
          </div>
          
          <div key="disc"> 
            <DiscBlock />
          </div>
                    
          <div key="services"> 
            <Services />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );


  // getting layouts from localstorag 
  function getFromLS(key) {
    let lsXL = {};
    let lsLG = {};
    let lsMD = {};
    let lsSM = {};
    let lsXS = {};
    if (global.localStorage) {
      try {
        if(screenSize === 'XL') {
          lsXL = JSON.parse(global.localStorage.getItem("rglXL")) || {};
          return lsXL[key];
        }
        if(screenSize === 'LG') {
          lsLG = JSON.parse(global.localStorage.getItem("rglLG")) || {};
          return lsLG[key];
        }
        if(screenSize === 'MD') {
          lsMD = JSON.parse(global.localStorage.getItem("rglMD")) || {};
          return lsMD[key];
        }
        if(screenSize === 'SM') {
          lsSM = JSON.parse(global.localStorage.getItem("rglSM")) || {};
          return lsSM[key];
        }
        if(screenSize === 'XS') {
          lsXS = JSON.parse(global.localStorage.getItem("rglXS")) || {};
          return lsXS[key];
        }
      } catch (e) {
        /*Ignore*/
      }
    }
  }
  
  // saving layouts to localstorage
  function saveToLS(key, value) {
  
    if (global.localStorage) {
      if(screenSize === 'XL') {
        global.localStorage.setItem(
          "rglXL",
          JSON.stringify({
            [key]: value
          })
        );
      }
  
      if(screenSize === 'LG') {
        global.localStorage.setItem(
          "rglLG",
          JSON.stringify({
            [key]: value
          })
        );
      }
  
      if(screenSize === 'MD') {
        global.localStorage.setItem(
          "rglMD",
          JSON.stringify({
            [key]: value
          })
        );
      }
  
      if(screenSize === 'SM') {
        global.localStorage.setItem(
          "rglSM",
          JSON.stringify({
            [key]: value
          })
        );
      }
  
      if(screenSize === 'XS') {
        global.localStorage.setItem(
          "rglXS",
          JSON.stringify({
            [key]: value
          })
        );
      }
    }
  }


};






export default MyServices;

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
