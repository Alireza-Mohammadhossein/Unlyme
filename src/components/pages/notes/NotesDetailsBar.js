import React, { useState } from 'react';
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



const NotesDetailsBar = ({ setSearchNote }) => {

    const [viewMode, setViewMode] = useState('list');
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);


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
            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_view-mode'>
                    <ToggleButtonGroup
                        value={viewMode}
                        exclusive
                        onChange={handleViewMode}
                        aria-label="text alignment"
                        className='cloud-page__header_notes-details_view-mode_toggler'
                    >
                        <ToggleButton value="list" aria-label="list view">
                            <img src={listView} />
                        </ToggleButton>
                        <ToggleButton value="grid" aria-label="grid view">
                            <img src={gridView} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_format'>
                    <ButtonGroup variant="outlined" aria-label="text formatting">
                        <IconButton value="bold" aria-label="bold">
                            <img src={boldFormat} />
                        </IconButton>
                        <IconButton value="bullet" aria-label="bullet">
                            <img src={bulletFormat} />
                        </IconButton>
                        <IconButton value="table" aria-label="table">
                            <img src={tableFormat} />
                        </IconButton>
                    </ButtonGroup>
                </div>
            </Grid>
            
            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_actions'>
                    <ButtonGroup variant="outlined" aria-label="actions">
                        <IconButton value="bold" aria-label="bold">
                            <img src={imageFormat} />
                        </IconButton>
                        <IconButton value="bullet" aria-label="bullet">
                            <img src={lockFormat} />
                        </IconButton>
                        <IconButton value="table" aria-label="table">
                            <img src={shareFormat} />
                        </IconButton>
                    </ButtonGroup>
                </div>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
                <div className='cloud-page__header_notes-details_search'>
                    <FormControl>
                        <Input
                        className='cloud-page__header_notes-details_search-input'
                        onChange={(e) => setSearchNote(e.target.value)}
                        placeholder='Search notes...'
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{color: '#3C3C43B2'}} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </div>
            </Grid>
        </Grid>
    )
} 

export default NotesDetailsBar;
