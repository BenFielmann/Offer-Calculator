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
      <Header name="PROFILEINSTELLUNG" />
      <main className={styles.cardWrapper}>
        <Cards
          onClick={() => history.push('/industries')}
          name="Facility Management"
          type="checked"
        />
        <Cards
          onClick={() => history.push('/companydetails')}
          name="Firma"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/calculate')}
          name="Stundensatz"
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
