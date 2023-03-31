import React, { useState } from 'react';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import TabToolbar from '../tab-toolbar/TabToolbar';

const TAB_DEALS = '1';
const TAB_TASKS = '2';
const TAB_LEADS = '3';

const CRMBlock = () => {

  const [tab, setTab] = useState(TAB_DEALS);

  const options = [
    { value: TAB_DEALS, label: 'Deals' },
    { value: TAB_TASKS, label: 'Tasks' },
    { value: TAB_LEADS, label: 'Leads' },
  ];

  const content = (
    <>
      <TabToolbar value={tab} options={options} onChange={val => setTab(val.toString())} />
      <div className="services__crm_container">
        <div className="services__crm_col">
          <div className="services__crm_col-number text-red">5</div>
          <div className="services__crm_col-text">New deals</div>
        </div>
        <div className="services__crm_col">
          <div className="services__crm_col-number text-orange">38</div>
          <div className="services__crm_col-text">Total deals</div>
        </div>
        <div className="services__crm_col">
          <div className="services__crm_col-number text-green">14</div>
          <div className="services__crm_col-text">No-deal</div>
        </div>
      </div>
    </>
  );

  return (
    <CloudBlock
      title="CRM"
      // rightButtonAction={() => alert('s')}
      // rightButtonAction={(e) => e.preventDefault()}
      content={content}
      infoContent="sd"
      iconName="crm"
      iconContainerColor="red"
      mdiIcon="account_circle"
    />
  );
};

export default CRMBlock;
