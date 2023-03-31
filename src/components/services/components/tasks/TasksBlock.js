import React, { useState } from 'react';
import CloudBlock from '../../../common/cloud-block/CloudBlock';
import TabToolbar from '../tab-toolbar/TabToolbar';

const TAB_BACKLOG = 'TAB_BACKLOG';
const TAB_IN_PROGRESS = 'TAB_IN_PROGRESS';
const TAB_DONE = 'TAB_DONE';
const TAB_CLOSED = 'TAB_CLOSED';

const TasksBlock = () => {

  const [tab, setTab] = useState(TAB_BACKLOG);

  const options = [
    { value: TAB_BACKLOG, label: 'Backlog' },
    { value: TAB_IN_PROGRESS, label: 'In progress' },
    { value: TAB_DONE, label: 'Done' },
    { value: TAB_CLOSED, label: 'Closed' },
  ];

  const content = (
    <>
      <TabToolbar value={tab} options={options} onChange={val => setTab(val.toString())} />
      <div className="services__tasks_item">Make new logo</div>
      <div className="services__tasks_item">Test new system</div>
    </>
  );

  return (
    <CloudBlock
      title="Tasks"
      // rightButtonAction={() => alert('s')}
      // rightButtonAction={(e) => e.preventDefault()}
      content={content}
      infoContent="s"
      mdiIcon="task"
      iconName="services/tasks"
      iconContainerColor="orange"
    />
  );
};

export default TasksBlock;
