import React from 'react';
import { useTranslation } from 'react-i18next';
import { ASSETS_URL } from '../../../types';
import Grid from '@mui/material/Grid';


const CloudPage = ({
  title,
  details,
  content,
  icon,
}) => {


  const { t } = useTranslation();

  return (
    <div className="cloud-page" id='cloud-page'>
      <div className="cloud-page__header">
            <div className='cloud-page__header_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_title">
              {title}
            </div>
            <div className='cloud-page__header_details'>
              {details}
            </div>

        {/* <Grid container spacing={2}>
          <Grid item lg={3} md={3} xs={12}>
            <div className='cloud-page__header_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_title">
              {title}
            </div>
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <div className='cloud-page__header_details'>
              {details}
            </div>
          </Grid>
        </Grid> */}


      </div>
      <div className="cloud-page__content">{content}</div>
    </div>
  );
};

export default CloudPage;
