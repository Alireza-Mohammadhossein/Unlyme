import react, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import './single-mail.scss';


const SingleMail = ({userIcon, mailFrom, mailTo, mailSubject, mailTitle, mailMessage, setActiveSingleMail}) => {
    return (
        <div className='single-mail'>
            <div className='single-mail__header'>
                <div className='single-mail__header-content'>
                    <div className='single-mail__header-content-icon'>
                        {userIcon ? 
                            <Avatar alt={mailTitle} src={userIcon} />
                        : 
                            <Avatar src={AccountCircleIcon} sx={{ backgroundColor: '#E0EFFF', color: '#4382C4'}} />
                        }
                    </div>
                    
                    <div className='single-mail__header-content-info'>
                        <p className='single-mail__header-content-info_title'>{mailTitle}</p>
                        <p className='single-mail__header-content-info_from'>From: {mailFrom}</p>
                        <p className='single-mail__header-content-info_to'>To: {mailTo}</p>
                    </div>
                </div>

                <div className='single-mail__header-content-actions'>
                    <div className='single-mail__header-content-actions_close'>
                        
                        <IconButton
                            onClick={() => {
                                setActiveSingleMail(false)
                            }}
                        >
                            <ArrowBackIcon  sx={{ color: '#333333' }}/>
                        </IconButton>
                    </div>
                </div>
            </div>

            
            <div className='single-mail__content'>
                <div className='single-mail__content-subject'>
                    <p>
                        <b>Subject: </b>
                        {mailSubject}
                    </p>
                </div>
                
                <div className='single-mail__content-message'>
                    <p>{mailMessage}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default SingleMail;