import React from 'react';
import { useTranslation } from "react-i18next";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



const EmailDetailsBar = ({ setSearchText }) => {
    const { t, i18n } = useTranslation();


    return (
        <Grid container spacing={2}>
            <Grid item lg={4} md={12} xs={12}>
                <div className='cloud-page__header_email-details_search'>
                    <FormControl>
                        <Input
                        className='cloud-page__header_email-details_search-input'
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder={t('EMAIL_PAGE.SEARCH_PLACEHOLDER')}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{color: '#3C3C43B2'}} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </div>
            </Grid>

            <Grid item lg={8} md={12} xs={12}>
                <div className='cloud-page__header_email-details_actions'>
                    <Button variant="contained" startIcon="R" className='cloud-page__header_email-details_actions-btn'>
                        Summary Letter
                    </Button>
                    <Button variant="contained" startIcon="W" className='cloud-page__header_email-details_actions-btn'>
                        Write Reply
                    </Button>
                    <Button variant="contained" startIcon="S" className='cloud-page__header_email-details_actions-btn'>
                        Smart Search
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default EmailDetailsBar;