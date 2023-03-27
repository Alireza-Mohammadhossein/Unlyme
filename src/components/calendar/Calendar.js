import React from 'react';
// import "./calendar.scss";

const Calendar = () => {
    const BACKEND_URL = "https://filexy.ru";
  return (
    <div className="container">
      <h1>Calendar</h1>
      <div className="cloud-block">
        <iframe title={'Calendar'} src={`${BACKEND_URL}/widgets/calendar`} className="calendar__container" />
      </div>
    </div>
  );
};

export default Calendar;
