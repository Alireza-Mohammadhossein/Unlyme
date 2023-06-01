import React, { useState } from 'react';
import CloudPage from '../../pages/cloud-page/CloudPage';
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


import { mailsCategory } from '../../../mocks/mocks';
import icon from "../../../assets/images/my-services/email.png";
import './email-page.scss';
import { useSelector } from 'react-redux';
import EmailTable from './EmailTable';
import { Visibility } from '@mui/icons-material';




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


function EmailPageContent() {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);




  // start showing mail category tab
  const [showMail, setShowMail] = useState(0);
  const handleShowMail = (event, newValue) => {
    if (event.target === event.currentTarget) {
      setShowMail(newValue);
      // setNewMailToggler(false);

    }
  };
  // end showing chat tab

  
  // start handle category show
  const [showCategory, setShowCategory] = useState(true);
  // end handle category show
  
  // start handle single mail show
  const [activeSingleMail, setActiveSingleMail] = useState(false);
  // end handle single mail show
  


  
  return (
    <div className='email-page'>
      <Grid container spacing={3}>
        <Grid 
          item 
          lg={activeSingleMail ? 0 : 3} 
          md={activeSingleMail ? 0 : 3} 
          xs={12}
          sx={{
            display: {lg: secondPopupTab || activeSingleMail ? 'none' : 'block', md: secondPopupTab || activeSingleMail ? 'none' : 'block'},
          }}
        >
          <div className='email-page_sidebar'>
            <div className='email-page_sidebar_create-event'>
              <button>{t('EMAIL_PAGE.CREATE_MAIL_BUTON')}</button>
            </div>

            <div className='email-page_sidebar-section'>
              <div className='email-page_sidebar-section_category'>
                <Tabs
                  orientation="vertical"
                  // variant="scrollable"
                  value={showMail}
                  onChange={handleShowMail}
                  aria-label="Vertical tabs example"
                  className='email-page_sidebar-section_category-list'
                >
                  {mailsCategory.map((item, index) => (
                    <Tab
                      className='email-page_sidebar-section_category-item'
                      key={item.id}
                      {...a11yProps(index)}
                      component={'div'}
                      label={
                        <>
                          <div className='email-page_sidebar-section_category-item_content'>
                              <img src={ showMail !== index ? item.grayIcon : item.blueIcon} alt={item.title} className='email-page_sidebar-section_category-item_content-icon' />
                              <p className='email-page_sidebar-section_category-item_content-title'>{item.title}</p>
                          </div>

                          {item.unreadNum > 0 ?
                            <div className='email-page_sidebar-section_category-item_unreadnum'>
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
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          item
          lg={secondPopupTab || activeSingleMail ? 12 : 9}
          md={secondPopupTab || activeSingleMail ? 12 : 9}
          xs={12}
        >
          <div className='email-page_main'>
            <div className='email-page_main_email'>
              <TabPanel value={showMail} index={0} className='email-page_main_email-tab'>
                <EmailTable activeSingleMail={activeSingleMail} setActiveSingleMail={setActiveSingleMail} />
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
  );
}


const EmailPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="page-container">
      <CloudPage
        title={t("EMAIL_PAGE.TITLE")}
        icon={icon}
        content={EmailPageContent()}
      />
    </div>
  )
}

export default EmailPage;