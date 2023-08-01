import React, {useState} from "react";
import Calendar from "react-calendar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CloudBlock from "../cloud-block/CloudBlock";
import { getLangISOFormat } from "../../../../../types";
import CalendarPage from "../../../calendar/CalendarPage";
import icon from "../../../../../assets/images/my-services/calendar.png";
import { handleOpenAppsModal } from '../../../../../redux/app/appsModalSlice';
import FullCalendar from '@fullcalendar/react';
import { INITIAL_EVENTS, createEventId } from './../../../calendar/event-utils';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenCalendarWidgetModal, handleCloseCalendarWidgetModal } from '../../../../../redux/app/appsModalSlice';






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
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  const handleOpenCalendarModal = () => {
    dispatch(handleOpenCalendarWidgetModal());
  };
  const handleCloseCalendarModal = () => {
    dispatch(handleCloseCalendarWidgetModal());
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
      <div className={`my-services__calendar ${openCalendarWidgetModal || appsModal || openNotesWidgetModal ? 'back-transparent' : ''}`}>
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
            dayGridMonth: { // name of view
              titleFormat: {year: 'numeric', month: 'short' },
              dayHeaderFormat: {weekday: 'short' },
              dayHeaders: true,
              // titleFormat: { year: 'numeric', month: 'short', day: '2-digit' }
            },
            // timeGridDay: {
            //   dayHeaderFormat: {weekday: 'long' }
            // }
          }}

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
          <IconButton aria-label="add" onClick={handleOpenCalendarModal}>
            <AddIcon />
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
