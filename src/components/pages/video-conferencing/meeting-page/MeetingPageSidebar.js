import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenShortcut, handleCloseShortcut } from "../../../../redux/app/appsModalSlice";
import CalendarShortcut from "./shortcuts-modal/CalendarShortcut";
import TasksShortcut from "./shortcuts-modal/TasksShortcut";
import NotesShortcut from "./shortcuts-modal/NotesShortcut";
import searchIcon from "../../../../assets/images/header/new-icons/search.svg";





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
        <div sx={{ p: 3 }}>
          {children}
        </div>
      )}
    </div>
  );
}

  
  
  const MeetingPageSidebar = () => {

    const dispatch = useDispatch();
    const openAppsShortcut = useSelector((state) => state.appsModal.openAppsShortcut);
    // const SelectedShortcut = useSelector((state) => state.appsModal.SelectedShortcut);
    const [selectedShortcut, setSelectedShortcut] = useState('');
    
    const openShortcutModalHandler = (componentName) => {
      dispatch(handleOpenShortcut())
      setSelectedShortcut(componentName)
    };
    
    const closeShortcutModalHanlder = () => {
      dispatch(handleCloseShortcut())
      setSelectedShortcut('')
    };


    const ITEM_HEIGHT = 48;
    const options = [
      {
        id: 11,
        title: "Add Calendar",
        componentName: 'CalendarShortcut', 
        // component: CalendarShortcut,
      },
      {
        id: 22,
        title: "Add Tasks",
        componentName: 'TasksShortcut', 
        // component: TasksShortcut,
      },
      {
        id: 33,
        title: "Add Notes",
        componentName: 'NotesShortcut', 
        // component: NotesShortcut,
      },
    ];
    
  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // const [SelectedShortcut, setSelectedShortcut] = useState(null);


    // const [openShortcut, setOpenShortcut] = useState(false);

    // const handleOpenShortcut = (component) => {
    //   setSelectedShortcut(component);
    //   setOpenShortcut(true);
    //   console.log('selected', SelectedShortcut);
    //   console.log('component', component);
    // };
    // const handleCloseShortcut = () => {
    //   setSelectedShortcut(null);
    //   setOpenShortcut(false);
    // };
  
  
    return (
        <>
          <div className="meeting-page_sidebar_open-apps">
            <Button
                variant="outlined"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                // startIcon={<AddIcon />}
                className="meeting-page_sidebar_open-apps_btn"
            >
                Open Apps
            </Button>
            
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock = {true}
            >
              {options.map((option) => (
                <MenuItem
                    key={option.id}
                    onClick={handleClose}
                >
                  <Button
                    startIcon={<AddIcon />}
                    className="meeting-page_sidebar_open-apps_item-btn"
                    onClick={() => openShortcutModalHandler(option.componentName)}
                  >
                    {option.title}
                  </Button>
                    
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className="meeting-page_sidebar-section">
              <Tabs value={value} onChange={handleChange} centered className="meeting-page_sidebar-section_tabs">
                  <Tab label="Chat" className="meeting-page_sidebar-section_tabs-btn" />
                  <Tab label="People" className="meeting-page_sidebar-section_tabs-btn" />
                  <Tab label="Messages" className="meeting-page_sidebar-section_tabs-btn" />
              </Tabs>

              <div className='meeting-page_sidebar-section_search'>
                <FormControl>
                    <div className="meeting-page_sidebar-section_search_container">
                        <label><img src={searchIcon} /></label>
                        <input
                          className="meeting-page_sidebar-section_search-input"
                          // onChange={(e) => setSearchNote(e.target.value)}
                          placeholder='Search...'
                        />
                    </div>
                </FormControl>
              </div>
             

              <TabPanel value={value} index={0}>
                  Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                  Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                  Item Three
              </TabPanel>
          </div>

          <Modal
            open={openAppsShortcut}
            onClose={closeShortcutModalHanlder}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="shortcut-modal"
            disableEnforceFocus 
          >
            <div className='shortcut-modal-container' >
              {/* {SelectedShortcut} */}
              {/* {selectedShortcut && <selectedShortcut />} */}
              {
                selectedShortcut === 'CalendarShortcut' ? <CalendarShortcut /> :
                selectedShortcut === 'TasksShortcut' ? <TasksShortcut /> :
                selectedShortcut === 'NotesShortcut' ? <NotesShortcut /> :
                ''
              }
            </div>
          </Modal>
        </>
    );
  }

  export default MeetingPageSidebar;