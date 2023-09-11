import React, { useEffect, useState, useRef } from 'react';
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
import Calendar from 'react-calendar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './calendar-site.scss';
import { Calendar_page_current_events } from '../../../mocks/mocks';
import { useSelector} from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import CreateEventsPopup from './popups/CreateEventPopup';
import settingIcon from '../../../assets/images/calendar/settings.svg';
import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CirclePicker } from 'react-color';
import Modal from '@mui/material/Modal';
import SettingPopup from './popups/SettingPopup';
import { getEvents, createEvent, deleteEvent, getCalendars } from '../../../api/Api';
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';






function CalendarPageContent() {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    // Call your API function to get events from the backend
    getEvents()
      .then((response) => {
        // Assuming your API returns an array of events
        const fetchedEvents = response.data;

        
        // Update the calendar's events with the fetched data
        setEvents(fetchedEvents); // Assuming you use state to manage calendar events
        console.log('events', events)
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error("Error fetching events:", error);
      });
  };


  useEffect(() => {
    fetchEvents();
  }, []);


  const [calendars, setCalendars] = useState([]);

  const fetchCalendars = () => {
    // Call your API function to get events from the backend
    getCalendars()
      .then((response) => {
        // Assuming your API returns an array of events
        const fetchedCalendars = response.data;

        console.log('fetchedCalendars',fetchedCalendars)

        
        // Update the calendar's events with the fetched data
        setCalendars(fetchedCalendars); // Assuming you use state to manage calendar events
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error("Error fetching events:", error);
      });
  };

  useEffect(() => {
    fetchCalendars();
  }, []);





  const { t, i18n } = useTranslation();

  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);


  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }



  // function handleDateSelect(selectInfo) {
    
  //   let title = prompt('Please enter a new title for your event');
  //   let calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay,
  //     });
  //   }
  // }



  // start add event inputs
  
  const [selectedEventID, setSelectedEventID] = useState('');
  const handleSelectedEventID = (id) => {
    setSelectedEventID(id);
  };

  const [eventName, setEventName] = useState('');
  const handleEventName = (event) => {
    setEventName(event.target.value);
  };

  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const handleStartDate = (newValue) => {
    setStartDate(newValue);
  };

  const [startTime, setStartTime] = useState(dayjs(new Date()));
  const handleStartTime = (newValue) => {
    setStartTime(newValue);
  };

  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };

  const [endTime, setEndTime] = useState(dayjs(new Date()));
  const handleEndTime = (newValue) => {
    setEndTime(newValue);
  };

  const [allDay, setAllDay] = useState(false);
  const handleAllDay = () => {
    setAllDay(!allDay);
  };

  const [repeat, setRepeat] = useState('');
  const handleRepeat = (event) => {
    setRepeat(event.target.value);
  };

  const [calendar, setCalendar] = useState('');
  const handleCalendar = (event) => {
    console.log('selected calendar', event.target.value)
    setCalendar(event.target.value);
  };

  const [details, setDetails] = useState('');
  const handleDetails = (event) => {
    setDetails(event.target.value);
  };


  // end add event inputs

  const [dateSelect, setDateSelect] = useState()
  const handleDateSelect = (selectInfo) => {

    console.log('date select click')

    setDateSelect(selectInfo)
    setStartDate(dayjs(selectInfo.startStr))
    setEndDate(dayjs(selectInfo.endStr))
    // setStartTime(new Date().getHours)
    // setEndTime(new Date().getHours)

    
    setCreateEventPopup(true)

    // let newTitle = prompt('Please enter a new title for your event')

    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // const eventData = {
    //   // Create an event object from selectInfo.start and selectInfo.end
    //   title: newTitle,
    //   start: selectInfo,
    //   end: selectInfo,
    //   // Add other event properties as needed
    //   // ...
    // };
  
    // if (newTitle) {
    //   console.log('eventData',eventData)
    //   createEvent(eventData)
    //   .then((response) => {
    //     // Handle success (e.g., show a success message)
    //     console.log("Event added successfully:", response);
  
    //     // Refresh the calendar events by calling your fetch events function
    //     fetchEvents();
    //   })
    //   .catch((error) => {
    //     // Handle error (e.g., show an error message)
    //     console.error("Error adding event:", error);
    //   });
    // }

  };


  const handleSubmitEvent = () => {

    const normalStartDate = startDate;
    const normalStartTime = startTime;
    
    const normalEndDate = endDate;
    const normalEndTime = endTime;

    const formattedStartDate = dayjs(new Date(normalStartDate)).format('YYYY-MM-DD');
    const formattedStartTime = dayjs(new Date(normalStartTime)).format('HH:mm:ss');

    const formattedEndDate = dayjs(new Date(normalEndDate)).format('YYYY-MM-DD');
    const formattedEndTime = dayjs(new Date(normalEndTime)).format('HH:mm:ss');

    const eventColor = calendars.find(item => item.id === calendar).color;

    console.log('allDay', allDay)
    console.log('event color', eventColor)

    const eventData = {
      // Create an event object from selectInfo.start and selectInfo.end
      id: uuidv4(),
      title: eventName,
      start: `${allDay ? `${formattedStartDate} 00:00:00` : `${formattedStartDate} ${formattedStartTime}`}`,
      end: `${allDay ? `${formattedEndDate} 24:00:00` : `${formattedEndDate} ${formattedEndTime}`}`,
      details: details,
      calendar: calendar,
      color: eventColor,
      all_day: allDay ? 1 : 0,
      // start: selectInfo.startStr,
      // end: selectInfo.endStr,
      // Add other event properties as needed
      // ...
    };

    console.log(eventData)
    
    createEvent(eventData)
    .then((response) => {
      // Handle success (e.g., show a success message)
      console.log("Event added successfully:", response);

      // Refresh the calendar events by calling your fetch events function
      fetchEvents();
    })
    .catch((error) => {
      // Handle error (e.g., show an error message)
      console.error("Error adding event:", error);
    });

    setCreateEventPopup(false)
    setEventName('')
    setStartDate(dayjs(new Date()))
    setStartTime(dayjs(new Date()))
    setEndDate(dayjs(new Date()))
    setEndTime(dayjs(new Date()))
    setAllDay(false)
    setRepeat('')
    setCalendar('')
    setDetails('')
  

  };



  const [selectedEvent, setSelectedEvent] = useState()

  const handleDeleteEvent = (selectedEvent) => {
    if (window.confirm(`Are you sure you want to delete the event`)) {
      // selectedEvent.event.remove();
      deleteEvent(selectedEventID)
      .then((response) => {
        // Handle success (e.g., show a success message)
        console.log("Event deleted successfully:", response);
  
        // Refresh the calendar events by calling your fetch events function
        fetchEvents();
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error("Error deleting event:", error);
      });
    }

    setCreateEventPopup(false)
    setEventName('')
    setStartDate(dayjs(new Date()))
    setStartTime(dayjs(new Date()))
    setEndDate(dayjs(new Date()))
    setEndTime(dayjs(new Date()))
    setAllDay(false)
    setRepeat('')
    setCalendar('')
    setDetails('')
    setSelectedEventID('')

  }

  function handleEventClick(clickInfo) {
    setSelectedEvent(clickInfo);

    console.log('clickInfo',clickInfo.event)
    
    // console.log('start time', String(clickInfo.event._instance.range.start).split(' ')[4])
    
    const selectedStartDate = dayjs(clickInfo.event._instance.range.start);
    const selectedStartTime = String(clickInfo.event._instance.range.start).split(' ');

    const selectedEndDate = dayjs(clickInfo.event._instance.range.end);
    const selectedEndTime = String(clickInfo.event._instance.range.end).split(' ');




    setSelectedEventID(clickInfo.event._def.extendedProps._id)
    setEventName(clickInfo.event._def.title)
    setStartDate(selectedStartDate)
    setStartTime(selectedStartDate)
    setEndDate(selectedEndDate)
    setEndTime(selectedEndDate)
    setAllDay(clickInfo.event._def.allDay)
    setCalendar(clickInfo.event._def.extendedProps.calendar)
    setDetails(clickInfo.event._def.extendedProps.detaiils)

    setCreateEventPopup(true)
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

    if (title && info.view.type === 'dayGridMonth') {
      title.textContent = `${thisMonth} ${thisYear}`;
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



  // filtering events by category
  const [selectedCategories, setSelectedCategories] = useState(['all']);

  const handleCategoryToggle = (category) => {
    console.log('selectedCategories', selectedCategories)
    if (category === 'all') {
      setSelectedCategories(['all']);
    } else {
      if (selectedCategories.includes('all')) {
        setSelectedCategories([category]);
      } else {
          setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
              return prevCategories.filter((cat) => cat !== category);
            } else {
              return [...prevCategories, category];
            }
          });
        }
    }
  };

  const filteredEvents = selectedCategories.includes('all')
    ? events
      :
    selectedCategories.length === 0
      ? events
        : events.filter((event) =>
        selectedCategories.includes(event.category)
         
  );


  const [newCategoryTitle, setNewCategoryTitle] = useState('');
  const [addCategory, setAddCategory] = useState(false);

  const newCategoryTitleHandler = (e) => {
    setNewCategoryTitle(e.target.value)
  }

  const pressEnter = (e) => {
    if(e.keyCode == 13){
      
       setNewCategoryTitle('')
       
       Calendar_page_current_events.push({
        id: Calendar_page_current_events.length + 1,
        name: e.target.value,
        color: '#4C9FBE',
        category: e.target.value,
       })

       setAddCategory(false);
      
    }
 }


 const [createEventPopup, setCreateEventPopup] = useState(false);



 const [anchorEl, setAnchorEl] = useState(null);
 const open = Boolean(anchorEl);
 const handleOpenOptions = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleCloseOptions = () => {
   setAnchorEl(null);
 };

 
 
 const [categoryIndex, setCategoryIndex] = useState(null);
 const [selectedCategory, setSelectedCategory] = useState([]); 

 const handleChangeCalendarColor = (e) => {
  Calendar_page_current_events[categoryIndex] = { ...Calendar_page_current_events[categoryIndex], color: e.hex };
  handleCloseOptions();
 }



   // start delete invoice popup
   const [settingPopup, setSettingPopup] = useState(false);
   // const [deleteInvoiceId, setSettingId] = useState(false);
   const handleOpenSettingPopup = () => {
     // setSettingId(id);
     setSettingPopup(true)
     handleCloseOptions()
   };
   const handleCloseSettingPopup = () => {
     setSettingPopup(false)
   };
   // end delete invoice popup

  
  return (

    <>
      <div className='calendar-page'>

        <div className='grid-content'>
          <div className='grid-content_left'>
            <div className='calendar-page_sidebar'>
              <div className='calendar-page_sidebar_create-event'>
                <Button
                  // startIcon={<AddIcon />}
                  className="calendar-page_sidebar_create-event_btn"
                  aria-label="calendar create event"
                  id="long-button"
                  aria-haspopup="true"
                  onClick={() => setCreateEventPopup(true)}
                >
                  {t("CALENDAR_PAGE.CREATE__EVENT_BUTTON")}
                </Button>
                {/* <button>{t('CALENDAR_PAGE.CREATE__EVENT_BUTTON')}</button> */}

                
                <Drawer
                  anchor='right'
                  open={createEventPopup}
                  onClose={() => setCreateEventPopup(false)}
                  disableScrollLock = {false}
                  className='calendar-page_sidebar_create-event_drawer'
                >
                  <CreateEventsPopup setCreateEventPopup={setCreateEventPopup} handleSubmitEvent={handleSubmitEvent} categories={Calendar_page_current_events} eventName={eventName} handleEventName={handleEventName} startDate={startDate} handleStartDate={handleStartDate} startTime={startTime} handleStartTime={handleStartTime} endDate={endDate} handleEndDate={handleEndDate} endTime={endTime} handleEndTime={handleEndTime} allDay={allDay} handleAllDay={handleAllDay} repeat={repeat} handleRepeat={handleRepeat} calendars={calendars} calendar={calendar} handleCalendar={handleCalendar} details={details} handleDetails={handleDetails} handleDeleteEvent={handleDeleteEvent} />
                </Drawer>
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

                {
                  addCategory ? <TextField className='calendar-page_sidebar-section_add-calendar' value={newCategoryTitle} autoFocus variant="outlined" onChange={newCategoryTitleHandler} onKeyDown={pressEnter} onBlur={() => setAddCategory(false)} /> : ''
                }

                <FormGroup className='calendar-page_sidebar-section_filter'>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCategories.includes('all') || selectedCategories.length === 0}
                        onChange={() => handleCategoryToggle('all')}
                      />
                    }
                    label="All"
                  />

                  {Calendar_page_current_events.map((item, index) => (
                    <>
                      <FormControlLabel
                        control={<Checkbox sx={{color: item.color, '&.Mui-checked': {color: item.color}}} value={item.name} checked={selectedCategories.includes(item.category)} onChange={() => handleCategoryToggle(item.category)} />}
                        label={
                          <div className='calendar-page_sidebar-section_filter-action'>
                            {item.name} 
                            
                            <IconButton
                              aria-label="setting"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenOptions(e);
                                setCategoryIndex(index)
                                setSelectedCategory(item)
                                console.log('item1', index)

                              }}
                            >
                              <img src={settingIcon} />
                            </IconButton>


                          </div>}
                        // onChange={() => handleCategoryFilter(item.category)}
                      />
                    </>
                  ))}

                  <Menu
                    id="long-menu"
                    className='calendar-page_sidebar-section_filter-action-popup'
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseOptions}
                    disableScrollLock={true}
                  >
                    <MenuItem
                     disableRipple={true}
                    >
                      <CirclePicker onChangeComplete={(e) => handleChangeCalendarColor(e)}  />
                    </MenuItem>

                    
                    <MenuItem
                      onClick={() => {
                        
                        handleOpenSettingPopup()
                      }}
                    >
                      Setting
                      {/* <ListItemIcon>
                        {option.icon}
                      </ListItemIcon>
                      <ListItemText>{option.text}</ListItemText> */}
                    </MenuItem>
                  </Menu>
                </FormGroup>

                <Button startIcon={<AddIcon />} className='calendar-page_sidebar-section_add-btn' onClick={() => setAddCategory(true)}>
                  Add calendar
                </Button>

                {/* <h2>All Events ({currentEvents.length})</h2> */}
                {/* <ul>{currentEvents.map(renderSidebarEvent)}</ul> */}
              </div>
            </div>
          </div>

          <div className='grid-content_right'>
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
                  // events={filteredEvents} // alternatively, use the `events` setting to fetch from a feed
                  events={events} // alternatively, use the `events` setting to fetch from a feed
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
          </div>
        </div>
      </div>



      {/* setting modal */}
      <Modal
        open={settingPopup}
        onClose={() => handleCloseSettingPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <SettingPopup selectedCategory={selectedCategory} handleCloseSettingPopup={handleCloseSettingPopup} categoryIndex={categoryIndex} Calendar_page_current_events={Calendar_page_current_events} />
      </Modal>
    </>
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