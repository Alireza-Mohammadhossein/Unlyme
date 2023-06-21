import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import viewIcon from '../../../../assets/images/vide-conferencing/view.png';
import handIcon from '../../../../assets/images/vide-conferencing/hand.png';
import shareIcon from '../../../../assets/images/vide-conferencing/share.png';
import moreIcon from '../../../../assets/images/vide-conferencing/more.png';
import phoneIcon from '../../../../assets/images/vide-conferencing/phone.png';
import micOffIcon from '../../../../assets/images/vide-conferencing/mic-off.png';
import micOnIcon from '../../../../assets/images/vide-conferencing/mic-on.png';
import videoOffIcon from '../../../../assets/images/vide-conferencing/video-off.png';
import videoOnIcon from '../../../../assets/images/vide-conferencing/video-on.png';


const MeetingDetailsBar = () => {

    
    return (
        <div className='meeting-page_details'>
            <div className='meeting-page_details-info'>
                <Button variant="contained">Meeting Room</Button>
                <IconButton value="bold" aria-label="bold">
                        <img src={viewIcon} />
                </IconButton>
            </div>
        
            <div className='meeting-page_details-actions'>
                <div className='meeting-page_details-actions-btn'>
                    <IconButton value="bold" aria-label="bold">
                            <img src={handIcon} />
                    </IconButton>
                </div>

                <div className='meeting-page_details-actions-btn'>
                    <IconButton value="bold" aria-label="bold">
                            <img src={micOffIcon} />
                    </IconButton>
                </div>


                <div className='meeting-page_details-actions-btn'>
                    <IconButton value="bold" aria-label="bold">
                            <img src={videoOffIcon} />
                    </IconButton>
                </div>


                <div className='meeting-page_details-actions-btn'>
                    <IconButton value="bold" aria-label="bold">
                            <img src={shareIcon} />
                    </IconButton>
                </div>


                <div className='meeting-page_details-actions-btn'>
                    <IconButton value="bold" aria-label="bold">
                            <img src={moreIcon} />
                    </IconButton>
                </div>

                <div className='meeting-page_details-actions-btn'>
                    <IconButton value="bold" aria-label="bold">
                            <img src={phoneIcon} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
} 

export default MeetingDetailsBar;
