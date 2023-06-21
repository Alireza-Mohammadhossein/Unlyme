import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../assets/images/my-services/tasks.png"
import "./tasks-page.scss";
import TasksDetailsBar from './TasksDetailsBar';
import TasksContent from './TasksContent';





const TasksPage = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className="page-container">
        <div className="cloud-page tasks-cloud-page">
          <div className="cloud-page__header">
            <Grid container spacing={2}>  
              <Grid item lg={3} md={3} xs={12} className='cloud-page__header_share'>
                <div className='cloud-page__header_share_icon'>
                  <img src={icon} />
                </div>

                <div className="cloud-page__header_share_title">
                  {t("TASKS_PAGE.TITLE")}
                </div>
              </Grid>
              <Grid item lg={9} md={9} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                <div className='cloud-page__header_tasks-page_details'>
                  <TasksDetailsBar />
                </div>
              </Grid>
            </Grid>


          </div>
          <div className="cloud-page__content">

              <TasksContent />

          </div>
        </div>
    </div>
  );
};

export default TasksPage;


