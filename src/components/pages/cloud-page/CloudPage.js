import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';




const CloudPage = ({
  title,
  content,
  icon,
}) => {


  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="cloud-page" id='cloud-page' >
      <div className="cloud-page__header">
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} xs={12} className='cloud-page__header_share'>
            <div className='cloud-page__header_share_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_share_title">
              {title}
            </div>
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <div className='cloud-page__header_details'>
              <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>


      </div>
      <div className="cloud-page__content">{content}</div>
    </div>
  );
};

export default CloudPage;
