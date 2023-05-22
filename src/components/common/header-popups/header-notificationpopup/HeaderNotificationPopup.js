import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { notifications } from '../../../../mocks/mocks';
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotificationPopup } from '../../../../redux/app/popupSlice';




const HeaderNotificationPopup = ({ setNotificationPopupToggler }) => {
  
  const dispatch = useDispatch();
  const notificationPopup = useSelector((state) => state.popup.notificationPopupToggler);
  
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  return (
    <div className='header-popup notification-popup'>
      <div className='notification-popup-list'>
        <div className='notification-popup-list__header'>
              <p className='notification-popup-list__header-title'>{t('NOTIFICATION_POPUP.TITLE')}</p>
              <div className='notification-popup-list__header-actions'>
                <div className='notification-popup-list__header-actions_close'>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={() => 
                      dispatch(toggleNotificationPopup())
                      // setNotificationPopupToggler(false)
                    }
                  >
                    <CloseIcon  sx={{ color: '#000000' }}/>
                  </IconButton>

                </div>
              </div>
        </div>

        <div className='notification-popup-list__body'>
          <div className='notification-popup-list__body-messages_container' >
            <List className='notification-popup-list__body-messages'>
              {
                notifications.map(item => (
                  <ListItem key={item.id} className='notification-popup-list__body-messages_item'>
                    <div className='notification-popup-list__body-messages_item_header'>
                      <div className='notification-popup-list__body-messages_item_header-icon'>
                        <CircleIcon />
                      </div>
                      <div className='notification-popup-list__body-messages_item_header-category'>
                        {item.category}
                      </div>
                      <div className='notification-popup-list__body-messages_item_header-time'>
                        {item.month} {item.day} at {item.time}
                      </div>
                    </div>

                    <div className='notification-popup-list__body-messages_item_content'>
                      <ListItemText
                        primary={item.title}
                        secondary={item.message}
                      />
                    </div>
                  </ListItem>
                ))
              }

            </List>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HeaderNotificationPopup;