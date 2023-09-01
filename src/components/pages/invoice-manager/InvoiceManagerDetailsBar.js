import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import search from "../../../assets/images/header/new-icons/search.svg";
import FilterListIcon from '@mui/icons-material/FilterList';
import Drawer from '@mui/material/Drawer';
import FilterInvoicesPopup from './invoices/popups/FilterInvoicesPopup';
import FilterMoneyPopup from './money/popups/FilterMoneyPopup';
import FilterClientsPopup from './clients/popups/FilterClientsPopup';
import FilterProductsPopup from './products/popups/FilterProductsPopup';
import Modal from '@mui/material/Modal';
import AddNewPopup from './invoices/popups/AddNewPopup';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from '@mui/material/ListItemText';
import { toast } from "react-toastify";
import AddNewEarningPopup from './money/popups/AddNewEarningPopup';
import AddNewExpensesPopup from './money/popups/AddNewExpensesPopup';
import AddNewClientsPopup from './clients/popups/AddNewClientsPopup';
import AddNewProductsPopup from './products/popups/AddNewProductsPopup';




const InvoiceManagerDetailsBar = ({ setSearchText, activeTab }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();


  const [filterInvoicesPopup, setFilterInvoicesPopup] = useState(false);
  const [filterMoneyPopup, setFilterMoneyPopup] = useState(false);
  const [filterClientsPopup, setFilterClientsPopup] = useState(false);
  const [filterProductsPopup, setFilterProductsPopup] = useState(false);


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


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleAddNewMoney = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAddNewMoney = () => {
    setAnchorEl(null);
  };

    // start more options
  const options = [
    {
      id: 1,
      text: 'Add Earning',
      clickFunction: function() {
        // setSelectedRowOption(row);
        // handleOpenEditInvoicePopup();
        handleOpenAddNewEarningPopup();
        handleCloseAddNewMoney();
      }
    },
    {
      id: 2,
      text: 'Add Expense',
      clickFunction: function() {
        handleOpenAddNewExpensesPopup();
        handleCloseAddNewMoney();
        // setSelectedRowOption(row);
        // handleOpenSendEmailPopup();
        // handleCloseMoreOptions();
      }
    },
    {
      id: 3,
      text: 'Import Earning',
      clickFunction: function() {
        toast.error('You have clicked on Import earning!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleCloseAddNewMoney();
        // setSelectedRowOption(row);
        // handleOpenAddPaymentPopup()
        // handleCloseMoreOptions();
      }
    },
    {
      id: 4,
      text: 'Import Expense',
      clickFunction: function() {
        toast.error('You have clicked on Import expense!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleCloseAddNewMoney();
        // setSelectedRowOption(row);
        // handleOpenCloneInvoicePopup();
        // handleCloseMoreOptions();
      }
    }
  ]


  // start add payment popup
  const [addNewEarningPopup, setAddNewEarningPopup] = useState(false);
  const handleOpenAddNewEarningPopup = () => {
    setAddNewEarningPopup(true)
  };
  const handleCloseAddNewEarningPopup = () => {
    setAddNewEarningPopup(false)
  };
  // end add payment popup


  // start add expenses popup
  const [addNewExpensesPopup, setAddNewExpensesPopup] = useState(false);
  const handleOpenAddNewExpensesPopup = () => {
    setAddNewExpensesPopup(true)
  };
  const handleCloseAddNewExpensesPopup = () => {
    setAddNewExpensesPopup(false)
  };
  // end add expenses popup



  // start add new client
  const [addNewClientPopup, setAddNewClientPopup] = useState(false);
  const handleOpenAddNewClientPopup = () => setAddNewClientPopup(true);
  const handleCloseAddNewClientPopup = () => setAddNewClientPopup(false);
  // end add new client


  // start add new product
  const [addNewProductsPopup, setAddNewProductsPopup] = useState(false);
  const handleOpenAddNewProductsPopup = () => setAddNewProductsPopup(true);
  const handleCloseAddNewProductsPopup = () => setAddNewProductsPopup(false);
  // end add new product


  return (
    <>
    <div className='cloud-page__header_invoice-manager-details_container'>
      <div>
        <div className='cloud-page__header_invoice-manager-details_search'>
            <FormControl>
                <div className="cloud-page__header_invoice-manager-details_search_container">
                    <label><img src={search} /></label>
                    <input
                      className="cloud-page__header_invoice-manager-details_search-input"
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder={t('INVICE_MANAGER_PAGE.SEARCH_PLACEHOLDER')}
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
                
                <Drawer anchor='right' open={filterInvoicesPopup} onClose={() => setFilterInvoicesPopup(false)} disableScrollLock = {false} className='cloud-page__header_invoice-manager-details_drawer'>
                    <FilterInvoicesPopup setFilterInvoicesPopup={setFilterInvoicesPopup} />
                </Drawer>
              </>
            : activeTab === 1 ?
              <>
                <IconButton aria-label="filter" onClick={() => {setFilterMoneyPopup(true)}}>
                    <FilterListIcon />
                </IconButton>
                
                <Drawer anchor='right' open={filterMoneyPopup} onClose={() => setFilterMoneyPopup(false)} disableScrollLock = {false} className='cloud-page__header_invoice-manager-details_drawer'>
                    <FilterMoneyPopup setFilterMoneyPopup={setFilterMoneyPopup} />
                </Drawer>
              </>
            : activeTab === 2 ?
              <>
                <IconButton aria-label="filter" onClick={() => {setFilterClientsPopup(true)}}>
                    <FilterListIcon />
                </IconButton>
                
                <Drawer anchor='right' open={filterClientsPopup} onClose={() => setFilterClientsPopup(false)} disableScrollLock = {false} className='cloud-page__header_invoice-manager-details_drawer'>
                    <FilterClientsPopup setFilterClientsPopup={setFilterClientsPopup} />
                </Drawer>
              </>
            :
              <>
                <IconButton aria-label="filter" onClick={() => {setFilterProductsPopup(true)}}>
                    <FilterListIcon />
                </IconButton>
                
                <Drawer anchor='right' open={filterProductsPopup} onClose={() => setFilterProductsPopup(false)} disableScrollLock = {false} className='cloud-page__header_invoice-manager-details_drawer'>
                    <FilterProductsPopup setFilterProductsPopup={setFilterProductsPopup} />
                </Drawer>
              </>
          }
        </div>
      </div>


      <div>
        <div className='cloud-page__header_invoice-manager-details_add'>
          {
            // when invoice tab is active
            activeTab === 0 ?
              <>
                <Button
                  // startIcon={<AddIcon />}
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
                  // startIcon={<AddIcon />}
                  className="cloud-page__header_invoice-manager-details_add-btn"
                  aria-label="more"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleAddNewMoney}
                >
                  {t("INVICE_MANAGER_PAGE.ADD_NEW")}
                </Button>

                <Menu
                  className='invoice-manager-page_main_money-tab-row-actions_option-list'
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseAddNewMoney}
                  disableScrollLock={true}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option.id}
                      onClick={() => option.clickFunction()}
                    >
                      <ListItemText>{option.text}</ListItemText>
                    </MenuItem>

                  ))}
                </Menu>
              </>
            : 
            // when clients tab is active
              activeTab === 2 ?
              <>
                <Button
                  // startIcon={<AddIcon />}
                  className="cloud-page__header_invoice-manager-details_add-btn"
                  aria-label="more"
                  id="long-button"
                  aria-haspopup="true"
                  onClick={handleOpenAddNewClientPopup}
                >
                  {t("INVICE_MANAGER_PAGE.ADD_NEW")}
                </Button>


                <Modal
                  open={addNewClientPopup}
                  onClose={handleCloseAddNewClientPopup}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className='cloud-page__header_invoice-manager-details_add-modal'
                >
                  <AddNewClientsPopup handleCloseAddNewClientPopup={handleCloseAddNewClientPopup} />
                </Modal>
              </>
            : 
              <>
                <Button
                  // startIcon={<AddIcon />}
                  className="cloud-page__header_invoice-manager-details_add-btn"
                  aria-label="more"
                  id="long-button"
                  aria-haspopup="true"
                  onClick={handleOpenAddNewProductsPopup}
                >
                  {t("INVICE_MANAGER_PAGE.ADD_NEW")}
                </Button>


                <Modal
                  open={addNewProductsPopup}
                  onClose={handleCloseAddNewProductsPopup}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className='cloud-page__header_invoice-manager-details_add-modal'
                >
                  <AddNewProductsPopup handleCloseAddNewProductsPopup={handleCloseAddNewProductsPopup} />
                </Modal>
              </>
          }

        </div>

        <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
          <CloseIcon />
        </IconButton>

      </div>

    </div>
      


      {/* add new payment modal */}
      <Modal
        open={addNewEarningPopup}
        onClose={() => handleCloseAddNewEarningPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <AddNewEarningPopup handleCloseAddNewEarningPopup={handleCloseAddNewEarningPopup} />
      </Modal>


      {/* add new expenses modal */}
      <Modal
        open={addNewExpensesPopup}
        onClose={() => handleCloseAddNewExpensesPopup()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='cloud-page__header_invoice-manager-details_add-modal'
      >
        <AddNewExpensesPopup handleCloseAddNewExpensesPopup={handleCloseAddNewExpensesPopup} />
      </Modal>
    </>

      
  );
};

export default InvoiceManagerDetailsBar;