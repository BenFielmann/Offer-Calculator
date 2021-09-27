import React from 'react';
import Home from './Pages/Home/Home';
import CustomerOverview from './Pages/CustomerOverview/CustomerOverview';
import CustomerDetails from './Pages/CustomerDetails/CustomerDetails';
import ProfileOverview from './Pages/ProfileOverview/ProfileOverview';
import Date from './Pages/Date/Date';
import Calculate from './Pages/Calculate/Calculate';
import NewObject from './Pages/NewObject/NewObject';
import CompanyDetails from './Pages/CompanyDetails/CompanyDetails';
import CompanyOverview from './Pages/CompanyOverview/CompanyOverview';
import ProfileSettings from './Pages/ProfileSettings/ProfileSettings';
import Industries from './Pages/Industries/Industries';
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
