import React from 'react';
import Calendar from 'react-calendar';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
// import './calendarBlock.scss';


const CalendarBlock = ({ history }) => {
  return (
    <CloudBlock
      title="Calendar"
      // rightButtonAction={() => history.push('/services/calendar')}
      rightButtonAction="/services/calendar"
      infoContent="asd"
      content={
        <Calendar
        //   locale={getLangISOFormat(i18n.language)}
          minDetail="month"
          value={new Date()}
          onChange={() => history.push('/services/calendar')}
        />
      }
      mdiIcon="calendar_month"
      iconContainerColor="blue"
    />
  );
};

export default CalendarBlock;
