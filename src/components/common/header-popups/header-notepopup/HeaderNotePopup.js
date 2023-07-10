import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { notes } from '../../../mocks/mocks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';




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

  const dispatch = useDispatch();
  const notePopup = useSelector((state) => state.popup.notePopupToggler);


  const { t } = useTranslation();
  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  
  
  
  // start showing chat tab
  const [showNote, setShowNote] = useState(false);
  const handleShowNote = (event, newValue) => {
    if (event.target === event.currentTarget) {      
      setShowNote(newValue);
      setNewNoteToggler(false);
      dispatch(toggleSecondPopupTab())
    }
  };
  // end showing chat tab

  // start create new note
  const [newNoteToggler, setNewNoteToggler] = useState(false);
  const [newNote, setNewNote] = useState([]);
  const handleCreateNote = () => {
    setNewNoteToggler(true);
    setShowNote(false);
    setNewNote([]);
    dispatch(toggleSecondPopupTab())
  }
  // end create new note



  const [notes, setNotes] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentTitle, setCurrentTitle] = useState('')

  // start getting notes from localstorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) setNotes(storedNotes);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  // end getting notes from localstorage

  const handleAddNote = (dayNow, monthNow, yearNow, timeNow, currenTitle, currentMessage) => {
    if (currentMessage !== '' && currentTitle !== '') {
      const newNote = {
        id: new Date().getTime(),
        day: dayNow,
        month: monthNow,
        year: yearNow,
        time: timeNow,
        title: currenTitle,
        message: currentMessage
      }
      setNotes([...notes, newNote]);
      setCurrentTitle('');
      setCurrentMessage('');
      setNewNoteToggler(false);
    }
  };


  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setNewNoteToggler(false);
    setShowNote(false);
  };



  const [newTitleValue, setNewTitleValue] = useState('');
  const [newMessageValue, setNewMessageValue] = useState('');

  const handleUpdateNote = (index, newTitleValue, newMessageValue) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = {
      ...updatedNotes[index],
      title: newTitleValue,
      message: newMessageValue
    };
    setNotes(updatedNotes);
    setNewTitleValue('');
    setNewMessageValue('');
    setShowNote(false);
  };




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
    <div className='header-popup note-popup'>
      <div className='note-popup-list'>
        <div className='note-popup-list__header'>
              <p className='note-popup-list__header-title'>{t('NOTE_POPUP.TITLE')}</p>
              {
                showNote === false ?
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
                    
                    <div className='note-popup-list__header-actions_close'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={() => 
                          // setNotePopupToggler(false)
                          dispatch(toggleNotePopup())
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

        <div className='note-popup-list__body'>
            <div className='note-popup-list__body-create'>
                <Button variant="outlined" startIcon={<AddIcon />} className='note-popup-list__body-create_btn' onClick={handleCreateNote}>
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
                            component={'div'}
                            label={
                              <>
                                <div className='note-popup-list__body-messages_item_content'>
                                    <p className='note-popup-list__body-messages_item_content_name'>{item.title}</p>
                                    <p className='note-popup-list__body-messages_item_content_last-message'>{item.message}</p>
                                </div>
                                
                                <div className='note-popup-list__body-messages_item_actions'>
                                    {/* <div className='note-popup-list__body-messages_item_actions-edit'>
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
                                    </div> */}
                                    
                                    <div className='note-popup-list__body-messages_item_actions-delete'>
                                        <IconButton
                                            aria-label="delete"
                                            id="long-button"
                                            aria-controls={open ? "long-menu" : undefined}
                                            aria-expanded={open ? "true" : undefined}
                                            aria-haspopup="true"
                                            onClick={() => handleDeleteNote(index)}
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



      {showNote !== false
        ? 
        <div className='note-popup-messages'>
          {notes.map((item, index) => {
            return (
              <TabPanel key={item.id} value={showNote} index={index} className='note-popup-messages-tabpanel'>
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
                      
                      <div className='note-popup-messages__header-actions_close'>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={() => {
                            setShowNote(false)
                            dispatch(toggleSecondPopupTab(false))
                          }}
                        >
                          <CloseIcon  sx={{ color: '#000000' }}/>
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
                          className='note-popup-messages__body-content_text-title'
                          placeholder={t('NOTE_POPUP.CREATE_NOTE.TITLE')}
                          multiline
                          value={newTitleValue || item.title}
                          onChange={(e) => setNewTitleValue(e.target.value)}
                        />
  
                        <TextField
                          className='note-popup-messages__body-content_text-message'
                          placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                          multiline
                          value={newMessageValue || item.message}
                          onChange={(e) => setNewMessageValue(e.target.value)}
                        />
                      </div>
                    </div>
  
                    <div className='note-popup-messages__body-submit' >
                      <button
                        className='btn'
                        disabled= {!newTitleValue || !newMessageValue}
                        onClick={() => handleUpdateNote(index, newTitleValue, newMessageValue)}>
                          Update note
                      </button>
                    </div>
                  </div>
                
              </TabPanel>
            )
          }
        )}
        </div>
        : ''
      }

      {newNoteToggler 
        ?
          <div className='note-popup-messages'>
            <div className='note-popup-messages-tabpanel'>
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
                    
                    <div className='note-popup-messages__header-actions_close'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={() => {
                          setNewNoteToggler(false)
                          dispatch(toggleSecondPopupTab(false))
                        }}
                      >
                        <ArrowBackIcon  sx={{ color: '#000000' }}/>
                      </IconButton>
    
                    </div>
                  </div>
                </div>
    
                <div className='note-popup-messages__body'>
    
                  <div className='note-popup-messages__body-date'>
                    <p>{dayNow} {monthNow} {yearNow} at {timeNow}</p>
                  </div>
    
                  <div className='note-popup-messages__body-content'> 
                    <div className='note-popup-messages__body-content_text'>
                      <TextField
                        className='note-popup-messages__body-content_text-title'
                        placeholder={t('NOTE_POPUP.CREATE_NOTE.TITLE')}
                        multiline
                        value={currentTitle}
                        onChange={(e) => setCurrentTitle(e.target.value)}
                      />
                      <TextField
                        className='note-popup-messages__body-content_text-message'
                        placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                        multiline
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='note-popup-messages__body-submit' >
                    <button
                      className='btn'
                      disabled={!currentTitle || ! currentMessage}
                      onClick={() => {
                        handleAddNote(dayNow, monthNow, yearNow, timeNow, currentTitle, currentMessage)
                        dispatch(toggleSecondPopupTab(false))
                      }
                        }>
                      Add
                    </button>
                  </div>



                </div>
              
            </div>
          </div>
        :
        ''
      }

    </div>
  )
}


export default HeaderNotePopup;