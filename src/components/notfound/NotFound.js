import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function NotFound() {
  return (
    <div className="error-container">
      <div className="error-container__number">404</div>
      <div className="error-container__description">Page Does Not Exist</div>
      <div className="error-container__back">
        <Link to="/" className="btn">
          Back to main page
        </Link>
      </div>
      <div className="footer">© {moment().format('Y')} WayWe</div>
    </div>
  );
}


export default NotFound;
