import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './NewObject.module.css';
import { useHistory } from 'react-router';

export default function NewObject(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="NEUES OBJEKT" />
      <main className={styles.cardWrapper}>
        <Cards
          onClick={() => history.push('/profileoverview')}
          name="Profil"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/customerdetails')}
          name="Kunden Daten"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/date')}
          name="Datum"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/calculate')}
          name="Stundensatz"
          type="asking"
        />
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={true}
        isHomeActive={false}
      />
    </div>
  );
}
