import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloudBlock from '../../../common/cloud-block/CloudBlock';

const SitesCopying = ({ history }) => {
  const navigate = useNavigate();
  const content = (
    <div className="services__sites-copying_container">
      <input className="site-input" placeholder='Enter the site address...' />
      <div className="btn services__sites-copying_btn" onClick={() => navigate('/services/copy-sites')}>Copy</div>
    </div>
  );

  return (
    <CloudBlock
      title='Copy sites'
      rightButtonAction={() => navigate('/services/copy-sites')}
      content={content}
      infoContent="s"
      mdiIcon="content_copy"
      iconContainerColor="blue"
    />
  );
};

export default SitesCopying;