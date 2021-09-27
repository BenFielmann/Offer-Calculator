import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Calculate.module.css';
import Calculator from '../../components/Calculator/Calculator';
import { useHistory } from 'react-router';

export default function Calculate(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="STUNDEN PREISRECHNER" />
      <main
        onClick={() => history.push('/industries')}
        className={styles.cardWrapper}
      >
        <Calculator />
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
