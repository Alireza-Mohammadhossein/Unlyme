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
import { invoicesCategory } from '../../../mocks/mocks';
import icon from "../../../assets/images/my-services/invoice-manager.png";
import './invoice-manager-page.scss';
import { useSelector } from 'react-redux';
import InvoiceManagerTable from './table/InvoiceManagerTable';
import { invoices } from '../../../mocks/mocks';
import InvoiceManagerDetailsBar from './InvoiceManagerDetailsBar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';



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


const InvoiceManagerContent = () => {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);




  // start showing invoice category tab
  const [showInvoice, setShowInvoice] = useState(0);
  const handleShowInvoice = (event, newValue) => {
    if (event.target === event.currentTarget) {
      setShowInvoice(newValue);
      // setNewMailToggler(false);

    }
  };
  // end showing chat tab

  
  // start handle category show
  const [showCategory, setShowCategory] = useState(true);
  // end handle category show
  
  // start handle single invoice show
  const [activeSingleInvoice, setActiveSingleInvoice] = useState(false);
  // end handle single invoice show
  
  const [searchText, setSearchText] = useState('');


  
  return (

  <div className="cloud-page">
      <div className="cloud-page__header">
        <Grid container spacing={2}>
          <Grid item xl={2} lg={3} md={3} xs={12} className='cloud-page__header_share'>
            <div className='cloud-page__header_share_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_share_title">
              {t("INVICE_MANAGER_PAGE.TITLE")}
            </div>
          </Grid>
          <Grid item xl={10} lg={9} md={9} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
            <div className='cloud-page__header_invoice-details'>
              <InvoiceManagerDetailsBar setSearchText={setSearchText} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="cloud-page__content">
        <div className='invoice-page'>
          <Grid container spacing={3}>
            <Grid 
              item 
              xl={activeSingleInvoice ? 0 : 2} 
              lg={activeSingleInvoice ? 0 : 3} 
              md={activeSingleInvoice ? 0 : 3} 
              xs={12}
              sx={{
                display: {lg: secondPopupTab || activeSingleInvoice ? 'none' : 'block', md: secondPopupTab || activeSingleInvoice ? 'none' : 'block'},
              }}
            >
              <div className='invoice-page_sidebar'>
                <div className='invoice-page_sidebar_create-event'>
                  <Button
                    startIcon={<AddIcon />}
                    className="invoice-page_sidebar_create-event_btn"
                    aria-label="more"
                    id="long-button"
                    aria-haspopup="true"
                    // onClick={handleCreateNote}
                  >
                    {t("INVICE_MANAGER_PAGE.ADD_NEW")}
                  </Button>
                </div>

                <div className='invoice-page_sidebar-section'>
                  <div className='invoice-page_sidebar-section_category'>
                    <Tabs
                      orientation="vertical"
                      // variant="scrollable"
                      value={showInvoice}
                      onChange={handleShowInvoice}
                      aria-label="Vertical tabs example"
                      className='invoice-page_sidebar-section_category-list'
                    >
                      {invoicesCategory.map((item, index) => (
                        <Tab
                          className='invoice-page_sidebar-section_category-item'
                          key={item.id}
                          {...a11yProps(index)}
                          component={'div'}
                          label={
                            <>
                              <div className='invoice-page_sidebar-section_category-item_content'>
                                {/* <Button variant="outlined" startIcon={<InboxOutlinedIcon />}>
                                  {item.title}
                                </Button> */}
                                {
                                  item.title === 'Invoices' ? <FeedOutlinedIcon/> :
                                  item.title === 'Money' ? <CreditCardIcon /> :
                                  item.title === 'Clients' ? <PeopleAltIcon /> :
                                  <CheckBoxOutlineBlankIcon />
                                }
                                 {/* <InboxOutlinedIcon/> */}
                                  {/* <img src={ showMail !== index ? item.grayIcon : item.blueIcon} alt={item.title} className='invoice-page_sidebar-section_category-item_content-icon' /> */}
                                  <p className='invoice-page_sidebar-section_category-item_content-title'>{item.title}</p>
                              </div>
                              
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
              xl={secondPopupTab || activeSingleInvoice ? 12 : 10}
              lg={secondPopupTab || activeSingleInvoice ? 12 : 9}
              md={secondPopupTab || activeSingleInvoice ? 12 : 9}
              xs={12}
            >
              <div className='invoice-page_main'>
                <div className='invoice-page_main_invoice'>
                  <TabPanel value={showInvoice} index={0} className='invoice-page_main_invoice-tab'>
                    <InvoiceManagerTable
                      activeSingleInvoice={activeSingleInvoice}
                      setActiveSingleInvoice={setActiveSingleInvoice}
                      invoices={invoices}
                      searchText={searchText}
                      setSearchText={setSearchText}
                    />
                  </TabPanel>
                  
                  <TabPanel value={showInvoice} index={1}>
                    drafts
                  </TabPanel>
                  
                  <TabPanel value={showInvoice} index={2}>
                    sent
                  </TabPanel>
                  
                  <TabPanel value={showInvoice} index={3}>
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


const InvoiceManager = () => {
  return (
    <div className="page-container">
      <InvoiceManagerContent />
    </div>
  )
}

export default InvoiceManager;