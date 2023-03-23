import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyServices from './modules/my-services/MyServices';
import LandingCalendar from './external/calendar/LandingCalendar';
import LandingIndex from './external/index/LandingIndex';
import SignIn from './modules/signin/Signin';
import PrivateRoute from './modules/app/components/PrivateRoute';
import NotFound from './modules/notfound/NotFound';
import Domains from './modules/domains/Domains';
import SiteBuilder from './modules/site-builder/SiteBuilder';
import CopySites from './modules/copy-sites/CopySites';
import Calendar from './modules/calendar/Calendar';
import Bank from './modules/bank/Bank';
import Settings from './modules/settings/Settings';
import OnlineConsultant from './modules/online-consultant/OnlineConsultant';

const privateRoutes = [];

// This component is responsible for page routing
const Switcher = () => {
  return (
    <Switch>
      <Route path="/" exact component={MyServices} />
      <Route path="/settings" exact component={Settings} />

      <Route path="/my-services" exact component={MyServices} />

      <Route path="/services/online-consultant" exact component={OnlineConsultant} />
      <Route path="/services/domains" exact component={Domains} />
      <Route path="/services/site-builder" exact component={SiteBuilder} />
      <Route path="/services/copy-sites" exact component={CopySites} />
      <Route path="/services/bank" exact component={Bank} />
      <Route path="/services/calendar" exact component={Calendar} />

      <Route path="/external/calendar" exact component={LandingCalendar} />
      <Route path="/external/index" exact component={LandingIndex} />

      <Route path="/signin" exact component={SignIn} />
      <Route path="/404" component={NotFound} />
      {privateRoutes.map(route => {
        const routeProps = {
          path: route.path,
          component: route.component,
          title: route.title,
          exact: true,
          componentProps: route.componentProps,
        };

        return <PrivateRoute key={route.path} {...routeProps} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Switcher;
