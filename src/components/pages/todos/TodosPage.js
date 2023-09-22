import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import icon from "../../../assets/images/my-services/todos.png";
import "./todos-page.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import TodosPageContent from './TodosPageContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import search from "../../../assets/images/header/new-icons/search.svg";






const TodosPage = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  return (
    <div className="page-container todos">
      <div className="cloud-page">
        <div className="cloud-page__header">

          <div className="cloud-page__header-todos">
            <div className='cloud-page__header-todos_info'>
              <div className='cloud-page__header-todos_info-icon'>
                <img src={icon} />
              </div>

              <div className="cloud-page__header-todos_info-title">
                {t("TODOS_PAGE.TITLE")}
              </div>

              <div className='cloud-page__header-todos_info-search'>
                <FormControl>
                  <div className="cloud-page__header-todos_info-search_container">
                    <label><img src={search} /></label>
                    <input
                      className="cloud-page__header-todos_info-search-input"
                      // onChange={(e) => setSearchNote(e.target.value)}
                      placeholder={t('NOTES_PAGE.SEARCH_PLACEHOLDER')}
                    />
                  </div>
                </FormControl>
              </div>
            </div>

            <div className='cloud-page__header-todos_close'>
              <ButtonGroup variant="outlined" aria-label="actions">
                <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                    <CloseIcon />
                </IconButton>
              </ButtonGroup>
            </div>
          </div>

        </div>
        <div className="cloud-page__content">
          <TodosPageContent />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;

