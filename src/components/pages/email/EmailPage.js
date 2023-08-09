import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { mailsCategory } from '../../../mocks/mocks';
import icon from "../../../assets/images/my-services/email.png";
import './email-page.scss';
import { useSelector } from 'react-redux';
import EmailTable from './EmailTable';
import { emails } from '../../../mocks/mocks';
import EmailDetailsBar from './EmailDetailsBar';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';




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


function EmailPageContent() {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);




  // start showing mail category tab
  const [showMail, setShowMail] = useState(0);
  const handleShowMail = (event, newValue) => {
    // if (event.target === event.currentTarget) {
      setShowMail(newValue);
      // setNewMailToggler(false);
    // }
  };
  // end showing chat tab

  
  // start handle category show
  const [showCategory, setShowCategory] = useState(true);
  // end handle category show
  
  // start handle single mail show
  const [activeSingleMail, setActiveSingleMail] = useState(false);
  // end handle single mail show
  
  const [searchText, setSearchText] = useState('');



  // get value of progressbar
  const totalSpace = 1000;
  const usedSpace = 586;
  const freeSpace = totalSpace - usedSpace;
  const value = calculatePercentageBetweenNumbers(usedSpace, totalSpace)
  
  function calculatePercentageBetweenNumbers(usedSpace, totalSpace) {
    // Calculate the difference between the two numbers
    const difference = totalSpace - usedSpace;
  
    // Calculate the percentage increase or decrease
    const percentage = (difference / usedSpace) * 100;
  
    return percentage;
  }

  
  return (

    <div className="cloud-page">
      <div className="cloud-page__header">
        <Grid container spacing={2}>
          <Grid 
            item
            xl={2}
            lg={3}
            md={3}
            xs={12}
            className='cloud-page__header_share'
          >
            <div className='cloud-page__header_share_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_share_title">
              {t("EMAIL_PAGE.TITLE")}
            </div>
          </Grid>
          
          <Grid 
            item
            xl={10}
            lg={9}
            md={9}
            xs={12}
            sx={{display: 'flex', alignItems: 'center'}}
          >
            <div className='cloud-page__header_email-details'>
              <EmailDetailsBar setSearchText={setSearchText} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="cloud-page__content">
        <div className='email-page'>
          <Grid container spacing={3}>
            <Grid 
              item 
              xl={activeSingleMail ? 0 : 2} 
              lg={activeSingleMail ? 0 : 3} 
              md={activeSingleMail ? 0 : 3} 
              xs={12}
              sx={{
                display: {lg: secondPopupTab || activeSingleMail ? 'none' : 'block', md: secondPopupTab || activeSingleMail ? 'none' : 'block'},
              }}
            >
              <div className='email-page_sidebar'>
                <div className='email-page_sidebar_actions'>
                  <div className='email-page_sidebar_actions_create-event'>
                    <Button
                      // startIcon={<AddIcon />}
                      className="email-page_sidebar_actions_create-event_btn"
                      aria-label="more"
                      id="long-button"
                      aria-haspopup="true"
                      // onClick={handleCreateNote}
                    >
                      {t("EMAIL_PAGE.CREATE_MAIL_BUTON")}
                    </Button>
                    {/* <button>{t('EMAIL_PAGE.CREATE_MAIL_BUTON')}</button> */}
                  </div>

                  <div className='email-page_sidebar_actions-section'>
                    <div className='email-page_sidebar_actions-section_category'>
                      <Tabs
                        orientation="vertical"
                        // variant="scrollable"
                        value={showMail}
                        onChange={handleShowMail}
                        aria-label="Vertical tabs example"
                        className='email-page_sidebar_actions-section_category-list'
                      >
                        {mailsCategory.map((item, index) => (
                          <Tab
                            className='email-page_sidebar_actions-section_category-item'
                            key={item.id}
                            {...a11yProps(index)}
                            component={'div'}
                            label={
                              <>
                                <div className='email-page_sidebar_actions-section_category-item_content'>
                                  {/* <Button variant="outlined" startIcon={<InboxOutlinedIcon />}>
                                    {item.title}
                                  </Button> */}
                                  {
                                    item.title === 'Inbox' ? <InboxOutlinedIcon/> :
                                    item.title === 'Drafts' ? <FeedOutlinedIcon /> :
                                    item.title === 'Sent' ? <SendOutlinedIcon /> :
                                    <StarBorderOutlinedIcon />
                                  }
                                   {/* <InboxOutlinedIcon/> */}
                                    {/* <img src={ showMail !== index ? item.grayIcon : item.blueIcon} alt={item.title} className='email-page_sidebar_actions-section_category-item_content-icon' /> */}
                                    <p className='email-page_sidebar_actions-section_category-item_content-title'>{item.title}</p>
                                </div>

                                {item.unreadNum > 0 ?
                                  <div className='email-page_sidebar_actions-section_category-item_unreadnum'>
                                    <p>{item.unreadNum}</p>
                                  </div>
                                  :
                                  ''
                                }
                                
                              </>
                            } 
                          />
                        ))}
                      
                      </Tabs>

                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              {/* <ListItemIcon>
                                <FolderOutlinedIcon />
                              </ListItemIcon> */}
                              <ListItemText primary="More" />
                            </div>
                          }
                        >
                          <TreeItem
                            nodeId="2"
                            label={
                              <div  className="email-page_sidebar_actions-section_category-tree_item">
                                {/* <ListItemIcon>
                                  <FolderOutlinedIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Documents" />
                              </div>
                            } 
                          >
                          </TreeItem>
                        </TreeItem>
                      </TreeView>

                      <Divider />

                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              {/* <ListItemIcon>
                                <FolderOutlinedIcon />
                              </ListItemIcon> */}
                              <ListItemText primary="Folders" />
                              
                              <IconButton aria-label="add" onClick={(e) => e.stopPropagation()}>
                                <AddIcon />
                              </IconButton>

                              <IconButton aria-label="setting" onClick={(e) => e.stopPropagation()}>
                                <SettingsOutlinedIcon />
                              </IconButton>
                            </div>
                          }
                        >
                          <TreeItem
                            nodeId="2"
                            label={
                              <div  className="email-page_sidebar_actions-section_category-tree_item">
                                {/* <ListItemIcon>
                                  <FolderOutlinedIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Documents" />
                              </div>
                            } 
                          >
                          </TreeItem>
                        </TreeItem>
                      </TreeView>

                      <Divider />

                      <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              {/* <ListItemIcon>
                                <FolderOutlinedIcon />
                              </ListItemIcon> */}
                              <ListItemText primary="Labels" />
                              
                              <IconButton aria-label="add" onClick={(e) => e.stopPropagation()}>
                                <AddIcon />
                              </IconButton>

                              <IconButton aria-label="setting" onClick={(e) => e.stopPropagation()}>
                                <SettingsOutlinedIcon />
                              </IconButton>
                            </div>
                          }
                        >
                          <TreeItem
                            nodeId="2"
                            label={
                              <div  className="email-page_sidebar_actions-section_category-tree_item">
                                {/* <ListItemIcon>
                                  <FolderOutlinedIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Documents" />
                              </div>
                            } 
                          >
                          </TreeItem>
                        </TreeItem>
                      </TreeView>

                    </div>
                  </div>
                </div>


                <div className="email-page_sidebar_space">
                  <LinearProgress  className="email-page_sidebar_space-progressbar" variant="determinate" value={value} />

                  <div className="email-page_sidebar_space-text">
                    <b>{freeSpace} Mb</b> / {totalSpace} Mb
                  </div>
                </div>


              </div>
            </Grid>

            <Grid
              item
              xl={secondPopupTab || activeSingleMail ? 12 : 10}
              lg={secondPopupTab || activeSingleMail ? 12 : 9}
              md={secondPopupTab || activeSingleMail ? 12 : 9}
              xs={12}
            >
              <div className='email-page_main'>
                <div className='email-page_main_email'>
                  <TabPanel value={showMail} index={0} className='email-page_main_email-tab'>
                    <EmailTable activeSingleMail={activeSingleMail} setActiveSingleMail={setActiveSingleMail} emails={emails} searchText={searchText} setSearchText={setSearchText}/>
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={1}>
                    drafts
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={2}>
                    sent
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={3}>
                    starred
                  </TabPanel>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>  
      </div>
  </div>


  );
}


const EmailPage = () => {
  return (
    <div className="page-container">
      <EmailPageContent />
    </div>
  )
}

export default EmailPage;