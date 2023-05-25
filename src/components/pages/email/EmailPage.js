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

import icon from "../../../assets/images/my-services/email.png";
import './email-page.scss';
import { useSelector } from 'react-redux';


function EmailPageContent() {
  const { t, i18n } = useTranslation();


  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

  
  return (
    <div className='calendar-page'>
      <Grid container spacing={3}>
        <Grid 
          item 
          lg={3} 
          md={3} 
          xs={12}
          sx={{
            display: {lg: secondPopupTab ? 'none' : 'block', md: secondPopupTab ? 'none' : 'block'}
          }}
        >
          <div className='email-page_sidebar'>
            <div className='email-page_sidebar_create-event'>
              <button>{t('EMAIL_PAGE.CREATE_MAIL_BUTON')}</button>
            </div>


            <div className='calendar-page_sidebar-section'>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        </ListItemButton>

                        <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                        </ListItemButton>

                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                            <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                            </List>
                        </Collapse>


                    </List>
                </Box>
            </div>
          </div>
        </Grid>

        <Grid
          item
          lg={secondPopupTab ? 12 : 9}
          md={secondPopupTab ? 12 : 9}
          xs={12}
        >
          <div className='email-page_main'>
            <div className='email-page_main'>
             right sidebar
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