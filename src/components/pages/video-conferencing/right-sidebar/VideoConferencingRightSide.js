import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './video-conferencing-rightside.scss';
import { useSelector, useDispatch } from "react-redux";
import { upcomingMeetings } from "../../../../mocks/mocks";
import { recentMeetings } from "../../../../mocks/mocks";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



  
const VideoConferencingRightSide = () => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className="video-conferencing_rightside">
      <div className="video-conferencing_rightside-tabs">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Upcoming" />
          <Tab label="History" />
        </Tabs>
      </div>


      <div className="video-conferencing_rightside-tabpanels">
        <TabPanel value={value} index={0}>
          {upcomingMeetings.map((item) => (
            <div className="meeting" key={item.id}>
              <div className="meeting_time">
                {item.day_id}
              </div>

              
              {item.meetings.map((meeting) => (
                <div className="meeting_card">
                  <div className="meeting_card-icon">icon</div>
                  <div className="meeting_card-details">
                    <div className="meeting_card-details-name">{meeting.name}</div>
                    <div className="meeting_card-details-date">{meeting.date}{meeting.time_from}-{meeting.time_to}</div>
                    <div className="meeting_card-details-description">{meeting.description}</div>
                  </div>
                  <div className="meeting_actions">actions</div>
                </div>
              ))}

            </div>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>  
  );
}

export default VideoConferencingRightSide;