import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import CloudPage from '../../pages/cloud-page/CloudPage';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import Calendar from 'react-calendar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import icon from "../../../assets/images/my-services/calendar-widget.png";
import './calendar-site.scss';
import { Calendar_page_current_events } from '../../../mocks/mocks';
import { useSelector } from 'react-redux';


function CalendarPageContent() {
  const { t, i18n } = useTranslation();


  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);


  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }


  function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  
  function handleEventClick(clickInfo) {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        <i>{event.title}</i>
      </li>
    );
  }


  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const onChangeDate = (newDate) => {
    setDate(newDate);
    console.log(date)
  }

  const [selectedEvents, setSelectedEvents] = useState([]);

  const eventsHandler = (event) => {
    if (!selectedEvents.includes(event.target.value)) {
      selectedEvents.push(event.target.value);
      console.log('added event', selectedEvents)
    } else if (selectedEvents.includes(event.target.value)) {
      const index = selectedEvents.indexOf(event.target.value);
      selectedEvents.splice(index, 1)
      console.log('deleted event', selectedEvents)
    }
  }


  return (
    <div className='calendar-page'>
      <Grid container spacing={3}>
        <Grid 
          item 
          lg={3} 
          md={3} 
          xs={12}
          sx={{
            display: {lg: secondPopupTab ? 'none' : 'block', md: secondPopupTab ? 'none' : 'block'}
          }}
        >
          <div className='calendar-page_sidebar'>
            <div className='calendar-page_sidebar_create-event'>
              <button>{t('CALENDAR_PAGE.CREATE__EVENT_BUTTON')}</button>
            </div>


            <div className='calendar-page_sidebar-section'>
              {/* <label>
                <input
                  type='checkbox'
                  checked={weekendsVisible}
                  onChange={handleWeekendsToggle}
                ></input>
                toggle weekends
              </label> */}

              <Calendar
                onChange={onChangeDate}
                value={date}
              />

            </div>
            <div className='calendar-page_sidebar-section'>
              <FormGroup className='calendar-page_sidebar-section_filter'>
                {Calendar_page_current_events.map((item) => (
                  <FormControlLabel
                    control={<Checkbox sx={{color: item.color, '&.Mui-checked': {color: item.color}}} value={item.name} onChange={eventsHandler} />}
                    label={item.name}
                  />
                ))}
              </FormGroup>

              {/* <h2>All Events ({currentEvents.length})</h2> */}
              {/* <ul>{currentEvents.map(renderSidebarEvent)}</ul> */}
            </div>
          </div>
        </Grid>

        <Grid
          item
          lg={secondPopupTab ? 12 : 9}
          md={secondPopupTab ? 12 : 9}
          xs={12}
        >
          <div className='calendar-page_main'>
            <div className='calendar-page_main_calendar'>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                headerToolbar={{
                  left: 'prev title next today',
                  center: '',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                fixedWeekCount={false}
                weekends={true}
                contentHeight = {700}
                navLinks={true}
                selectOverlap={true}
                nowIndicator={true}
                showNonCurrentDates={true}
                displayEventTime={true}
                displayEventEnd={true}
                // editable={true}
                eventStartEditable={true}
                eventResizableFromStart={true}
                aspectRatio={2}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
              />
            </div>
          </div>
        </Grid>
      </Grid>



    </div>
  );
}


const CalendarPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="page-container">
      <CloudPage
        title={t("SERVICES.CALENDAR.TITLE")}
        icon={icon}
        content={CalendarPageContent()}
      />
    </div>
  )
}

export default CalendarPage;