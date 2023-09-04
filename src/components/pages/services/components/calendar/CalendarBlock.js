import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getLangISOFormat } from "../../../../../types";
import CalendarPage from "../../../calendar/CalendarPage";
import { handleOpenAppsModal } from '../../../../../redux/app/appsModalSlice';
import FullCalendar from '@fullcalendar/react';
import { INITIAL_EVENTS, createEventId } from './../../../calendar/event-utils';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenCalendarWidgetModal, handleCloseCalendarWidgetModal } from '../../../../../redux/app/appsModalSlice';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';






const CalendarBlock = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  // const navigate = useNavigate();


  const openAppsModalHandler = (component) => {
    dispatch(handleOpenAppsModal(component))
  };

  const [monthHeaderToolbar, setMonthHeaderToolbar] = useState({
    left: 'timeGridDay,listWeek,dayGridMonth',
    center: '',
    right: '',
  });


  const handleViewChange = (view) => {
    if (view.view.type === 'dayGridMonth') {
      setMonthHeaderToolbar({
        left: 'timeGridDay,listWeek,dayGridMonth',
        center: '',
        right: 'prev title next',
      });
    } else {
      setMonthHeaderToolbar({
        left: 'timeGridDay,listWeek,dayGridMonth',
        center: '',
        right: '',
      });
    }
  };

  const currentTime = new Date().toISOString().slice(11, 16);



  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  const openWorkDriveWidgetModal = useSelector((state) => state.appsModal.openWorkDriveWidgetModal);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  const handleOpenCalendarModal = () => {
    dispatch(handleOpenCalendarWidgetModal());
  };
  const handleCloseCalendarModal = () => {
    dispatch(handleCloseCalendarWidgetModal());
  };






  const title = document.getElementsByClassName('fc-list-day-text')[0];

  const customDayHeaderContent = (info) => {
    const dayNum = new Date(info.date).getDate();
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'long' });


    // if(info.view.type === 'timeGridDay') {
    //   title.textContent = `${dayNum} ${month} ${year}`;
    // } else {
    //   title.textContent = `${month} ${year}`;
    // }
    // const year = new Date(info.date).getFullYear();
    return (
      <>
        <span>{dayText}</span>, {dayNum} {month} {year}
      </>
    );
  };

  const customWeekHeaderContent = (info) => {
    const dayNum = new Date(info.date).getDate();
    const today = new Date().getDate();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'long' });
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();
    // const dayOfWeek = new Date(info.date).toLocaleString('en-US', { weekday: 'short' });
    // const year = new Date(info.date).getFullYear();

    // if (info.view.type === 'listWeek') {

    //   console.log('first')
    //   title.textContent = `${month} ${year}`;
    // } else {
    //   title.textContent = '';
    // }

    return (
      <>
        <a className={today === dayNum ? 'today' : ''}><span>{dayText}</span>, {dayNum} {month} {year}</a>
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

    // if (title && info.view.type === 'dayGridMonth') {
    //   title.textContent = `${thisMonth} ${thisYear}`;
    // }
    
    return (
      <>
        {dayText.slice(0, 1)}
      </>
    );
  };



  const customAgendaHeaderContent = (info) => {
    const dayNum = new Date(info.date).getDate();
    const dayText = new Date(info.date).toLocaleString('default', { weekday: 'long' });
    const month = new Date(info.date).toLocaleString('default', { month: 'long' });
    const year = new Date(info.date).getFullYear();
    // const dayOfWeek = new Date(info.date).toLocaleString('en-US', { weekday: 'short' });

    // if (info.view.type === 'listMonth') {
    //   title.textContent = `${month} ${year}`;
    // } else {
    //   title.textContent = '';
    // }

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
    // <CloudBlock
    //   title={t("SERVICES.CALENDAR.TITLE")}
    //   subtitle={t("SERVICES.CALENDAR.SUBTITLE")}
    //   // rightButtonAction={() => navigate('/services/calendar')}
    //   infoContent="asd"
    //   directComponent={CalendarPage}
    //   content={
    //     <Calendar
    //       locale={getLangISOFormat(i18n.language)}
    //       minDetail="month"
    //       value={new Date()}
    //       // onChange={() => navigate("/services/calendar")}
    //       onChange={() => openAppsModalHandler(CalendarPage)}
    //     />
    //   }
    //   // mdiIcon="calendar_month"
    //   icon={icon}
    //   // iconContainerColor="blue"
    // />

    <>
      <div className={`my-services__calendar ${openCalendarWidgetModal || appsModal || openNotesWidgetModal || openTasksWidgetModal || openWorkDriveWidgetModal ? 'back-transparent' : ''}`}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          // headerToolbar={{
          //   // left: 'prev title next today',
          //   left: 'timeGridDay,listWeek,dayGridMonth,',
          //   center: '',
          //   right: '',
          // }}
          headerToolbar={monthHeaderToolbar}
          viewDidMount={handleViewChange}

          buttonText={{
            today:    'Today',
            month:    'Month',
            week:     'Week',
            day:      'Day',
            list:     'Week'
          }}

          views = {{
            // dayGridMonth: { // name of view
            //   titleFormat: {year: 'numeric', month: 'short' },
            //   dayHeaderFormat: {weekday: 'short' },
            //   dayHeaders: true,
            //   // titleFormat: { year: 'numeric', month: 'short', day: '2-digit' }
            // },
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

            listWeek: {
              dayHeaderContent: customWeekHeaderContent,
              titleFormat: {year: 'numeric', month: 'short'},
            },

            listMonth: {
              dayHeaderContent: customAgendaHeaderContent,
            }
          }}
          
          // views = {{
          //   dayGridMonth: { // name of view
          //     titleFormat: {year: 'numeric', month: 'short' },
          //     dayHeaderFormat: {weekday: 'short' },
          //     dayHeaders: true,
          //     // titleFormat: { year: 'numeric', month: 'short', day: '2-digit' }
          //   },
          //   // timeGridDay: {
          //   //   dayHeaderFormat: {weekday: 'long' }
          //   // }
          // }}

          firstDay= {1}
          scrollTime={currentTime}

          initialEvents={INITIAL_EVENTS}
          slotLabelFormat={e => `${e.date.hour <= 9 ? `0${e.date.hour}` : e.date.hour}:${e.date.minute <= 9 ? `0${e.date.minute}` : e.date.minute}`}
          eventTimeFormat={{
            hour: '2-digit',
            hour12: false,
            minute: '2-digit',
            meridiem: 'short'
          }}
          
          allDaySlot= {false}
          allDayText= 'all'
          
          initialView='timeGridDay'
          editable={false}
          selectable={false}
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
          // eventStartEditable={true}
          // eventResizableFromStart={true}
          aspectRatio={1}
        />

        <div className="my-services__calendar_more-btn">
          <IconButton aria-label="add">
            <img src={plusIcon} />
          </IconButton>

          <IconButton aria-label="expand" onClick={handleOpenCalendarModal}>
            <img src={expandIcon} />
          </IconButton>
        </div>
      </div>

      <Modal
      open={openCalendarWidgetModal}
      onClose={handleCloseCalendarModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="apps-modal"
      disableEnforceFocus 
      >
      <div className={`apps-modal-container ${firstPopupTab ? 'firstPopupShow' : ''} ${secondPopupTab ? 'secondPopupShow' : ''}`} >
        
        <CalendarPage handleCloseCalendarModal={handleCloseCalendarModal} />
      </div>
      </Modal>
    </>
      
  );
};

export default CalendarBlock;
