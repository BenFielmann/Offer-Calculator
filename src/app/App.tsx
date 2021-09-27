import React from 'react';
import Home from './pages/home/Home';
import CustomerOverview from './pages/customerOverview/CustomerOverview';
import CustomerDetails from './pages/customerDetails/CustomerDetails';
import ProfileOverview from './pages/profileOverview/ProfileOverview';
import Date from './pages/date/Date';
import Calculate from './pages/calculate/Calculate';
import NewObject from './pages/newObject/NewObject';
import CompanyDetails from './pages/companyDetails/CompanyDetails';
import CompanyOverview from './pages/companyOverview/CompanyOverview';
import ProfileSettings from './pages/profileSettings/ProfileSettings';
import Industries from './pages/industries/Industries';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route path="/customeroverview">
            <CustomerOverview />
          </Route>
          <Route path="/customerdetails">
            <CustomerDetails />
          </Route>
          <Route path="/profileoverview">
            <ProfileOverview />
          </Route>
          <Route path="/date">
            <Date />
          </Route>
          <Route path="/calculate">
            <Calculate />
          </Route>
          <Route path="/newobject">
            <NewObject />
          </Route>
          <Route path="/companyoverview">
            <CompanyOverview />
          </Route>
          <Route path="/companydetails">
            <CompanyDetails />
          </Route>
          <Route path="/profilesettings">
            <ProfileSettings />
          </Route>
          <Route path="/industries">
            <Industries />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
