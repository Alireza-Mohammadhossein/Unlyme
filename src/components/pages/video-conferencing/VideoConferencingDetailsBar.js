import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";



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
