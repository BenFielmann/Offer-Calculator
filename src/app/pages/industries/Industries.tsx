import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './Industries.module.css';

export default function Industries(): JSX.Element {
  const mockUpData = [
    {
      tittle: 'Ihr Gewerbe',
      type: 'chose',
      goTo: '/',
    },
    {
      tittle: 'Elektriker',
      type: 'chose',
      goTo: '/profilesettings',
    },
    {
      tittle: 'Fensterbauer',
      type: 'chose',
      goTo: '/profilesettings',
    },
    {
      tittle: 'Facility Management',
      type: 'chose',
      goTo: '/profilesettings',
    },
    {
      tittle: 'Gas & Wasser',
      type: 'chose',
      goTo: '/profilesettings',
    },
    {
      tittle: 'Maler & Lackierer',
      type: 'chose',
      goTo: '/profilesettings',
    },
    {
      tittle: 'Maurer',
      type: 'chose',
      goTo: '/profilesettings',
    },
    {
      tittle: 'Tischler',
      type: 'chose',
      goTo: '/profilesettings',
    },
  ];

  return (
    <div className={styles.container}>
      <Header name="BRANCHEN" />
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
