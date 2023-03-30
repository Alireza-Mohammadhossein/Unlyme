import React from 'react';
import { Route, Routes, Outlet, Navigate} from 'react-router-dom';
import Bank from './components/bank/Bank';
import Calendar from './components/calendar/Calendar';
import CopySites from './components/copy-sites/CopySites';
import Domains from './components/domains/Domain';
import NotFound from './components/notfound/NotFound';
import OnlineConsultant from './components/online-consultant/OnlineConsultant';
import Servises from './components/services/MyServices';
import Settings from './components/settings/Settings';
import Signin from './components/signin/SignIn';
import SiteBuilder from './components/site-builder/SiteBuilder';


// This component is responsible for page routing
const Switcher = () => {
  return (
    <Routes> 
      <Route element={<PrivateRoutes />}>
        <Route 
          path="/"
          element={<Servises />}
        />
        <Route 
          path="/services/domains"
          element={<Domains />}
        />
        <Route 
          path="/services/site-builder"
          element={<SiteBuilder />}
        />
        <Route 
          path="/services/copy-sites"
          element={<CopySites />}
        />
        <Route 
          path="/services/bank"
          element={<Bank />}
        />
        <Route 
          path="/settings"
          element={<Settings />}
        />
        <Route 
          path="/services/calendar"
          element={<Calendar />}
        />
        <Route 
          path="/services/online-consultant"
          element={<OnlineConsultant />}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Route>
      
      <Route 
        path="/signin"
        element={<Signin />}
      />
    </Routes>
  );
};

const PrivateRoutes = () => {
  let auth = {'token': true}

  return (
    auth.token ? <Outlet /> : <Navigate to='/signin' />
  )
}


export default Switcher;
