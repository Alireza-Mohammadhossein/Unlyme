import React from 'react';
import { useTranslation } from "react-i18next";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import search from "../../../assets/images/header/new-icons/search.png";



const EmailDetailsBar = ({ setSearchText }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


    return (
        <Grid container spacing={2}>
            <Grid
                item
                xl={4}
                lg={4}
                md={12}
                xs={12}
            >
                <div className='cloud-page__header_email-details_search'>
                    <FormControl>
                        <div className="cloud-page__header_email-details_search_container">
                            <label><img src={search} /></label>
                            <input
                              className="cloud-page__header_email-details_search-input"
                              onChange={(e) => setSearchText(e.target.value)}
                              placeholder={t('EMAIL_PAGE.SEARCH_PLACEHOLDER')}
                            />
                        </div>
                    </FormControl>

                </div>
            </Grid>

            <Grid
                item
                xl={secondPopupTab ? 0 : 2}
                lg={secondPopupTab ? 0 : 2}
                md={secondPopupTab ? 0 : 2}
                xs={12}
                sx={{display: secondPopupTab ? 'none' : 'block'}}
            >
            </Grid>

            <Grid
                item
                xl={secondPopupTab ? 8 : 6}
                lg={secondPopupTab ? 8 : 6}
                md={secondPopupTab ? 8 : 10}
                xs={12}
                sx={{ display: 'flex', gap: '5px' }}
            >
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

                <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                    <CloseIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default EmailDetailsBar;