import React from "react";
import Calendar from "react-calendar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CloudBlock from "../cloud-block/CloudBlock";
import { getLangISOFormat } from "../../../../../types";
import CalendarPage from "../../../calendar/CalendarPage";
import icon from "../../../../../assets/images/my-services/calendar.png";
import { useSelector, useDispatch } from "react-redux";
import { handleOpenAppsModal } from '../../../../../redux/app/appsModalSlice';




const CalendarBlock = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  // const navigate = useNavigate();


  const openAppsModalHandler = (component) => {
    dispatch(handleOpenAppsModal(component))
  };


  return (
    <CloudBlock
      title={t("SERVICES.CALENDAR.TITLE")}
      subtitle={t("SERVICES.CALENDAR.SUBTITLE")}
      // rightButtonAction={() => navigate('/services/calendar')}
      infoContent="asd"
      directComponent={CalendarPage}
      content={
        <Calendar
          locale={getLangISOFormat(i18n.language)}
          minDetail="month"
          value={new Date()}
          // onChange={() => navigate("/services/calendar")}
          onChange={() => openAppsModalHandler(CalendarPage)}
        />
      }
      // mdiIcon="calendar_month"
      icon={icon}
      // iconContainerColor="blue"
    />
  );
};

export default CalendarBlock;
