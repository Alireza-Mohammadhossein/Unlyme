import React, { useEffect, useRef } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';

const scheduler = window.scheduler;

const Scheduler = ({ events }) => {
    const schedulerContainer = useRef(null);

    useEffect(() => {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];

        scheduler.init(schedulerContainer.current, new Date());
        scheduler.clearAll();
        scheduler.parse(events);
    }, [events]);

    return (
        <div
            ref={schedulerContainer}
            style={{ width: '100%', height: '100%' }}
        ></div>
    );
};

export default Scheduler;