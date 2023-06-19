import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import './video-conferencing-rightside.scss';
import { useSelector, useDispatch } from "react-redux";
import { upcomingMeetings } from "../../../../../mocks/mocks";
import { recentMeetings } from "../../../../../mocks/mocks";



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


  const ITEM_HEIGHT = 48;
  const options = ["Edit", "Add description", "Delete"];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <TabPanel value={value} index={0} className='meetings-tabpanels'>
          {upcomingMeetings.map((item) => (
            <div className="meeting" key={item.id}>
              <div className="meeting_time">
                {item.day_id} 
              </div>

              
              {item.meetings.map((meeting) => (
                <div className="meeting_card">
                  <div className="meeting_card-icon">
                    <Avatar>{meeting.name.split('')[0][0].toLocaleUpperCase()}{meeting.name.split(' ')[1][0].toLocaleUpperCase()}</Avatar>
                  </div>

                  <div className="meeting_card-details">
                    <div className="meeting_card-details-name">{meeting.name}</div>
                    <div className="meeting_card-details-date">{meeting.date} {meeting.time_from} - {meeting.time_to}</div>
                    <div className="meeting_card-details-description">{meeting.description}</div>
                  </div>
                  
                  <div className="meeting_actions">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1} className='meetings-tabpanels'>
          {recentMeetings.map((item) => (
            <div className="meeting" key={item.id}>
              <div className="meeting_time">
                {item.day_id} 
              </div>

              
              {item.meetings.map((meeting) => (
                <div className="meeting_card">
                  <div className="meeting_card-icon">
                    <Avatar>{meeting.name.split('')[0][0].toLocaleUpperCase()}{meeting.name.split(' ')[1][0].toLocaleUpperCase()}</Avatar>
                  </div>

                  <div className="meeting_card-details">
                    <div className="meeting_card-details-name">{meeting.name}</div>
                    <div className="meeting_card-details-date">{meeting.date} {meeting.time_from} - {meeting.time_to}</div>
                    <div className="meeting_card-details-description">{meeting.description}</div>
                  </div>
                  
                  <div className="meeting_actions">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock = {true}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </TabPanel>
      </div>
    </div>  
  );
}

export default VideoConferencingRightSide;