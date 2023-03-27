import React from 'react';
import CloudBlock from '../../../common/cloud-block/CloudBlock';

const SitesCopying = ({ history }) => {

  const content = (
    <div className="services__sites-copying_container">
      <input className="site-input" placeholder='Enter the site address...' />
      <div className="btn services__sites-copying_btn" onClick={() => history.push('/services/copy-sites')}>Copy</div>
    </div>
  );

  return (
    <CloudBlock
      title='Copy sites'
      rightButtonAction="/services/copy-sites"
      content={content}
      infoContent="s"
      mdiIcon="content_copy"
      iconContainerColor="blue"
    />
  );
};

export default SitesCopying;
