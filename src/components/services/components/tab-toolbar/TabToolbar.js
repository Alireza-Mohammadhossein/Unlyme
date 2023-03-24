import React from 'react';


const TabToolbar = ({ value, options, onChange }) => {
  return (
    <div className="site-tab-toolbar">
      {options.map(o => (
        <div
          className={`site-tab-toolbar__option ${value === o.value ? 'site-tab-toolbar__option--active' : ''}`}
          key={o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </div>
      ))}
    </div>
  );
};

export default TabToolbar;
