import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import CloseIcon from '@mui/icons-material/Close';
import search from "../../../assets/images/header/new-icons/search.png";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import { useSelector, useDispatch } from "react-redux";
import aaIcon from "../../../assets/images/notepage/new/Aa.svg";
import bulletIcon from "../../../assets/images/notepage/new/bullet-list.svg";
import copyIcon from "../../../assets/images/notepage/new/copy.svg";
import gridIcon from "../../../assets/images/notepage/new/grid-view.svg";
import listIcon from "../../../assets/images/notepage/new/list-view.svg";
import lockIcon from "../../../assets/images/notepage/new/lock.svg";
import shareIcon from "../../../assets/images/notepage/new/share.svg";
import tableIcon from "../../../assets/images/notepage/new/table.svg";
import trashIcon from "../../../assets/images/notepage/new/trash.svg";





const NotesDetailsBar = ({ setSearchNote }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



    const [viewMode, setViewMode] = useState('list');
    const [formats, setFormats] = useState(() => ['bold', 'italic']);


    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
  
    const handleViewMode = (event, newView) => {
      if (newView !== null) {
        setViewMode(newView);
      }
    };

    
    return (

        <Grid container spacing={2}>
            {/* <Grid item lg={2} md={6} xs={12}>
  
            </Grid> */}

            {/* <Grid item lg={6} md={6} xs={12}>

            </Grid> */}
            
            <Grid item lg={12} md={12} xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
                <div
                    className='cloud-page__header_notes-details_actions-left'
                    style={{marginRight: secondPopupTab ? '30px' : '218px'}}
                >
                    <ButtonGroup variant="outlined" aria-label="text formatting">
                        <IconButton value="bold" aria-label="bold">
                            <img src={aaIcon} />
                            {/* <TextFieldsOutlinedIcon /> */}
                        </IconButton>
                        <IconButton value="bullet" aria-label="bullet">
                            <img src={bulletIcon} />
                            {/* <ChecklistOutlinedIcon /> */}
                        </IconButton>
                        <IconButton value="table" aria-label="table">
                            <img src={tableIcon} />
                            {/* <TableChartOutlinedIcon /> */}
                        </IconButton>
                    </ButtonGroup>
                </div>

                <div className='cloud-page__header_notes-details_actions-right'>
                    <div className='cloud-page__header_notes-details_actions-right-btns'>
                        <ButtonGroup variant="outlined" aria-label="actions">
                            <IconButton value="bold" aria-label="bold">
                                <img src={copyIcon} />
                                {/* <InsertPhotoOutlinedIcon /> */}
                            </IconButton>
                            <IconButton value="bullet" aria-label="bullet">
                                <img src={lockIcon} />
                                {/* <LockOutlinedIcon /> */}
                            </IconButton>
                            <IconButton value="table" aria-label="table">
                                <img src={shareIcon} />
                                {/* <IosShareOutlinedIcon /> */}
                            </IconButton>
                        </ButtonGroup>
                    </div>
                </div>

                <div className='cloud-page__header_notes-details_search_wrapper'>
                    <div className='cloud-page__header_notes-details_search'>
                        <FormControl>
                            <div className="cloud-page__header_notes-details_search_container">
                                <label><img src={search} /></label>
                                <input
                                  className="cloud-page__header_notes-details_search-input"
                                  onChange={(e) => setSearchNote(e.target.value)}
                                  placeholder={t('NOTES_PAGE.SEARCH_PLACEHOLDER')}
                                />
                            </div>
                        </FormControl>
                    </div>

                    <div className='cloud-page__header_notes-details_close'>
                        <ButtonGroup variant="outlined" aria-label="actions">
                            <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                                <CloseIcon />
                            </IconButton>
                        </ButtonGroup>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
} 

export default NotesDetailsBar;
