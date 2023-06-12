import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";



  
  const TasksContent = () => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  
    return (
      <div className="tasks-page">
        <Grid container spacing={3}>

          <Grid
            item
            // lg={secondPopupTab ? 12 : 9}
            // md={secondPopupTab ? 12 : 9}
            xs={12}
          >
            <div className="tasks-page_main">
              <div className="tasks-page_main_list">
                taskscontent
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default TasksContent;