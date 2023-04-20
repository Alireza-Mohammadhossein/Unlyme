import React, { useState } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import {
  CHAT_DIALOG_STATUS_ACTIVE,
  CHAT_DIALOG_STATUS_CLOSED,
  CHAT_DIALOG_STATUS_DEFERRED,
  chatDialogs,
  clientData,
} from '../../mocks/mocks';


const OnlineConsultant = () => {
  const { t } = useTranslation();

  const menuOptions = [
    { id: null, label: 'All dialogs', icon: 'folder' },
    { id: CHAT_DIALOG_STATUS_ACTIVE, label: 'Active', icon: 'chat_bubble_outline' },
    { id: CHAT_DIALOG_STATUS_DEFERRED, label: 'Deferred', icon: 'archive' },
    { id: CHAT_DIALOG_STATUS_CLOSED, label: 'Closed', icon: 'close' },
  ];

  const [selectedDialog, setSelectedDialog] = useState(chatDialogs[0]);
  const [selectedStatus, setSelectedStatus] = useState(menuOptions[0].id);

  const chatDialogsFiltered = chatDialogs.filter(dialog => dialog.status === selectedStatus || selectedStatus === null);

  return (
    <div className="container">
      <h1>Online Chat</h1>
      <div className="row">
        <div className="cloud-page chat__menu">
          {menuOptions.map((option, index) => (
            <React.Fragment key={option.label}>
              <div
                onClick={() => setSelectedStatus(option.id)}
                className={`chat__menu_option ${option.id === selectedStatus ? 'chat__menu_option--active' : ''}`}
              >
                <div className="chat__menu_option-icon-container">
                  <i className='menu__row_icon material-icons'>
                    {option.icon}
                  </i>
                </div>
                <div>{option.label}</div>
              </div>
              {index !== menuOptions.length - 1 && <div className="chat__menu_separator" />}
            </React.Fragment>
          ))}
        </div>
        <div className="site-horizontal-separator" />
        <div className="cloud-page chat__dialog-list">
          <div className="cloud-page__header">
            <div className="chat__dialog-list_search-container">
              <span className="mdi mdi-search" />
              <input className="site-input chat__dialog-list_search" placeholder="Enter your search query" />
            </div>
          </div>
          <div className={`cloud-page__content ${chatDialogsFiltered.length === 0 ? 'chat__dialog-list_gap' : ''}`}>
            {chatDialogsFiltered.map((dialog, index) => (
              <React.Fragment key={dialog.id}>
                <div
                  className="services__online-consultant_dialog chat__dialog-list_item"
                  onClick={() => setSelectedDialog(dialog)}
                  style={index === 0 ? { paddingTop: 0 } : null}
                >
                  <span className="chat__dialog-list_item-avatar">
                    {index === 0 ? '🌽' : ''}
                    {index === 1 ? '🌻' : ''}
                    {index === 2 ? '🌾' : ''}
                  </span>
                  <div className="services__online-consultant_dialog-header">
                    <div className="">Client {dialog.id}</div>
                    <div className="services__online-consultant_dialog-date">{moment.unix(dialog.date).format('DD.MM.Y HH:mm')}</div>
                  </div>
                  <div className="services__online-consultant_dialog-body">{dialog.message}</div>
                </div>
                {index !== chatDialogs.length - 1 && <div className="chat__dialog-list_separator" />}
              </React.Fragment>
            ))}
            {chatDialogsFiltered.length === 0 && <span>No dialogs yet</span>}
          </div>
        </div>
        <div className="site-horizontal-separator" />
        <div className="chat__dialog-block">
          <div className="cloud-page">
            <div className="cloud-page__header">
              <span className="cloud-page__header_title">Client {selectedDialog.id}</span>
              <div className="chat__dialog-block_btn-container">
                <button className="btn" disabled>
                  <i className='menu__row_icon material-icons'>
                      archive
                  </i>
                  &nbsp; Put off
                </button>
                <button className="btn" disabled>
                  <i className='menu__row_icon material-icons'>
                      chat_bubble_outline
                  </i>
                  &nbsp; Add to active
                </button>
              </div>
            </div>
            <div className="cloud-page__content chat__dialog-block_window">
              {selectedDialog.messages.map(message => (
                <div
                  key={message.id}
                  className={`chat__dialog-block_message ${
                    message.user_id === clientData.user_id ? 'chat__dialog-block_message--my' : ''
                  }`}
                >
                  <div className="text">{message.text}</div>
                  <div className="note chat__dialog-block_message-date">{moment.unix(message.created_at).format('DD.MM.Y HH:mm')}</div>
                </div>
              ))}
              {selectedDialog.messages.length === 0 && (
                <div className="chat__dialog-block_gap">
                  <span>No one message here</span>
                </div>
              )}
            </div>
            <div className="chat__dialog-block_compose-form">
              <input className="site-input" placeholder="Write a message..." />
              <button className="btn btn--orange">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultant;
