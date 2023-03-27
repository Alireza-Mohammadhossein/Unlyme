import React, { useState } from 'react';
import moment from 'moment';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import TabToolbar from '../tab-toolbar/TabToolbar';
import { chatDialogs } from '../../../../mocks/mocks';

const TAB_ALL_DIALOGS = '1';
const TAB_ACTIVE_DIALOGS = '2';

const OnlineConsultant = ({ history }) => {

  const [tab, setTab] = useState(TAB_ACTIVE_DIALOGS);

  const options = [
    { value: TAB_ALL_DIALOGS, label: 'All dialogs' },
    { value: TAB_ACTIVE_DIALOGS, label: 'Active dialogs' },
  ];

  const content = (
    <>
      <TabToolbar value={tab} options={options} onChange={val => setTab(val.toString())} />
      {chatDialogs.map((dialog, index) => (
        <React.Fragment key={dialog.id}>
          <div className="services__online-consultant_dialog" style={index === 0 ? { paddingTop: 0 } : null}>
            <div className="services__online-consultant_dialog-header">
              <div className="">Client {dialog.id}</div>
              <div className="services__online-consultant_dialog-date">{moment.unix(dialog.date).format('DD.MM.Y HH:mm')}</div>
            </div>
            <div className="services__online-consultant_dialog-body">{dialog.message}</div>
          </div>
          {index !== chatDialogs.length - 1 && <div className="services__online-consultant_separator" />}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <CloudBlock
      title='Online consultant'
      rightButtonAction="/services/online-consultant"
      content={content}
      infoContent="s"
      mdiIcon="mail_outline"
      iconContainerColor="purple"
    />
  );
};

export default OnlineConsultant;
