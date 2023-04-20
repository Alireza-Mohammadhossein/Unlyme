import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Scheduler from './scheduler/Scheduler';
import { events } from '../../mocks/mocks'; 
 

const CalendarSite = () => {
  const { t } = useTranslation();
  const BACKEND_URL = "https://filexy.ru";

    
  return ( 
    <div className="container">
      <h1>{t('SERVICES.CALENDAR_PAGE.TITLE')}</h1>
      <div className="cloud-page">
        {/* <iframe title={'Calendar'} src={`${BACKEND_URL}/widgets/calendar`} className="calendar__container" /> */}
          <div className='scheduler-container'>
              <Scheduler events={events}/>
          </div>

      </div>
    </div>
  );
};

export default CalendarSite;
