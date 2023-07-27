import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import { useDispatch} from 'react-redux';
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




const NotesDetailsBar = ({ setSearchNote }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();



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


            <Grid item lg={2} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_actions left'>
                    <ToggleButtonGroup
                        value={viewMode}
                        exclusive
                        onChange={handleViewMode}
                        aria-label="text alignment"
                        className='cloud-page__header_notes-details_actions_toggler'
                    >
                        <ToggleButton value="list" aria-label="list view">
                            {/* <img src={listView} /> */}
                            <FormatListBulletedOutlinedIcon />
                        </ToggleButton>
                        <ToggleButton value="grid" aria-label="grid view">
                            {/* <img src={gridView} /> */}
                            <GridViewOutlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>

            <Grid item lg={2} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_actions center'>
                    <ButtonGroup variant="outlined" aria-label="text formatting">
                        <IconButton value="bold" aria-label="bold">
                            {/* <img src={boldFormat} /> */}
                            <TextFieldsOutlinedIcon />
                        </IconButton>
                        <IconButton value="bullet" aria-label="bullet">
                            {/* <img src={bulletFormat} /> */}
                            <ChecklistOutlinedIcon />
                        </IconButton>
                        <IconButton value="table" aria-label="table">
                            {/* <img src={tableFormat} /> */}
                            <TableChartOutlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                </div>
            </Grid>
            
            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_actions center'>
                    <ButtonGroup variant="outlined" aria-label="actions">
                        <IconButton value="bold" aria-label="bold">
                            {/* <img src={imageFormat} /> */}
                            <InsertPhotoOutlinedIcon />
                        </IconButton>
                        <IconButton value="bullet" aria-label="bullet">
                            {/* <img src={lockFormat} /> */}
                            <LockOutlinedIcon />
                        </IconButton>
                        <IconButton value="table" aria-label="table">
                            {/* <img src={shareFormat} /> */}
                            <IosShareOutlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                </div>
            </Grid>

            <Grid item lg={5} md={6} xs={12} sx={{display: 'flex'}}>
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
            </Grid>
        </Grid>
    )
} 

export default NotesDetailsBar;
