import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const DivInfoPortal = ({ children }) => {
  const elRef = useRef(document.createElement('div'));
  const [el, setEl] = useState(null);

  useEffect(() => {
    setEl(elRef.current);
    document.body.appendChild(elRef.current);
    return () => {
      document.body.removeChild(elRef.current);
    };
  }, []);

  return el ? ReactDOM.createPortal(children, el) : null;
};

export default DivInfoPortal;
