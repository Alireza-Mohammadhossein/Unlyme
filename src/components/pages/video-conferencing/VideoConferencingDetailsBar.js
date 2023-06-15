import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import listView from '../../../assets/images/notepage/list.png'; 
import gridView from '../../../assets/images/notepage/grid.png';
import boldFormat from '../../../assets/images/notepage/font.png';
import bulletFormat from '../../../assets/images/notepage/bullet.png';
import tableFormat from '../../../assets/images/notepage/table.png';
import imageFormat from '../../../assets/images/notepage/image.png';
import lockFormat from '../../../assets/images/notepage/lock.png';
import shareFormat from '../../../assets/images/notepage/share.png';



const VideoConferencingDetailsBar = () => {
    const { t, i18n } = useTranslation();

    
    return (
        <Grid container spacing={2}>
            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_video-conferencing-details_view-mode'>

                </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_video-conferencing-details_format'>

                </div>
            </Grid>
            
            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_video-conferencing-details_actions'>

                </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_video-conferencing-details_search'>

                </div>
            </Grid>
        </Grid>
    )
} 

export default VideoConferencingDetailsBar;
