import React from 'react';
import Home from './Pages/Home/Home';
import ProfileOverview from './Pages/ProfileOverview/ProfileOverview';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route path="/profileoverview">
            <ProfileOverview />
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
