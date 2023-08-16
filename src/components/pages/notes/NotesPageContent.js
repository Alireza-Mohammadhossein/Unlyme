import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../assets/images/my-services/notes.png";
import "./notes-page.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import trashIcon from "../../../assets/images/notepage/new/trash.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';





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
            <Typography component={"div"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
    
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  
  
  
  const NotesPageContent = ({searchNote, setSearchNote}) => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  
    const options = ["Edit", "Add description", "Delete"];
    const ITEM_HEIGHT = 48;
  
    // start showing chat tab
    const [showNote, setShowNote] = useState(false);
    const handleShowNote = (event, newValue) => {
      // if (event.target === event.currentTarget) {
        setShowNote(newValue);
        setNewNoteToggler(false);
        setNewTitleValue('')
        setNewMessageValue('')
      // }
    };
    // end showing chat tab
  
    // start create new note
    const [newNoteToggler, setNewNoteToggler] = useState(true);
    const [newNote, setNewNote] = useState([]);
    const handleCreateNote = () => {
      setNewNoteToggler(true);
      setShowNote(false);
      setNewNote([]);
    };
    // end create new note
  
    const [notes, setNotes] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");
    const [filteredNote, setFilteredNote] = useState([]);
    const [hasEntered, setHasEntered] = useState(false);
    const [inputText, setInputText] = useState('');
  
  
    // start getting notes from localstorage
    useEffect(() => {
      const storedNotes = JSON.parse(localStorage.getItem("notes"));
      if (storedNotes) {
        setNotes(storedNotes)
        setFilteredNote(storedNotes)
      };
    }, []);
  
    useEffect(() => {
      setFilteredNote(notes)
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    // end getting notes from localstorage
  
  
  
    useEffect(() => {
      if (searchNote) {
        setFilteredNote(notes.filter( note => {
          const filterValue = searchNote.toLowerCase();
    
          return (
            note.title.toLowerCase().match(filterValue) ||
            note.message.toLowerCase().match(filterValue)
          );
        }));
      } else if(searchNote.split('').length === 0) {
        setFilteredNote(notes)
      }
    }, [searchNote]);
  
  
    const handleAddNote = (
      dayNow,
      monthNow,
      yearNow,
      timeNow,
      currenTitle,
      currentMessage
    ) => {
      if (currentMessage !== "" && currentTitle !== "") {
        const newNote = {
          id: new Date().getTime(),
          day: dayNow,
          month: monthNow,
          year: yearNow,
          time: timeNow,
          title: currenTitle,
          message: currentMessage,
        };
        setNotes([...notes, newNote]);
        setFilteredNote([...notes, newNote]);
        setCurrentTitle("");
        setCurrentMessage("");
        setNewNoteToggler(false);
        setHasEntered(false)
        setInputText('')
      }
    };
  
    const handleDeleteNote = (index) => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
      setNewNoteToggler(false);
      setShowNote(false);
    };
  
    const [newTitleValue, setNewTitleValue] = useState("");
    const [newMessageValue, setNewMessageValue] = useState("");
  
    const handleUpdateNote = (index, newTitleValue, newMessageValue) => {
      const updatedNotes = [...notes];
      updatedNotes[index] = {
        ...updatedNotes[index],
        title: newTitleValue,
        message: newMessageValue,
      };
      setNotes(updatedNotes);
      // setNewTitleValue("");
      // setNewMessageValue("");
      // setShowNote(false);
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
    const monthNow = dayjs().format("MMM");
    const yearNow = dayjs().format("YYYY");
    const timeNow = dayjs().format("HH:mm");



    // getting title from first enter
    const handleMessageChange = (event) => {
      const newText = event.target.value;
      setInputText(newText);

      const lines = newText.split('\n');
      const firstLine = lines[0];
      const restLines = lines.slice(1).join('\n');

      if (!hasEntered && newText.includes('\n')) {
        setCurrentTitle(firstLine);
        setCurrentMessage(restLines);
        setHasEntered(true);
      } else if (hasEntered && currentTitle !== firstLine) {
        setCurrentTitle(firstLine);
        setCurrentMessage(restLines);
      } else if (hasEntered && currentTitle === firstLine) {
        setCurrentMessage(restLines);
      }
    };
  
  
  
    return (
      <div className="notes-page">
        <Grid container spacing={3}>
          <Grid
            item
            xl={secondPopupTab ? 4 : 2}
            lg={secondPopupTab ? 4 : 3}
            md={secondPopupTab ? 4 : 3}
            xs={12}
            // sx={{
            //   display: {
            //     lg: secondPopupTab ? "none" : "block",
            //     md: secondPopupTab ? "none" : "block",
            //   },
            // }}
          >
            <div className="notes-page_sidebar">
              <div className="notes-page_sidebar_create-event">

                {
                  currentTitle && currentMessage ?
                    <Button
                      // variant="outlined"
                      // startIcon={<AddIcon />}
                      className="notes-page_sidebar_create-event_btn"
                      onClick={() => handleAddNote(dayNow, monthNow, yearNow, timeNow, currentTitle, currentMessage)}
                    >
                      {t("NOTES_PAGE.CREATE_NOTE_BUTON")}
                    </Button>

                  :
                    <Button
                      // variant="outlined"
                      // startIcon={<AddIcon />}
                      className="notes-page_sidebar_create-event_btn"
                      onClick={handleCreateNote}
                    >
                      {t("NOTES_PAGE.CREATE_NOTE_BUTON")}
                    </Button>

                }

                
              </div>
  
              <div className="notes-page_sidebar-section">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={showNote}
                  onChange={handleShowNote}
                  aria-label="Vertical tabs example"
                  className="notes-page_sidebar-section_notes-list"
                >
                  {filteredNote.map((item, index) => (
                    <Tab
                      className="notes-page_sidebar-section_notes-item"
                      key={item.id}
                      {...a11yProps(index)}
                      component={"div"}
                      label={
                        <>
                          <div className="notes-page_sidebar-section_notes-item_content">
                            <p className="notes-page_sidebar-section_notes-item_content_name">
                              {item.title}
                            </p>
                            <p className="notes-page_sidebar-section_notes-item_content_message">
                              <span>{item.time}</span> 
                              <span>{item.message}</span>
                            </p>
                          </div>
  
                          <div className="notes-page_sidebar-section_notes-item_actions">
                            <div className="notes-page_sidebar-section_notes-item_actions-delete">
                              <IconButton
                                aria-label="delete"
                                id="long-button"
                                aria-controls={open ? "long-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={() => handleDeleteNote(index)}
                              >
                                <img src={trashIcon} />

                                {/* <DeleteOutlineIcon sx={{ color: "#6E6F6F" }} /> */}
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
          </Grid>
  
  
          <Grid
            item
            xl={secondPopupTab ? 8 : 10}
            lg={secondPopupTab ? 8 : 9}
            md={secondPopupTab ? 8 : 9}
            xs={12}
          >
            <div className="notes-page_main">
              <div className="notes-page_main_notes">
  
                {showNote !== false
                  ? 
                  <div className='notes-page_main_notes-messages'>
                    {notes.map((item, index) => {
                      return (
                        <TabPanel key={item.id} value={showNote} index={index} className='notes-page_main_notes-messages-tabpanel'>
                            <div className='notes-page_main_notes-messages__body'>
  
                              <div className='notes-page_main_notes-messages__body-date'>
                                <p>{item.day} {item.month} {item.year} at {item.time}</p>
                              </div>
  
                              <div className='notes-page_main_notes-messages__body-content'>
                                  <TextField
                                    // className='notes-page_main_notes-messages__body-content-title'
                                    className='notes-page_main_notes-messages__body-content-message'
                                    placeholder={t('NOTE_POPUP.CREATE_NOTE.TITLE')}
                                    multiline
                                    value={newTitleValue || item.title}
                                    onChange={(e) => {
                                      setNewTitleValue(e.target.value)
                                      handleUpdateNote(index, newTitleValue || item.title, newMessageValue || item.message)
                                    }}
                                  />
            
                                  <TextField
                                    className='notes-page_main_notes-messages__body-content-message'
                                    placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                                    multiline
                                    value={newMessageValue || item.message}
                                    onChange={(e) => {
                                      setNewMessageValue(e.target.value)
                                      handleUpdateNote(index, newTitleValue || item.title, newMessageValue || item.message)
                                    }}
                                  />
                              </div>
  
                              {/* <div className='notes-page_main_notes-messages__body-submit'>
                                <button
                                  className='btn'
                                  disabled= {!newTitleValue || !newMessageValue}
                                  onClick={() => handleUpdateNote(index, newTitleValue, newMessageValue)}>
                                    Update note
                                </button>
                              </div> */}
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
                    <div className='notes-page_main_notes-messages'>
                          <div className='notes-page_main_notes-messages__body'>
                            <div className='notes-page_main_notes-messages__body-date'>
                              <p>{dayNow} {monthNow} {yearNow} at {timeNow}</p>
                            </div>
              
                            <div className='notes-page_main_notes-messages__body-content'> 
                                {/* <TextField
                                  className='notes-page_main_notes-messages__body-content-title'
                                  placeholder={t('NOTE_POPUP.CREATE_NOTE.TITLE')}
                                  multiline
                                  value={currentTitle}
                                  onChange={(e) => setCurrentTitle(e.target.value)}
                                /> */}
                                <TextField
                                  className='notes-page_main_notes-messages__body-content-message'
                                  placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                                  multiline
                                  value={inputText}
                                  autoFocus
                                  // onChange={(e) => setCurrentMessage(e.target.value)}
                                  onChange={handleMessageChange}
                                />
                            </div>
  
                            {/* <div className='notes-page_main_notes-messages__body-submit' >
                              <button
                                className='btn'
                                disabled={!currentTitle || ! currentMessage}
                                onClick={() => handleAddNote(dayNow, monthNow, yearNow, timeNow, currentTitle, currentMessage)}>
                                Add
                              </button>
                            </div> */}
  
  
  
                          </div>
                    </div>
                  :
                  ''
                }
  
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default NotesPageContent;