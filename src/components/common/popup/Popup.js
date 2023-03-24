import * as React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import DivInfoPortal from '../div-info-portal/DivInfoPortal';
import NewMobileModal from '../new-mobile-modal/NewMobileModal';

const activeStyle = {
  top: '50%',
  left: '50%',
  position: 'fixed',
};

const Popup = ({ onClose, content }) => {
  return (
    <DivInfoPortal>
      <NewMobileModal onClose={onClose} className="popup cloud" style={activeStyle}>
        <RemoveScroll>{content}</RemoveScroll>
      </NewMobileModal>
    </DivInfoPortal>
  );
};

export default Popup;
