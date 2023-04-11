import React from 'react';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import ProgressRing from '../../../common/progress-ring/ProgressRing';
import icon from '../../../../assets/images/services/disc-widget.png';

const DiscBlock = () => {
  const progress = 40;

  const content = (
    <div className="services__disc_container">
      <div className="services__disc_col">
        <ProgressRing
          progress={progress}
          radius={40}
          innerContent={<div className="services__disc_progress-label">{progress}%</div>}
        />
      </div>
      <div className="services__disc_col">
        <div className="services__disc_item">
          <div className="services__disc_number">10 Gb</div>
          <div className="services__disc_label">Total</div>
        </div>
      </div>
      <div className="services__disc_col">
        <div className="services__disc_item services__disc_item--orange">
          <div className="services__disc_number">6 Gb</div>
          <div className="services__disc_label">Free</div>
        </div>
      </div>
    </div>
  );

  return (
    <CloudBlock
      title='Disc'
      // rightButtonAction={() => alert('s')}
      // rightButtonAction={(e) => e.preventDefault()}
      content={content}
      infoContent="asd"
      iconName="services/disc"
      icon={icon}
    />
  );
};

export default DiscBlock;
