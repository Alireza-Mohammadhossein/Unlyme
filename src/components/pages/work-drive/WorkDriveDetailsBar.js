import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';



const WorkDriveDetailsBar = ({ setSearchNote }) => {
    const { t, i18n } = useTranslation();

    
    return (
        <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12} sx={{
              paddingLeft: {
                lg: '15px !important',
                md: '15px !important',
              },
            }}>
                <div className='cloud-page__header_work-drive-page-details_search'>
                    <FormControl>
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
                    </FormControl>
                </div>
            </Grid>
        </Grid>
    )
} 

export default WorkDriveDetailsBar;
