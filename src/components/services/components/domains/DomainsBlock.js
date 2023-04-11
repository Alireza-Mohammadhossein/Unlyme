import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import Domain from '../../../domains/Domain';
import icon from '../../../../assets/images/services/domain-widget.png'

const DomainsBlock = () => {
  const navigate = useNavigate();
  const content = (
    <div className="services__domains_container">
      <div className="services__domains_item services__domains_item--blue">2 Domains</div>
      <div className="services__domains_item services__domains_item--red">0 Expire</div>
      <div className="services__domains_item services__domains_item--orange">0 Expired</div>
    </div>
  );

  return (
    <CloudBlock
      title='Domains'
      rightButtonAction={() => navigate('/services/domains')}
      infoContent="sd"
      directComponent={<Domain />}
      content={content}
      icon={icon}
    />
  );
};

export default DomainsBlock;
