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
import FilterInvoicesPopup from './invoices/popups/FilterInvoicesPopup';
import FilterMoneyPopup from './money/popups/FilterMoneyPopup';
import Modal from '@mui/material/Modal';
import AddNewPopup from './invoices/popups/AddNewPopup';




const InvoiceManagerDetailsBar = ({ setSearchText, activeTab }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();


    const [filterInvoicesPopup, setFilterInvoicesPopup] = useState(false);
    const [filterMoneyPopup, setFilterMoneyPopup] = useState(false);

    useEffect(() => {
      if (filterInvoicesPopup) {
        document.getElementById('root').style.overflow = 'hidden';
        document.getElementById('root').style.height = '100vh';
      } else {
        document.getElementById('root').style.overflow = 'auto';
        document.getElementById('root').style.height = 'auto';
      }
    }, [filterInvoicesPopup]);




    const [addNewPopup, setAddNewPopup] = useState(false);
    const handleOpenAddNewPopup = () => setAddNewPopup(true);
    const handleCloseAddNewPopup = () => setAddNewPopup(false);


    return (
        <Grid container spacing={2}>
            <Grid item lg={4} md={12} xs={12} sx={{display: 'flex'}}>
                <div className='cloud-page__header_invoice-manager-details_search'>
                    <FormControl>
                        <div className="cloud-page__header_invoice-manager-details_search_container">
                            <label><img src={search} /></label>
                            <input
                              className="cloud-page__header_invoice-manager-details_search-input"
                              onChange={(e) => setSearchText(e.target.value)}
                              placeholder={t('EMAIL_PAGE.SEARCH_PLACEHOLDER')}
                            />
                        </div>
                    </FormControl>

                </div>

                <div className='cloud-page__header_invoice-manager-details_filter'>
                  {
                    activeTab === 0 ?
                      <>
                        <IconButton aria-label="filter" onClick={() => {setFilterInvoicesPopup(true)}}>
                            <FilterListIcon />
                        </IconButton>
                        
                        <Drawer anchor='right' open={filterInvoicesPopup} onClose={() => setFilterInvoicesPopup(false)} disableScrollLock = {false} >
                            <FilterInvoicesPopup setFilterInvoicesPopup={setFilterInvoicesPopup} />
                        </Drawer>
                      </>
                    : activeTab === 1 ?
                      <>
                        <IconButton aria-label="filter" onClick={() => {setFilterMoneyPopup(true)}}>
                            <FilterListIcon />
                        </IconButton>
                        
                        <Drawer anchor='right' open={filterMoneyPopup} onClose={() => setFilterMoneyPopup(false)} disableScrollLock = {false} >
                            <FilterMoneyPopup setFilterMoneyPopup={setFilterMoneyPopup} />
                        </Drawer>
                      </>
                    :
                      ''
                  }
                </div>
            </Grid>

            <Grid item lg={8} md={12} xs={12} sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
                <div className='cloud-page__header_invoice-manager-details_add'>

                  {
                    // when invoice tab is active
                    activeTab === 0 ?
                      <>
                        <Button
                          startIcon={<AddIcon />}
                          className="cloud-page__header_invoice-manager-details_add-btn"
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
                          className='cloud-page__header_invoice-manager-details_add-modal'
                        >
                          <AddNewPopup handleCloseAddNewPopup={handleCloseAddNewPopup} />
                        </Modal>
                      </>
                    : 
                    // when money tab is active
                    activeTab === 1 ?
                      <>
                        <Button
                          startIcon={<AddIcon />}
                          className="cloud-page__header_invoice-manager-details_add-btn"
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
                          className='cloud-page__header_invoice-manager-details_add-modal'
                        >
                          <AddNewPopup handleCloseAddNewPopup={handleCloseAddNewPopup} />
                        </Modal>
                      </>
                    : 
                     <>
                      <p>asdasas</p>
                     </>
                  }

                </div>

                <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                    <CloseIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default InvoiceManagerDetailsBar;