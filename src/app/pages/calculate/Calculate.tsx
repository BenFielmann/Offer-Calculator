import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Calculate.module.css';
import Calculator from '../../components/Calculator/Calculator';

export default function Calculate(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header name="STUNDEN PREISRECHNER" />
      <main className={styles.cardWrapper}>
        <Calculator />
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/profilesettings'}
        goForward={'profilesettings'}
      />
    </div>
  );
}
