import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
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
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';

import inboxIconActive from '../../../assets/images/email/inbox.png';
import inboxIconNot from '../../../assets/images/email/inbox-not.png';
import draftIconActive from '../../../assets/images/email/draft.png';
import draftIconNot from '../../../assets/images/email/draft-not.png';
import sentIconActive from '../../../assets/images/email/sent.png';
import sentIconNot from '../../../assets/images/email/sent-not.png';
import starIconActive from '../../../assets/images/email/star.png';
import starIconNot from '../../../assets/images/email/star-not.png';
import arrowIcon from '../../../assets/images/email/arrow.svg';
import plusIcon from '../../../assets/images/email/plus.svg';
import settingIcon from '../../../assets/images/email/settings.svg';




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


        <div className='grid-content'>
            <div className='grid-content_left cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={icon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("EMAIL_PAGE.TITLE")}
              </div>
            </div>

            <div className='grid-content_right'>
              <div className='cloud-page__header_email-details'>
                <EmailDetailsBar setSearchText={setSearchText} />
              </div>
            </div>
        </div>


      </div>

      <div className="cloud-page__content">
        <div className='email-page'>

          <div className='grid-content'>
            <div className='grid-content_left'>
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
                                    item.title === 'Inbox' ? <img src={showMail === 0 ? inboxIconActive : inboxIconNot} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    item.title === 'Drafts' ? <img src={showMail === 1 ? draftIconActive : draftIconNot} className='email-page_sidebar_actions-section_category-item_content-icon' /> :
                                    
                                    item.title === 'Sent' ? <img src={showMail === 2 ? sentIconActive : sentIconNot} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    <img src={showMail === 3 ? starIconActive : starIconNot} className='email-page_sidebar_actions-section_category-item_content-icon'/>
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
                        defaultExpandIcon={<img src={arrowIcon} />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              {/* <ListItemIcon>
                                <FolderOutlinedIcon />
                              </ListItemIcon> */}
                              <ListItemText primary="MORE" />
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
                        defaultExpandIcon={<img src={arrowIcon} />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              {/* <ListItemIcon>
                                <FolderOutlinedIcon />
                              </ListItemIcon> */}
                              <ListItemText primary="FOLDERS" />
                              

                              <IconButton aria-label="add" onClick={(e) => e.stopPropagation()}>
                                <img src={plusIcon}/>
                              </IconButton>

                              <IconButton aria-label="setting" onClick={(e) => e.stopPropagation()}>
                                <img src={settingIcon}/>
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
                        defaultExpandIcon={<img src={arrowIcon} />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              {/* <ListItemIcon>
                                <FolderOutlinedIcon />
                              </ListItemIcon> */}
                              <ListItemText primary="LABELS" />
                              
                              <IconButton aria-label="add" onClick={(e) => e.stopPropagation()}>
                                <img src={plusIcon}/>
                              </IconButton>

                              <IconButton aria-label="setting" onClick={(e) => e.stopPropagation()}>
                                <img src={settingIcon}/>
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
            </div>

            <div className='grid-content_right'>
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
            </div>
          </div>

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