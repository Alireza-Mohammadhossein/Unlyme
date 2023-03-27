import * as React from 'react';
import Select from 'react-select';

const CustomSelect = props => {
  return <Select classNamePrefix="select" {...props} />;
};

export default CustomSelect;
