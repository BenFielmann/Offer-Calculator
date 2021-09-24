import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './Home.module.css';
import { useHistory } from 'react-router';

export default function Home(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="ANGEBOTSRECHNER" />
      <div className={styles.cardWrapper}>
        <Cards
          onClick={() => history.push('/industries')}
          name="BRANCHEN PROFILE"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="NEUES OBJECT"
          type="chose"
        />
      </div>
      <Navigation callToAction={false} isFirstStep={true} isHomeActive={true} />
    </div>
  );
}
