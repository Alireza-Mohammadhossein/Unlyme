import React from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
// import './calendarBlock.scss';


const CalendarBlock = () => {
  const navigate = useNavigate();
  return (
    <CloudBlock
      title="Calendar"
      rightButtonAction={() => navigate('/services/calendar')}
      infoContent="asd"
      content={
        <Calendar
        //   locale={getLangISOFormat(i18n.language)}
          minDetail="month"
          value={new Date()}
          onChange={() => navigate('/services/calendar')}
        />
      }
      mdiIcon="calendar_month"
      iconContainerColor="blue"
    />
  );
};

export default CalendarBlock;
