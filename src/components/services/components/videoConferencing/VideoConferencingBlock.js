import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import icon from '../../../../assets/images/services/video-conference-widget.png';





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
        <>
          {children}
        </>
      )}
    </div>
  );
}

const VideoConferencingBlock = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [timeValue, setTimeValue] = useState(dayjs());



  const content = (
    <div className='services__video-conference'>
      <div className='services__video-conference_container'>
        <Tabs
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          className='services__video-conference_tab'
        >
          <Tab label={t('SERVICES.VIDEO_CONFERENCING.SCHEDULE')} />
          <Tab label={t('SERVICES.VIDEO_CONFERENCING.UPCOMING')} />
        </Tabs>

        <TabPanel value={value} index={0} className='services__video-conference_tabpanel' >
          <FormControl className='services__video-conference_form'>

            <Grid container spacing={4} rowSpacing={1} >
              <Grid item xs={12}>
                <p className='services__video-conference_form_label'>{t('SERVICES.VIDEO_CONFERENCING.CONFERENCE_NAME')}</p>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  className='services__video-conference_form_input'
                  id="conference_name"
                  placeholder={t('SERVICES.VIDEO_CONFERENCING.TYPE_NAME')}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField 
                  className='services__video-conference_form_input'
                  id="conference_topic"
                  placeholder={t('SERVICES.VIDEO_CONFERENCING.TYPE_TOPIC')}
                  variant="outlined"
                  size="small" 
                />
              </Grid>
            </Grid>

            
            <Grid container spacing={4} rowSpacing={1} >
              <Grid item xs={12}>
                <p className='services__video-conference_form_label'>{t('SERVICES.VIDEO_CONFERENCING.WHEN')}</p>
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker defaultValue={dayjs()} disablePast className='services__video-conference_form_date' />   
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    value={timeValue}
                    onChange={(newValue) => setTimeValue(newValue)}
                    format="hh:mm a"
                    className='services__video-conference_form_time'
                    size="small"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

                        
            <Grid container spacing={4} rowSpacing={1} alignItems='center'>
              <Grid item xs={6}>
                <a href='#'>
                  {t('SERVICES.VIDEO_CONFERENCING.COPY_LINK')}
                </a>
              </Grid>
              <Grid item xs={6} textAlign='right'>
                <button className="btn-outline mr-2">{t('SERVICES.VIDEO_CONFERENCING.PLAN_BUTTON')}</button>
                <button className="btn">{t('SERVICES.VIDEO_CONFERENCING.BEGIN_BUTTON')}</button>
              </Grid>
            </Grid>
          </FormControl>

        </TabPanel>
        
        <TabPanel value={value} index={1} className='services__video-conference_tabpanel'>

        </TabPanel>
        
      </div>
    </div>
  );

  return (
    <CloudBlock
      title={t('SERVICES.VIDEO_CONFERENCING.TITLE')}
      subtitle={t('SERVICES.VIDEO_CONFERENCING.SUBTITLE')}
      content={content}
      infoContent="s"
      iconName="services/tasks"
      icon={icon}
    />
  );
};

export default VideoConferencingBlock;
