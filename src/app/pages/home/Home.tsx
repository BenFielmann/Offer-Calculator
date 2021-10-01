import React from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  const history = useHistory()
  const mockUpData = [
    {
      tittle: 'BRANCHEN PROFILE',
      type: 'chose',
    },
    {
      tittle: 'NEUES OBJEKT',
      type: 'chose',
    },
  ];

  return (
    <div className={styles.container}>
      <Header name="ANGEBOTSRECHNER" />
      <main className={styles.cardWrapper}>
        {mockUpData.map((card,index) => (
          <Cards
            onClick={() => history.push('/industries')}
            name={card.tittle}
            type={card.type}
            key={index}
          />
        ))}
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={true}
        isHomeActive={true}
        goBack={''}
        goForward={''}
      />
    </div>
  );
}
