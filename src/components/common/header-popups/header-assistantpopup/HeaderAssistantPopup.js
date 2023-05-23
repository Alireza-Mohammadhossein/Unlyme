import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { assistants } from "../../../../mocks/mocks";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import dayjs from "dayjs";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import searchIcon from "../../../../assets/images/header/search.gif";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from "react-redux";
import { toggleAssistantPopup ,toggleNewAssistantPopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-assistant-tabpanel-${index}`}
      aria-labelledby={`vertical-assistant-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-assistant-tab-${index}`,
    "aria-controls": `vertical-assistant-tabpanel-${index}`,
  };
}

const HeaderAssistantPopup = ({
  // setAssistantPopupToggler,
  // newAssistantToggler,
  // setNewAssistantToggler,
  assistantText,
  props,
  message,
  setMessage,
}) => {

  const dispatch = useDispatch();
  const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);
  const newAssistantPopup = useSelector((state) => state.popup.newAssistantPopupToggler);
  const assistantMessage = useSelector((state) => state.popup.assistantMessage);


  const { t } = useTranslation();
  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  // start showing assitant tab
  const [showAssistant, setShowAssistant] = useState(false);
  const handleShowAssistant = (event, newValue) => {
    setShowAssistant(newValue);
    dispatch(toggleNewAssistantPopup(false))
    dispatch(toggleSecondPopupTab())

    // setNewAssistantToggler(false);

    // if (event.target === event.currentTarget) {
    // }
  };
  // end showing chat tab

  // start create new note
  // const [newAssistantToggler, setNewAssistantToggler] = useState(false);
  const [newAssistant, setNewAssistant] = useState([]);
  const handleCreateAssitant = () => {
    // setNewAssistantToggler(true);
    dispatch(toggleNewAssistantPopup())

    setShowAssistant(false);
    setNewAssistant([]);
  };
  // end create new note

  const handleDeleteAssistant = (index) => {
    // const updatedNotes = [...notes];
    // updatedNotes.splice(index, 1);
    // setNotes(updatedNotes);
    // setNewNoteToggler(false);
    // setShowNote(false);
    console.log("deleted");
  };

  // const [newTitleValue, setNewTitleValue] = useState('');
  // const [newMessageValue, setNewMessageValue] = useState('');

  // const handleUpdateNote = (index, newTitleValue, newMessageValue) => {
  //   const updatedNotes = [...notes];
  //   updatedNotes[index] = {
  //     ...updatedNotes[index],
  //     title: newTitleValue,
  //     message: newMessageValue
  //   };
  //   setNotes(updatedNotes);
  //   setNewTitleValue('');
  //   setNewMessageValue('');
  //   setShowNote(false);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [message, setMessage] = useState(assistantText);

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="header-popup assistant-popup">
      <div className="assistant-popup-list">
        <div className="assistant-popup-list__header">
          <p className="assistant-popup-list__header-title">
            {t("ASSISTANT_POPUP.TITLE")}
          </p>
          <div className="assistant-popup-list__header-actions">
            <div className="assistant-popup-list__header-actions_more">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreHorizIcon sx={{ color: "#000000" }} />
              </IconButton>

              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock={true}
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

            <div className="assistant-popup-list__header-actions_close">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={() => 
                  dispatch(toggleAssistantPopup())
                  // setAssistantPopupToggler(false)
                }
              >
                <CloseIcon sx={{ color: "#000000" }} />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="assistant-popup-list__body">
          <div className="assistant-popup-list__body-search">
            <FormControl
              variant="standard"
              className="assistant-popup-list__body-search_form"
            >
              <TextField
                className="assistant-popup-list__body-search_input"
                placeholder={t("CHAT_POPUP.LIST.HEADER.SEARCH")}
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#ACACAC" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>

          <div className="assistant-popup-list__body-create">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              className="assistant-popup-list__body-create_btn"
              onClick={handleCreateAssitant}
            >
              {t("ASSISTANT_POPUP.NEW_CHAT")}
            </Button>
          </div>

          <div className="assistant-popup-list__body-messages_container">
            <div className="assistant-popup-list__body-messages">
              <div className="assistant-popup-list__body-messages_list">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={showAssistant}
                  onChange={handleShowAssistant}
                  aria-label="Vertical tabs example"
                >
                  {assistants.map((item, index) => (
                    <Tab
                      className="assistant-popup-list__body-messages_item"
                      key={item.id}
                      {...a11yProps(index)}
                      component={"div"}
                      label={
                        <>
                          <div className="assistant-popup-list__body-messages_item_content">
                            <p className="assistant-popup-list__body-messages_item_content_name">
                              {item.title}
                            </p>
                            <p className="assistant-popup-list__body-messages_item_content_last-message">
                              {item.subtitle}
                            </p>
                          </div>

                          <div className="assistant-popup-list__body-messages_item_actions">
                            <div className="assistant-popup-list__body-messages_item_actions-delete">
                              <IconButton
                                aria-label="delete"
                                id="long-button"
                                aria-controls={open ? "long-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={() => handleDeleteAssistant(index)}
                              >
                                <DeleteOutlineIcon sx={{ color: "#6E6F6F" }} />
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

      {showAssistant !== false ? (
        <div className="assistant-popup-messages">
          {assistants.map((item, index) => (
            <TabPanel
              key={item.id}
              value={showAssistant}
              index={index}
              className="assistant-popup-messages-tabpanel"
            >
              <div className="assistant-popup-messages__header">
                <div className="assistant-popup-messages__header-info">
                  <img
                    src={searchIcon}
                    alt="Unlyme assistant"
                    className="assistant-popup-messages__header-info_img"
                  />

                  <p className="assistant-popup-messages__header-info_name">
                    Unlyme Assistant
                  </p>
                </div>

                <div className="assistant-popup-messages__header-actions">
                  <div className="assistant-popup-messages__header-actions_more">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon sx={{ color: "#000000" }} />
                    </IconButton>

                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      disableScrollLock={true}
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

                  <div className="assistant-popup-messages__header-actions_close">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={() => {
                        setShowAssistant(false)
                        dispatch(toggleSecondPopupTab(false))
                      }}
                    >
                      <ArrowBackIcon sx={{ color: "#000000" }} />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="assistant-popup-messages__body">
                <p className="assistant-popup-messages__body-terms">
                  {item.title}
                </p>

                <div className="assistant-popup-messages__body-content">
                  {item.messages &&
                    item.messages.map((message) =>
                      message.user_id === "bot" ? (
                        <div
                          key={message.id}
                          className="assistant-popup-messages__body-content_friend"
                        >
                          <div className="assistant-popup-messages__body-content_friend-avatar">
                            <img src={item.avatar} alt={item.name} />
                          </div>
                          <div className="assistant-popup-messages__body-content_friend-message">
                            {message.texts &&
                              message.texts.map((text) => (
                                <div className="assistant-popup-messages__body-content_friend-message_text">
                                  <p>{text.text}</p>
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <div className="assistant-popup-messages__body-content_own">
                          <div className="assistant-popup-messages__body-content_own-message">
                            {message.texts &&
                              message.texts.map((text) => (
                                <div
                                  key={message.id}
                                  className="assistant-popup-messages__body-content_own-message_text"
                                >
                                  <p>{text.text}</p>
                                </div>
                              ))}
                          </div>
                        </div>
                      )
                    )}
                </div>

                <div className="assistant-popup-messages__body-footer">
                  <form>
                    <div className="assistant-popup-messages__body-footer_container">
                      <div className="assistant-popup-messages__body-footer_inputs">
                        <div className="assistant-popup-messages__body-footer_inputs-text">
                          <TextField
                            id=""
                            value={message}
                            onChange={handleTextChange}
                            placeholder="Type a message..."
                            variant="outlined"
                            size="small"
                            multiline
                            autoFocus
                            maxRows={1}
                          />
                        </div>
                      </div>

                      <div className="assistant-popup-messages__body-footer_send-btn">
                        <IconButton
                          aria-label="send message"
                          component="label"
                          onClick={(e) => {
                            setMessage("");
                          }}
                          disabled={message ? false : true}
                        >
                          <SendIcon />
                        </IconButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      ) : (
        ""
      )}

      {newAssistantPopup ? (
        <div className="assistant-popup-messages">
          <div className="assistant-popup-messages__header">
            <div className="assistant-popup-messages__header-info">
              <img
                src={searchIcon}
                alt="Unlyme assistant"
                className="assistant-popup-messages__header-info_img"
              />

              <p className="assistant-popup-messages__header-info_name">
                Unlyme Assistant
              </p>
            </div>

            <div className="assistant-popup-messages__header-actions">
              <div className="assistant-popup-messages__header-actions_more">
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreHorizIcon sx={{ color: "#000000" }} />
                </IconButton>

                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  disableScrollLock={true}
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

              <div className="assistant-popup-messages__header-actions_close">
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                      // setNewAssistantToggler(false)
                      dispatch(toggleNewAssistantPopup(false))
                      dispatch(toggleSecondPopupTab(false))
                    }
                  }
                >
                  <ArrowBackIcon sx={{ color: "#000000" }} />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="assistant-popup-messages__body">
            <div className="assistant-popup-messages__body-content"></div>

            <div className="assistant-popup-messages__body-footer">
              <form>
                <div className="assistant-popup-messages__body-footer_container">
                  <div className="assistant-popup-messages__body-footer_inputs">
                    <div className="assistant-popup-messages__body-footer_inputs-text">
                      <TextField
                        id=""
                        value={assistantMessage}
                        onChange={handleTextChange}
                        placeholder="Type a message..."
                        variant="outlined"
                        size="small"
                        multiline
                        autoFocus
                        maxRows={1}
                      />
                    </div>
                  </div>

                  <div className="assistant-popup-messages__body-footer_send-btn">
                    <IconButton
                      aria-label="send message"
                      component="label"
                      onClick={(e) => {
                        setMessage("");
                      }}
                      disabled={message ? false : true}
                    >
                      <SendIcon />
                    </IconButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

    </div>
  );
};

export default HeaderAssistantPopup;
