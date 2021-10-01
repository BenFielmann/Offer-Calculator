import React from 'react';
import { useHistory } from 'react-router-dom';
import useIndustries from '../../hooks/useIndustries';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './Industries.module.css';

export default function Industries(): JSX.Element {
  const { addIndustrie } = useIndustries();
  const history = useHistory();
  const mockUpData = [
    {
      tittle: 'Elektriker',
    },
    {
      tittle: 'Fensterbauer',
    },
    {
      tittle: 'Facility Management',
    },
    {
      tittle: 'Gas & Wasser',
    },
    {
      tittle: 'Maler & Lackierer',
    },
    {
      tittle: 'Maurer',
    },
    {
      tittle: 'Tischler',
    },
  ];

  return (
    <div className={styles.container}>
      <Header name="BRANCHEN" />
      <main className={styles.cardWrapper}>
        {mockUpData.map((card, index) => (
          <Cards
            onClick={() => {
              addIndustrie(card.tittle);
              history.push('/profilesettings');
            }}
            name={card.tittle}
            type="chose"
            key={index}
          />
        ))}
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/'}
        goForward={''}
      />
    </div>
  );
}
