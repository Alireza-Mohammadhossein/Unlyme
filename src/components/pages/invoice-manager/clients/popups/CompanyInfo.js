import React, { useState } from 'react';
import './clients-popups.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';






const CompanyInfoPopup = ({ handleCloseCompanyInfoPopup, data}) => {

  return (
    <div className='clients-companyinfopopup'>
      <div className='clients-companyinfopopup-header'>
        <div className='clients-companyinfopopup-header-title'>
          <p>Company info</p>
        </div>

        <div className='clients-companyinfopopup-header-btn'>
          <IconButton onClick={handleCloseCompanyInfoPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='clients-companyinfopopup-content'>

      </div>

    </div>



  );
}


export default CompanyInfoPopup;
