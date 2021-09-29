import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Calendar from '../../components/Calendar/Calendar';
import styles from './Date.module.css';

export default function Date(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header name="DATUM" />
      <main className={styles.cardWrapper}>
        <Calendar />
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/profilesetting'}
        goForward={''}
      />
    </div>
  );
}
