import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Servises from './components/services/Services';


// This component is responsible for page routing
const Switcher = () => {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Servises />}
      />
    </Routes>
  );
};

export default Switcher;
