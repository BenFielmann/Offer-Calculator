import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './Industries.module.css';
import { useHistory } from 'react-router';

export default function Industries(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="BRANCHEN" />
      <main className={styles.cardWrapper}>
        <Cards
          onClick={() => history.push('/industries')}
          name="Ihr Gewerbe?"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Elektriker"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Fensterbauer"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Facility Management"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/industries')}
          name="Gas & Wasser"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Maler & Lackierer"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Maurer"
          type="chose"
        />
        <Cards
          onClick={() => history.push('/newobject')}
          name="Tischler"
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
