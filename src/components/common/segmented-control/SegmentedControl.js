import React from 'react';


const SegmentedControl = ({ value, options, onChange }) => {
  return (
    <div className="site-segmented-control">
      {options.map(o => (
        <div
          className={`site-segmented-control__option ${value === o.value ? 'site-segmented-control__option--active' : ''}`}
          key={o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </div>
      ))}
    </div>
  );
};

export default SegmentedControl;
