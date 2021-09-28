import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './ProfileSettings.module.css';

export default function ProfileSettings(): JSX.Element {
  const mockUpData = [
    {
      tittle: 'Facility Management',
      type: 'checked',
      goTo: '/industries',
    },
    {
      tittle: 'Firma',
      type: 'chose',
      goTo: '/companydetails',
    },
    {
      tittle: 'Stundensatz',
      type: 'chose',
      goTo: '/calculate',
    },
  ];
  return (
    <div className={styles.container}>
      <Header name="PROFILEINSTELLUNG" />
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
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
