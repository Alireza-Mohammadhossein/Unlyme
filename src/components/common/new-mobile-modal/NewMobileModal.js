import React, { useState, useRef, useEffect } from 'react';
import ReactResizeDetector from 'react-resize-detector';

const NewMobileModal = ({ className, onClose, children, style }) => {
  const [containerDimensions, setContainerDimensions] = useState(null);
  const [styleAnimation, setStyleAnimation] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add('be-modal-open');
    document.body.classList.add('modal-open');
    document.addEventListener('mousedown', handleClick, false);
    setStyleAnimation({ opacity: 1 });
    return () => {
      document.documentElement.classList.remove('be-modal-open');
      document.body.classList.remove('modal-open');
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  const handleClick = e => {
    if (containerRef.current && containerRef.current.contains(e.target)) {
      return;
    }
    onClose();
  };

  const getContainerStyle = () => {
    if (containerDimensions == null) {
      return {};
    }
    const newStyles = { ...style, ...styleAnimation };
    newStyles.marginTop = -(containerDimensions.height / 2);
    newStyles.marginLeft = -(containerDimensions.width / 2);
    return newStyles;
  };

  const handleResize = (width, height) => {
    setContainerDimensions({ width, height });
  };

  return (
    <div className={className} style={getContainerStyle()} ref={containerRef}>
      <div className="popup__inner">
        <span onClick={onClose} className="popup__close-button" />
        {children}
      </div>
      <ReactResizeDetector handleWidth handleHeight onResize={handleResize} />
    </div>
  );
};

export default NewMobileModal;
