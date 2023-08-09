import React, { useState } from 'react';
import calendarIcon from "../../../assets/images/calendarIcon.png";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import CloudPage from '../../pages/cloud-page/CloudPage';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import Calendar from 'react-calendar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './calendar-site.scss';
import { Calendar_page_current_events } from '../../../mocks/mocks';
import { useSelector} from 'react-redux';



function CalendarPageContent() {
  const { t, i18n } = useTranslation();

  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
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
      <Grid container spacing={3} height='100%'>
        <Grid 
          item 
          xl={secondPopupTab ? 4 : 2}
          lg={secondPopupTab ? 4 : 3}
          md={secondPopupTab ? 4 : 3} 
          xs={12}
          sx={{
            // display: {lg: secondPopupTab ? 'none' : 'block', md: secondPopupTab ? 'none' : 'block'}
          }}
        >
          <div className='calendar-page_sidebar'>
            <div className='calendar-page_sidebar_create-event'>
              <Button
                // startIcon={<AddIcon />}
                className="calendar-page_sidebar_create-event_btn"
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
              >
                {t("CALENDAR_PAGE.CREATE__EVENT_BUTTON")}
              </Button>
              {/* <button>{t('CALENDAR_PAGE.CREATE__EVENT_BUTTON')}</button> */}
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
          xl={secondPopupTab ? 8 : 10}
          lg={secondPopupTab ? 8 : 9}
          md={secondPopupTab ? 8 : 9}
          xs={12}
        >
          <div className='calendar-page_main'>
            <div className='calendar-page_main_calendar'>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                headerToolbar={{
                  left: 'prev title next today',
                  center: '',
                  right: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
                }}
                buttonText={{
                  today:    'Today',
                  month:    'Month',
                  week:     'Week',
                  day:      'Day',
                  list:     'Agenda'
                }}
                views = {{
                  dayGridMonth: { // name of view
                    titleFormat: {year: 'numeric', month: 'long' },
                    // titleFormat: { year: 'numeric', month: 'short', day: '2-digit' }
                    // other view-specific options here
                  },
                  // timeGridWeek: {
                  //   slotLabelFormat: {
                  //     hour: "2-digit", 
                  //     minute: "2-digit", 
                  //     hour12: false
                  //   }
                  // },
                  // timeGridDay: {
                  //   slotLabelFormat: {
                  //     hour: "2-digit", 
                  //     minute: "2-digit", 
                  //     hour12: false
                  //   }
                  // }
                }}
                slotLabelFormat={e => `${e.date.hour <= 9 ? `0${e.date.hour}` : e.date.hour}:${e.date.minute <= 9 ? `0${e.date.minute}` : e.date.minute}`}
                eventTimeFormat={{
                  hour: '2-digit',
                  hour12: false,
                  minute: '2-digit',
                  meridiem: 'short'
                }}
                
                allDaySlot= {false}
                allDayText= 'all'
                
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                fixedWeekCount={false}
                weekends={true}
                // contentHeight = {700}
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
                // sideBarEvent={renderSidebarEvent}
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
        icon={calendarIcon}
        content={CalendarPageContent()}
      />
    </div>
  )
}

export default CalendarPage;