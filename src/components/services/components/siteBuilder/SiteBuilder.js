import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import Popup from '../../../common/popup/Popup';

const SiteBuilder = () => {
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);

  const content = (
    <div className="services__site-builder_container">
      <div className="services__site-builder_header">
        <div className="services__site-builder_col">
          <div className="text-red">250</div>
          <div>Templates</div>
        </div>
        <div className="services__site-builder_col">
          <div className="text-red">Premium</div>
          <div>Feature set</div>
        </div>
        <div className="services__site-builder_col">
          <div className="btn btn--transparent-blue" onClick={() => navigate('/services/site-builder')}>
            Create a website
          </div>
        </div>
      </div>
      <div className="site-input-label">Order website creation</div>
      <textarea className="site-textarea site-textarea--min-rows-2" placeholder="Describe your task" />
      <div className="services__site-builder_btn-container">
        <div className="btn" onClick={() => setPopupVisible(true)}>
          Submit
        </div>
      </div>
    </div>
  );

  return (
    <>
      <CloudBlock
        title='Site builder'
        rightButtonAction={() => navigate('/services/site-builder')}
        content={content}
        infoContent="s"
        mdiIcon="web"
        iconContainerColor="red"
      />
      {popupVisible && (
        <Popup
          onClose={() => setPopupVisible(false)}
          content="Your application has been successfully sent. Our manager will contact you within 1 hour."
        />
      )}
    </>
  );
};

export default SiteBuilder;
