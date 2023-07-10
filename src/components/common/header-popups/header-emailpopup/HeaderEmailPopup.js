import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { emails } from '../../../../mocks/mocks';
import attached from '../../../../assets/images/my-services/email/attached.png';
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector, useDispatch } from "react-redux";
import { toggleEmailpopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';




 // tabs config
 function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}






const HeaderEmailPopup = () => {
  
  const dispatch = useDispatch();
  const emailPopup = useSelector((state) => state.popup.emailPopupToggler);

  const { t } = useTranslation();
  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const lastTenEmails = emails.slice(-10).reverse()


  const [showMail, setShowMail] = useState(false);
  const handleShowMail = (event, newShowMail) => {
    setShowMail(newShowMail);
    dispatch(toggleSecondPopupTab())
  };


 


  return (
    <div className='header-popup email-popup'>
      <div className='email-popup-list'>
        <div className='email-popup-list__header'>
              <p className='email-popup-list__header-title'>{t('EMAIL_POPUP.TITLE')}</p>

              {
                showMail === false ? 
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
                :
                  ''
              }

        </div>

        <div className='email-popup-list__body'>
          <div className='email-popup-list__body-create'>
              <Button variant="outlined" startIcon={<AddIcon />} className='email-popup-list__body-create_btn'>
                  {t("EMAIL_POPUP.NEW_EMAIL")}
              </Button>
          </div>


          <div className='email-popup-list__body-messages_container' >
            <div className='email-popup-list__body-messages'>
                <div className='email-popup-list__body-messages_list'>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={showMail}
                    onChange={handleShowMail}
                    aria-label="Vertical tabs example"
                    // sx={{ borderRight: 1, borderColor: 'divider' }}
                  >
                    {emails.map((email, index) => (
                      <Tab
                        className='email-popup-list__body-messages_item'
                        key={email.id}
                        {...a11yProps(index)}
                        component={'div'}
                        label={
                          <>
                            <div className='email-popup-list__body-messages_item_content'>
                              <p className='email-popup-list__body-messages_item_content_name'>{email.title}</p>
                              <p className='email-popup-list__body-messages_item_content-message'>{email.message}</p>
                            </div>
                      
                            <div className='email-popup-list__body-messages_item_status'>
                              {email.attached ?
                                <img src={attached} alt={email.title} />
                                  :
                                ''
                              }

                              <p>{email.date}</p>
                            </div>
                          </>
                        } 
                      />
                    ))}
                  </Tabs>
                </div>
            </div>
          </div>          
        </div>
      </div>


      {showMail !== false
        ? 
        <div className='email-popup-messages'>
          {emails.map((email, index) => (
            <TabPanel key={email.id} value={showMail} index={index} className='email-popup-messages-tabpanel'>
                <div className='email-popup-messages__header'>
                  <div className='email-popup-messages__header-info'>
                    {/* <img src={email.logo} alt={email.title} className='email-popup-messages__header-info_img' /> */}

                    <p className='email-popup-messages__header-info_name'>{email.title}</p>
                  </div>
    
                  <div className='email-popup-messages__header-actions'>
                    <div className='email-popup-messages__header-actions_more'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon sx={{ color: '#000000' }} />
                      </IconButton>
    
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
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
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                    
                    <div className='email-popup-messages__header-actions_close'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={() => {
                          setShowMail(false)
                          dispatch(toggleSecondPopupTab(false))
                        }}
                      >
                        <CloseIcon  sx={{ color: '#000000' }}/>
                      </IconButton>
    
                    </div>
                  </div>
                </div>
    
                <div className='email-popup-messages__body'>
                  <div className='email-popup-messages__body-single-mail'>
                    <div className='email-popup-messages__body-single-mail__header'>
                        <div className='email-popup-messages__body-single-mail__header-content'>
                            <div className='email-popup-messages__body-single-mail__header-content-icon'>
                                {email.logo ? 
                                  <Avatar alt={email.title} src={email.logo} />
                                : 
                                  <Avatar className='email-popup-messages__body-single-mail__header-content-icon-name'>{email.from[0]}</Avatar>
                                }
                            </div>
                            
                            <div className='email-popup-messages__body-single-mail__header-content-info'>
                                <p className='email-popup-messages__body-single-mail__header-content-info_title'>{email.title}</p>
                                <p className='email-popup-messages__body-single-mail__header-content-info_from'>From: {email.from}</p>
                                <p className='email-popup-messages__body-single-mail__header-content-info_to'>To: {email.to}</p>
                            </div>
                        </div>
                    </div>

              
                    <div className='email-popup-messages__body-single-mail__content'>
                        <div className='email-popup-messages__body-single-mail__content-subject'>
                            <p>
                                <b>Subject: </b>
                                {email.subject}
                            </p>
                        </div>
                        
                        <div className='email-popup-messages__body-single-mail__content-message'>
                            <p>{email.message}</p>
                        </div>
                    </div>
                  </div>
                </div>
              
            </TabPanel>
        ))}
  
        </div>
        : 
          ''
      }
    </div>
  )
}


export default HeaderEmailPopup;