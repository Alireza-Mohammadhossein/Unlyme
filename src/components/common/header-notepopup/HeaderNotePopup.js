import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { notes } from '../../../mocks/mocks';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { isNull } from 'lodash';
import dayjs from 'dayjs';




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



const HeaderNotePopup = ({ setNotePopupToggler, props }) => {
  const { t } = useTranslation();
  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  
  
  
  // start showing chat tab
  const [showNote, setShowNote] = useState(null);
  const handleShowNote = (event, newValue) => {
    setShowNote(newValue);
  };
// end showing chat tab



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  
  const dayNow = dayjs().date();
  const monthNow = dayjs().format('MMM');
  const yearNow = dayjs().format('YYYY');
  const timeNow = dayjs().format('HH:mm');



  return (
    <div className='note-popup'>
      <div className='note-popup-list'>
        <div className='note-popup-list__header'>
              <p className='note-popup-list__header-title'>{t('NOTE_POPUP.TITLE')}</p>
              <div className='note-popup-list__header-actions'>
                  <div className='note-popup-list__header-actions_more'>
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
                  
                  <div className='note-popup-list__header-actions_close'>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={() => setNotePopupToggler(false)}
                    >
                      <CloseIcon  sx={{ color: '#000000' }}/>
                    </IconButton>

                  </div>
              </div>
        </div>

        <div className='note-popup-list__body'>
            <div className='note-popup-list__body-create'>
                <Button variant="outlined" startIcon={<AddIcon />} className='note-popup-list__body-create_btn'>
                    {t("NOTE_POPUP.CREATE_NOTE")}
                </Button>
            </div>
            
            <div className='note-popup-list__body-messages_container' >
              <div className='note-popup-list__body-messages'>
                  <div className='note-popup-list__body-messages_list'>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={showNote}
                      onChange={handleShowNote}
                      aria-label="Vertical tabs example"
                    >

                        {notes.map((item, index) => (
                          <Tab
                            className='note-popup-list__body-messages_item'
                            key={item.id}
                            {...a11yProps(index)}
                            label={
                              <>                          
                                <div className='note-popup-list__body-messages_item_content'>
                                    <p className='note-popup-list__body-messages_item_content_name'>{item.title}</p>
                                    <p className='note-popup-list__body-messages_item_content_last-message'>{item.message}</p>
                                </div>
                                
                                <div className='note-popup-list__body-messages_item_actions'>
                                    <div className='note-popup-list__body-messages_item_actions-edit'>
                                        <IconButton
                                            aria-label="edit"
                                            id="long-button"
                                            aria-controls={open ? "long-menu" : undefined}
                                            aria-expanded={open ? "true" : undefined}
                                            aria-haspopup="true"
                                            // onClick={handleClick}
                                        >
                                            <DriveFileRenameOutlineIcon sx={{ color: '#6E6F6F' }} />
                                        </IconButton>
                                    </div>
                                    
                                    <div className='note-popup-list__body-messages_item_actions-delete'>
                                        <IconButton
                                            aria-label="delete"
                                            id="long-button"
                                            aria-controls={open ? "long-menu" : undefined}
                                            aria-expanded={open ? "true" : undefined}
                                            aria-haspopup="true"
                                        // onClick={handleClick}
                                        >
                                            <DeleteOutlineIcon sx={{ color: '#6E6F6F' }} />
                                        </IconButton>

                                    </div>
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





      {showNote !== null
        ? 
        <div className='note-popup-messages'>
          {notes.map((item, index) => (
            <TabPanel value={showNote} index={index} className='note-popup-messages-tabpanel'>
                <div className='note-popup-messages__header'>
                  <div className='note-popup-messages__header-info'>
                    <p className='note-popup-messages__header-info_name'>{t('NOTE_POPUP.CREATE_NOTE')}</p>
                  </div>
    
                  <div className='note-popup-messages__header-actions'>
                    <div className='note-popup-messages__header-actions_edit'>
                      <IconButton
                        aria-label="edit"
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
                    
                    <div className='note-popup-messages__header-actions_close'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={() => setShowNote(null)}
                      >
                        <DeleteOutlineIcon  sx={{ color: '#000000' }}/>
                      </IconButton>
    
                    </div>
                  </div>
                </div>
    
                <div className='note-popup-messages__body'>
    
                  <div className='note-popup-messages__body-date'>
                    <p>{item.day} {item.month} {item.year} at {item.time}</p>
                  </div>
    
                  <div className='note-popup-messages__body-content'> 
                    <div className='note-popup-messages__body-content_text'>
                      <TextField
                        className='note-popup-messages__body-content_text-area'
                        placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                        defaultValue={item.message ? item.message : ''}
                        multiline
                      />
                    </div>
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


export default HeaderNotePopup;