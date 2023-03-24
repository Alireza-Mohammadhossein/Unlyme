import * as React from 'react';
import Calendar from 'react-calendar';
import DivInfoPortal from '../div-info-portal/DivInfoPortal';
import NewMobileModal from '../new-mobile-modal/NewMobileModal';


const activeStyle = {
  top: '50%',
  left: '50%',
  width: '400px',
  position: 'fixed',
};

const DateSelectionPopup = ({ visible, onClose, ...otherProps }) => {

  return (
    visible && (
      <DivInfoPortal>
        <NewMobileModal onClose={onClose} className="popup" style={activeStyle}>
          <Calendar
            maxDetail="month"
            minDetail="month"
            // locale={getLangISOFormat(i18n.language)}
            prev2Label={null}
            next2Label={null}
            className="cal-lap"
            {...otherProps}
          />
        </NewMobileModal>
      </DivInfoPortal>
    )
  );
};

export default DateSelectionPopup;
