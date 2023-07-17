import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import search from "../../../assets/images/header/new-icons/search.png";
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import Drawer from '@mui/material/Drawer';
import FilterPopup from './popups/FilterPopup';
import Modal from '@mui/material/Modal';
import AddNewPopup from './popups/AddNewPopup';




const InvoiceManagerDetailsBar = ({ setSearchText }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();


    const [filterPopup, setFilterPopup] = useState(false);

    useEffect(() => {
      if (filterPopup) {
          console.log('true', filterPopup)
        document.getElementById('root').style.overflow = 'hidden';
        document.getElementById('root').style.height = '100vh';
      } else {
        console.log('false', filterPopup)
        document.getElementById('root').style.overflow = 'auto';
        document.getElementById('root').style.height = 'auto';
      }
    }, [filterPopup]);




    const [addNewPopup, setAddNewPopup] = useState(false);
    const handleOpenAddNewPopup = () => setAddNewPopup(true);
    const handleCloseAddNewPopup = () => setAddNewPopup(false);


    return (
        <Grid container spacing={2}>
            <Grid item lg={4} md={12} xs={12} sx={{display: 'flex'}}>
                <div className='cloud-page__header_invoice-details_search'>
                    <FormControl>
                        <div className="cloud-page__header_invoice-details_search_container">
                            <label><img src={search} /></label>
                            <input
                              className="cloud-page__header_invoice-details_search-input"
                              onChange={(e) => setSearchText(e.target.value)}
                              placeholder={t('EMAIL_PAGE.SEARCH_PLACEHOLDER')}
                            />
                        </div>
                    </FormControl>

                </div>

                <div className='cloud-page__header_invoice-details_filter'>
                    <IconButton aria-label="filter" onClick={() => setFilterPopup(true)}>
                        <FilterListIcon />
                    </IconButton>
                    
                    <Drawer anchor='right' open={filterPopup} onClose={() => setFilterPopup(false)} disableScrollLock = {false} >
                        <FilterPopup setFilterPopup={setFilterPopup} />
                    </Drawer>
                </div>
            </Grid>

            <Grid item lg={8} md={12} xs={12} sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
                <div className='cloud-page__header_invoice-details_add'>
                  <Button
                    startIcon={<AddIcon />}
                    className="cloud-page__header_invoice-details_add-btn"
                    aria-label="more"
                    id="long-button"
                    aria-haspopup="true"
                    onClick={handleOpenAddNewPopup}
                  >
                    {t("INVICE_MANAGER_PAGE.ADD_NEW")}
                  </Button>


                  <Modal
                    open={addNewPopup}
                    onClose={handleCloseAddNewPopup}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='cloud-page__header_invoice-details_add-modal'
                  >
                    <AddNewPopup handleCloseAddNewPopup={handleCloseAddNewPopup} />
                  </Modal>
                </div>

                <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                    <CloseIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default InvoiceManagerDetailsBar;