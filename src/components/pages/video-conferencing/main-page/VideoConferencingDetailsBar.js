import React from 'react';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../../redux/app/appsModalSlice';



const VideoConferencingDetailsBar = () => {
    const dispatch = useDispatch();

    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className='cloud-page__header_video-conferencing_details-close'>
                    <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </Grid>
        </Grid>
    )
} 

export default VideoConferencingDetailsBar;
