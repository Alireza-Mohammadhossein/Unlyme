import React from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { FileNavbar, FileToolbar } from 'chonky';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import CustomToolbar from './CustomToolbar';




const WorkDriveDetailsBar = () => {
    const dispatch = useDispatch();

    
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12} sx={{
              paddingLeft: {
                lg: '15px !important',
                md: '15px !important',
              },
            }}>
                <div className='cloud-page__header_work-drive-page-details_search'>
                    {/* <FormControl>
                        <Input
                        className='cloud-page__header_work-drive-page-details_search-input'
                        onChange={(e) => setSearchNote(e.target.value)}
                        placeholder={t('WORK_DRIVE_PAGE.SEARCH_PLACEHOLDER')}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{color: '#3C3C43B2'}} />
                            </InputAdornment>
                        }
                        />
                    </FormControl> */}

                    <div>
                        {/* <FileNavbar />
                        <FileToolbar /> */}
                    </div>

                    <div>
                        <CustomToolbar />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
} 

export default WorkDriveDetailsBar;
