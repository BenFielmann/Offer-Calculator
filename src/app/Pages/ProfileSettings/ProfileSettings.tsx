import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './ProfileSettings.module.css';
import { useHistory } from 'react-router';

export default function ProfileSettings(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="ANGEBOTSRECHNER" />
      <main className={styles.cardWrapper}>
        <Cards
          onClick={() => history.push('/industries')}
          name="Facility Management"
          type="checked"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Firma"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Stundensatz"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Quatratmeter"
          type="chose"
        />
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
