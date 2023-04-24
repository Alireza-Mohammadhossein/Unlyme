import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { chatMessages } from '../../../mocks/mocks';
import { isNull } from 'lodash';




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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const HeaderPopup = ({ setChatPopupToggler }) => {
  const { t } = useTranslation();
  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  const [value, setValue] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='popup'>
      <div className='popup-list'>
        <div className='popup-list__header'>
              <p className='popup-list__header-title'>{t('CHAT_POPUP.LIST.HEADER.TITLE')}</p>
              <div className='popup-list__header-actions'>
                  <div className='popup-list__header-actions_more'>
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

                  <div className='popup-list__header-actions_edit'>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <EditIcon sx={{ color: '#51A3FF' }} />
                    </IconButton>
                  </div>
                  
                  <div className='popup-list__header-actions_close'>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={() => setChatPopupToggler(false)}
                    >
                      <CloseIcon  sx={{ color: '#000000' }}/>
                    </IconButton>

                  </div>
              </div>
        </div>

        <div className='popup-list__body'>
            <div className='popup-list__body-search'>
                <FormControl variant="standard" className='popup-list__body-search_form'>
                    <TextField
                        className="popup-list__body-search_input"
                        id=""
                        placeholder={t("CHAT_POPUP.LIST.HEADER.SEARCH")}
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#ACACAC' }}/>
                              </InputAdornment>
                            ),
                          }}
                    />
                </FormControl>
            </div>

            <div className='popup-list__body-messages'>
                <div className='popup-list__body-messages_list'>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    // sx={{ borderRight: 1, borderColor: 'divider' }}
                  >

                      {chatMessages.map((item, index) => (
                        <Tab
                          className='popup-list__body-messages_item'
                          key={item.id}
                          {...a11yProps(index)}
                          label={
                            <>
                              <div className='popup-list__body-messages_item_avatar'>
                                <img src={item.avatar} alt={item.name}/>
                              </div>
                        
                              <div className='popup-list__body-messages_item_content'>
                              <p className='popup-list__body-messages_item_content_name'>{item.firstName} {item.lastName}</p>
                              <p
                                className='popup-list__body-messages_item_content_last-message'
                                style={item.status === 'unread' ? { color:'#51A3FF' , fontWeight: '600'} : {}}  
                              >{item.lastMessage}</p>
                              </div>
                        
                              <div className='popup-list__body-messages_item_status'>
                              {item.status === 'unread' ?
                                <CircleIcon className='popup-list__body-messages_item_status-unread' />
                                :
                                <DoneAllIcon className='popup-list__body-messages_item_status-read' />
                              }
                              </div>
                            </>
                          } 
                        />
                      ))}
                  </Tabs>


                  {/* {chatMessages.map((item, index) => (
                    <TabPanel value={value} index={index}>
                      {item.name}
                    </TabPanel>
                  ))} */}

                </div>
            </div>
        </div>
      </div>





      {value !== null
        ? 
        <div className='popup-messages'>
          {chatMessages.map((item, index) => (
          <TabPanel value={value} index={index} className='popup-messages-tabpanel'>
              <div className='popup-messages__header'>
                <div className='popup-messages__header-info'>
                  <img src={item.avatar} alt={item.firstName} className='popup-messages__header-info_img' />
                    
                  <p className='popup-messages__header-info_name'>{item.firstName}</p>
                </div>
  
                <div className='popup-messages__header-actions'>
                  <div className='popup-messages__header-actions_more'>
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
                  
                  <div className='popup-messages__header-actions_close'>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={() => setValue(null)}
                    >
                      <CloseIcon  sx={{ color: '#000000' }}/>
                    </IconButton>
  
                  </div>
                </div>
              </div>
  
              <div className='popup-messages__body'>
                <p className='popup-messages__body-terms'>{t('CHAT_POPUP.MESSAGE.TERMS')}</p>
  
                <div className='popup-messages__body-date'>
                  <p>Today</p>
                </div>
  
                <div className='popup-messages__body-content'>
                    text test 1
                </div>
              </div>
            
          </TabPanel>
        ))}
  
        </div>
        : ''
      }

    </div>
  )
}


export default HeaderPopup;