import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";



const TasksDetailsBar = () => {
    const { t, i18n } = useTranslation();

    
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12} sx={{
              paddingLeft: {
                lg: '15px !important',
                md: '15px !important',
              },
            }}>
                <div className='cloud-page__header_tasks-page-details_search'>
                  tasks details bar
                </div>
            </Grid>
        </Grid>
    )
} 

export default TasksDetailsBar;
