import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './NewObject.module.css';

export default function NewObject(): JSX.Element {
  const mockUpData = [
    {
      tittle: 'Profil',
      type: 'asking',
      goTo: '/profileoverview',
    },
    {
      tittle: 'Kundendaten',
      type: 'asking',
      goTo: '/customerdetails',
    },
    {
      tittle: 'Datum',
      type: 'asking',
      goTo: '/date',
    },
    {
      tittle: 'Stundensatz',
      type: 'asking',
      goTo: 'calculate',
    },
  ];
  return (
    <div className={styles.container}>
      <Header name="NEUES OBJEKT" />
      <main className={styles.cardWrapper}>
        {mockUpData.map((card) => (
          <Cards
            onClick={() => console.log('hey')}
            name={card.tittle}
            type={card.type}
            goTo={card.goTo}
          />
        ))}
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={true}
        isHomeActive={false}
      />
    </div>
  );
}
