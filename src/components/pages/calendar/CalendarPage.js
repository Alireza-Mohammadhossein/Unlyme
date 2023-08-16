import React, { useEffect, useState } from 'react';
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




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





  const title = document.getElementsByClassName('fc-toolbar-title')[0];

  const customDayHeaderContent = (info) => {
    const dayNum = new Date(info.date).getDate();
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'long' });


    if(info.view.type === 'timeGridDay') {
      title.textContent = `${dayNum} ${month} ${year}`;
    } else {
      title.textContent = `${month} ${year}`;
    }
    // const year = new Date(info.date).getFullYear();
    return (
      <>
        {dayText}
      </>
    );
  };

  const customWeekHeaderContent = (info) => {
    const dayNum = new Date(info.date).getDate();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'short' });
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();
    // const dayOfWeek = new Date(info.date).toLocaleString('en-US', { weekday: 'short' });
    // const year = new Date(info.date).getFullYear();

    if (info.view.type === 'timeGridWeek') {
      title.textContent = `${month} ${year}`;
    } else {
      title.textContent = '';
    }

    return (
      <>
        <span>{dayText}</span> <span>{dayNum}</span>
      </>
    );
  };


  const customMonthHeaderContent = (info) => {
    const today = new Date().getDate();
    const thisMonth = new Date().toLocaleString('default', { month: 'long' });
    const thisYear = new Date().getFullYear();

    const dayNum = new Date(info.date).getDate();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'short' });
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();

    const html = '<h2 class="fc-toolbar-title" id="fc-dom-312">January 1970</h2>'

    if (title && info.view.type === 'dayGridMonth') {
      title.textContent = `${thisMonth} ${thisYear}`;
      console.log('dayGridMonth')
      console.log('title', title)
      
      
    }
    
    return (
      <>
        {dayText}
      </>
    );
  };



  const customAgendaHeaderContent = (info) => {
    const dayNum = new Date(info.date).getDate();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'long' });
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();
    // const dayOfWeek = new Date(info.date).toLocaleString('en-US', { weekday: 'short' });

    if (info.view.type === 'listMonth') {
      title.textContent = `${month} ${year}`;
    } else {
      title.textContent = '';
    }


    return (
      <>
      <div>
        <span>{month}</span> <span>{dayNum}</span>
      </div>
      
      <div>
        <span>{dayText}</span>
      </div>
      </>
    );
  };


  
  return (
    <div className='calendar-page'>
      <Grid container spacing={3} height='100%'>
        <Grid 
          item 
          xl={
              firstPopupTab && !secondPopupTab ? 3
             : (firstPopupTab && secondPopupTab) ? 4 : 2}
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
                nextLabel= {<ArrowForwardIosIcon />}
                prevLabel= {<ArrowBackIosNewIcon />}
                formatShortWeekday={(locale, date) => [ `S`, `M`, `T`, `W`, `T`, `F`, `S` ][date.getDay()]}
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

              <Button startIcon={<AddIcon />} className='calendar-page_sidebar-section_add-btn'>
                Add calendar
              </Button>

              {/* <h2>All Events ({currentEvents.length})</h2> */}
              {/* <ul>{currentEvents.map(renderSidebarEvent)}</ul> */}
            </div>
          </div>
        </Grid>

        <Grid
          item
          xl={firstPopupTab && !secondPopupTab ? 9 
              : firstPopupTab && secondPopupTab ? 8 : 10}
          lg={secondPopupTab ? 8 : 9}
          md={secondPopupTab ? 8 : 9}
          xs={12}
        >
          <div className='calendar-page_main'>
            <div className='calendar-page_main_calendar'>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                headerToolbar={{
                  // left: 'prev title next today',
                  start: 'prev title next',
                  center: '',
                  end: 'timeGridDay,timeGridWeek,dayGridMonth,listMonth',
                }}

              
                buttonText={{
                  today: 'Today',
                  month: 'Month',
                  week: 'Week',
                  day: 'Day',
                  list: 'Agenda'
                }}

                // dayHeaderContent={customDayHeaderContent}

                views = {{
                  dayGridMonth: { // name of view
                    titleFormat: {year: 'numeric', month: 'long' },
                    dayHeaderContent: customMonthHeaderContent,
                    // titleFormat: { year: 'numeric', month: 'short', day: '2-digit' }
                    // other view-specific options here
                  },

                  timeGridDay: {
                    dayHeaderContent: customDayHeaderContent,
                    titleFormat: {day: '2-digit', year: 'numeric', month: 'long'},
                  },

                  timeGridWeek: {
                    dayHeaderContent: customWeekHeaderContent,
                    titleFormat: {year: 'numeric', month: 'long'},
                  },

                  listMonth: {
                    dayHeaderContent: customAgendaHeaderContent,
                  }
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
                firstDay= {1}
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