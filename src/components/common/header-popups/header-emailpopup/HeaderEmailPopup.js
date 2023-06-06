import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { emails } from '../../../../mocks/mocks';
import { notifications } from '../../../../mocks/mocks';
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector, useDispatch } from "react-redux";
import { toggleEmailpopup } from '../../../../redux/app/popupSlice';




const HeaderEmailPopup = () => {
  
  const dispatch = useDispatch();
  const emailPopup = useSelector((state) => state.popup.emailPopupToggler);

  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const lastTenEmails = emails.slice(-10).reverse()


  return (
    <div className='header-popup email-popup'>
      <div className='email-popup-list'>
        <div className='email-popup-list__header'>
              <p className='email-popup-list__header-title'>{t('EMAIL_POPUP.TITLE')}</p>
              <div className='email-popup-list__header-actions'>
                <div className='email-popup-list__header-actions_close'>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={() => 
                      dispatch(toggleEmailpopup())
                    }
                  >
                    <CloseIcon  sx={{ color: '#000000' }}/>
                  </IconButton>

                </div>
              </div>
        </div>

        <div className='email-popup-list__body'>
          <div className='email-popup-list__body-messages_container' >
            <List className='email-popup-list__body-messages'>
              {
                lastTenEmails.map(item => (
                  <ListItem key={item.id} className='email-popup-list__body-messages_item'>
                    <div className='email-popup-list__body-messages_item_header'>
                      {/* <div className='email-popup-list__body-messages_item_header-icon'>
                        <CircleIcon />
                      </div>
                      <div className='email-popup-list__body-messages_item_header-category'>
                        {item.category}
                      </div> */}
                      <div className='email-popup-list__body-messages_item_header-time'>
                        {item.date}
                      </div>
                    </div>

                    <div className='email-popup-list__body-messages_item_content'>
                      <div className='email-popup-list__body-messages_item_content-icon'>
                        <CircleIcon />
                      </div>
                      
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


export default HeaderEmailPopup;