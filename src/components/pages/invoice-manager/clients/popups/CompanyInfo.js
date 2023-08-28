import React, { useState } from 'react';
import './clients-popups.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import helpIcon from '../../../../../assets/images/invoice-manager/help-circle.svg';





const CompanyInfoPopup = ({ handleCloseCompanyInfoPopup, data}) => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [alert, setAlert] = useState(true);




  return (
    <div className='clients-companyinfopopup'>
      {/* <div className='clients-companyinfopopup-header'>
        <div className='clients-companyinfopopup-header-title'>
        </div>

        <div className='clients-companyinfopopup-header-btn'>
          <IconButton onClick={handleCloseCompanyInfoPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div> */}

      <div className='clients-companyinfopopup-content'>

        <div className='clients-companyinfopopup-content-logo'>
          <img src={data.companyLogo} alt={data.company} />
        </div>

        <div className='clients-companyinfopopup-content-tabs'>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} centered variant="fullWidth">
                <Tab label="Client info" value="1" className='clients-companyinfopopup-content-tabs-btn'/>
                <Tab label="Projects & Financial" value="2" className='clients-companyinfopopup-content-tabs-btn'/>
                <Tab label="Address" value="3" className='clients-companyinfopopup-content-tabs-btn'/>
                <Tab label="Other" value="4" className='clients-companyinfopopup-content-tabs-btn'/>
              </TabList>
            </Box>

            <TabPanel value="1" className='clients-companyinfopopup-content-tab'>
              <div className='clients-companyinfopopup-content-tab-info'>
                <div className='clients-companyinfopopup-content-tab-info-item'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Client name
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle'>
                    {data.company}
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-info-item'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Telephone
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle'>
                    (310)833-3145
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-info-item'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Email
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle linked'>
                    <a href='mailto:info@company.com'>info@company.com</a>
                  </div>
                </div>
                
                <div className='clients-companyinfopopup-content-tab-info-item owner'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Account owner
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle avatar'>
                    <Avatar alt={data.owner} src={data.ownerImage} /> {data.owner}
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-info-item status'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Account status
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle'>
                    <span className={data.status ? 'active' : 'notactive'}>
                      {data.status ? 'Active' : 'Not active'}
                    </span>
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-info-item category'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Category
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle'>
                    <span className='category'>
                      {data.category}
                    </span>
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-info-item tags'>
                  <div className='clients-companyinfopopup-content-tab-info-item-title'>
                    Tags
                  </div>

                  <div className='clients-companyinfopopup-content-tab-info-item-subtitle'>
                    {data.tags.map((tag) => (
                        <Chip label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
            
            
            <TabPanel value="2" className='clients-companyinfopopup-content-tab'>
              <div className='clients-companyinfopopup-content-tab-project'>
                <table className='clients-companyinfopopup-content-tab-project-table'>
                  <tbody className='clients-companyinfopopup-content-tab-project-table-body'>
                    <tr className='clients-companyinfopopup-content-tab-project-table-body-tr'>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-title'>Invoices</td>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-value'>{data.invoicesAmount}</td>
                    </tr>

                    <tr className='clients-companyinfopopup-content-tab-project-table-body-tr'>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-title'>Payments</td>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-value'>{data.payments}</td>
                    </tr>

                    <tr className='clients-companyinfopopup-content-tab-project-table-body-tr'>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-title'>Completed Projects</td>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-value'>{data.projectsNumber}</td>
                    </tr>

                    <tr className='clients-companyinfopopup-content-tab-project-table-body-tr'>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-title'>Open Projects</td>
                        <td className='clients-companyinfopopup-content-tab-project-table-body-tr-value'>{data.projectsNumber}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
            
            
            <TabPanel value="3" className='clients-companyinfopopup-content-tab'>
              <div className='clients-companyinfopopup-content-tab-address'>
                <div className='clients-companyinfopopup-content-tab-address-item'>
                  2262 Sunnyside Ridge Rd
                </div>
                
                <div className='clients-companyinfopopup-content-tab-address-item'>
                  Rancho Palos Verdes
                </div>

                <div className='clients-companyinfopopup-content-tab-address-item'>
                  California(CA),
                </div>

                <div className='clients-companyinfopopup-content-tab-address-item'>
                  90275
                </div>

                <div className='clients-companyinfopopup-content-tab-address-item'>
                  United States
                </div>
              </div>
            </TabPanel>
            
            
            <TabPanel value="4" className='clients-companyinfopopup-content-tab'>
              <div className='clients-companyinfopopup-content-tab-other'>
                <div className='clients-companyinfopopup-content-tab-other-item'>
                  <div className='clients-companyinfopopup-content-tab-other-item-title'>
                    VAT
                  </div>

                  <div className='clients-companyinfopopup-content-tab-other-item-subtitle'>
                    This is a custom data field
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-other-item'>
                  <div className='clients-companyinfopopup-content-tab-other-item-title'>
                    Last project
                  </div>

                  <div className='clients-companyinfopopup-content-tab-other-item-subtitle'>
                    {data.date}
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-other-item'>
                  <div className='clients-companyinfopopup-content-tab-other-item-title'>
                    Comments
                  </div>

                  <div className='clients-companyinfopopup-content-tab-other-item-subtitle'>
                    The last project was delivered on time.
                  </div>
                </div>
                
                <div className='clients-companyinfopopup-content-tab-other-item'>
                  <div className='clients-companyinfopopup-content-tab-other-item-title'>
                    Projects type
                  </div>

                  <div className='clients-companyinfopopup-content-tab-other-item-subtitle'>
                    Web design
                  </div>
                </div>

                <div className='clients-companyinfopopup-content-tab-other-item alert'>
                {
                  alert ? 
                    <Alert
                      icon={<img src={helpIcon} />}
                      variant="outlined"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setAlert(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      <AlertTitle>Info</AlertTitle>
                      These are custom field. You can change them or <a href='#'>create your own.</a>
                    </Alert>
                  :
                    ''
                }
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </div>

      </div>

    </div>



  );
}


export default CompanyInfoPopup;
