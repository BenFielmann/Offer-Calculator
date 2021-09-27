import React from 'react';
import Home from './Pages/home/Home';
import CustomerOverview from './Pages/customerOverview/CustomerOverview';
import CustomerDetails from './Pages/customerDetails/CustomerDetails';
import ProfileOverview from './Pages/profileOverview/ProfileOverview';
import Date from './Pages/date/Date';
import Calculate from './Pages/calculate/Calculate';
import NewObject from './Pages/newObject/NewObject';
import CompanyDetails from './Pages/companyDetails/CompanyDetails';
import CompanyOverview from './Pages/companyOverview/CompanyOverview';
import ProfileSettings from './Pages/profileSettings/ProfileSettings';
import Industries from './Pages/industries/Industries';
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
