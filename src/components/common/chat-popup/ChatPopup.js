import * as React from 'react';
import DivInfoPortal from '../div-info-portal/DivInfoPortal';
import NewMobileModal from '../new-mobile-modal/NewMobileModal';

const activeStyle = {
  top: '50%',
  left: '50%',
  position: 'fixed',
};

const ChatPopup = ({ visible, onClose }) => {

  return (
    visible && (
      <DivInfoPortal>
        <NewMobileModal onClose={onClose} className="popup chat-popup" style={activeStyle}>
          <div className="chat-popup__container">
            <div className="chat-popup__messages"></div>
            <div className="chat-popup__compose-form">
              <input className="site-input chat-popup__compose-form_input" placeholder="Type a message..." />
              <span className="btn btn--orange">Send</span>
            </div>
            <div className="chat-popup__footer">Wehelp</div>
          </div>
        </NewMobileModal>
      </DivInfoPortal>
    )
  );
};

export default ChatPopup;
