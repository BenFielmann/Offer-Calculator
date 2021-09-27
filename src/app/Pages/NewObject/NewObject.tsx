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
          onClick={() => history.push('/industries')}
          name="Profil"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Kunden Daten"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Datum"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Stunden ca."
          type="asking"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Stundensatz"
          type="asking"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Quatratmeter"
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
