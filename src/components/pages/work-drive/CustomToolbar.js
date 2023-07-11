import React from 'react';
import { FileToolbar } from 'chonky';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';



const CustomToolbar = () => {
    const dispatch = useDispatch();

    
    return (
        <div className='cloud-page__header_work-drive-page-details_search-toolbar'>
                <FileToolbar />
                <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())} className='cloud-page__header_work-drive-page-details_search-toolbar-close'>
                    <CloseIcon />
                </IconButton>
        </div>
    )
} 

export default CustomToolbar;
