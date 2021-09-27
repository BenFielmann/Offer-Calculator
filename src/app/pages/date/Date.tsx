import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Calendar from '../../components/Calendar/Calendar';
import styles from './Date.module.css';
import { useHistory } from 'react-router';

export default function Date(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="DATUM" />
      <main
        onClick={() => history.push('/industries')}
        className={styles.cardWrapper}
      >
        <Calendar />
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
