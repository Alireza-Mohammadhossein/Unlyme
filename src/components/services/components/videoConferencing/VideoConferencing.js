import React, { useState } from 'react';
import moment from 'moment';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import TabToolbar from '../tab-toolbar/TabToolbar';
import DateSelectionPopup from '../../../common/date-selection-popup/DateSelectionPopup';
import MaskedInput from 'react-text-mask';

const TAB_CREATE = '1';
const TAB_UPCOMING = '2';

const VideoConferencing = () => {

  const [tab, setTab] = useState(TAB_CREATE);
  const [dateSelectionPopupIsShowed, setDateSelectionPopupIsShowed] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');

  const options = [
    { value: TAB_CREATE, label: 'Create'},
    { value: TAB_UPCOMING, label: `Upcoming(2)` },
  ];

  const content = (
    <>
      <TabToolbar value={tab} options={options} onChange={val => setTab(val.toString())} />
      {tab === TAB_CREATE && (
        <div>
          <div className="site-input-label">Conference Name</div>
          <input className="site-input" placeholder="Write a name" />
          <div className="services__video-conferencing_gap" />
          <div className="site-input-label">Start</div>
          <div className="services__video-conferencing_date-container">
            <input
              className="site-input"
              onChange={() => {}}
              value={selectedDate ? selectedDate.format('DD.MM.Y') : ''}
              onFocus={() => setDateSelectionPopupIsShowed(true)}
              placeholder="Choose a date"
            />
            <MaskedInput
              mask={[/[1-9]/, /\d/, ':', /\d/, /\d/]}
              className="site-input"
              maskChar={null}
              onChange={e => setTime(e.target.value)}
              value={time}
              placeholder="Type a time"
            />
            <span className="btn btn--transparent-blue">To plan</span>
          </div>
          <div className="services__video-conferencing_create-footer">
            <a href="/" className="link">
              Copy invitation link
            </a>
            <span className="btn">To begin</span>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <CloudBlock
        title='Video conferencing'
        rightButtonAction={() => alert('s')}
        content={content}
        infoContent="s"
        mdiIcon="play_arrow"
        iconName="services/video-conferencing"
        iconContainerColor="green"
      />
      <DateSelectionPopup
        value={selectedDate ? selectedDate.toDate() : null}
        onChange={val => {
          // @ts-ignore
          setSelectedDate(moment(val));
          setDateSelectionPopupIsShowed(false);
        }}
        visible={dateSelectionPopupIsShowed}
        onClose={() => setDateSelectionPopupIsShowed(false)}
      />
    </>
  );
};

export default VideoConferencing;
