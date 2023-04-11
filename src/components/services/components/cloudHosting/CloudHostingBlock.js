import React from 'react';
import ProgressRing from '../../../common/progress-ring/ProgressRing';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import icon from '../../../../assets/images/services/cloud-widget.png';

const CloudHostingBlock = () => {
  const content = (
    <div className="services__cloud-hosting">
      <div className="services__cloud-hosting_container">
        <div className="services__cloud-hosting_col">
          <div>Storage</div>
          <div className="services__cloud-hosting_item">
            <ProgressRing progress={5} radius={30} />
            <div>
              <div>Total 3072 Mb</div>
              <div>Used 180 Mb</div>
            </div>
          </div>
        </div>
        <div className="services__cloud-hosting_col">
          <div>Sites</div>
          <div className="services__cloud-hosting_item">
            <ProgressRing progress={5} radius={30} />
            <div>
              <div>1 of 3</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <span className="btn btn--blue-text">More details</span>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title="Cloud hosting"
      // rightButtonAction={() => alert('s')}
      // rightButtonAction={(e) => e.preventDefault()}
      content={content}
      iconName="services/cloud-hosting"
      icon={icon}
    />
  );
};

export default CloudHostingBlock;
