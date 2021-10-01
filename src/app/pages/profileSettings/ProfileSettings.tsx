import React from 'react';
import { useHistory } from 'react-router-dom';
import useIndustries from '../../hooks/useIndustries';
import useCalculator from '../../hooks/useCalculator';
import useDetails from '../../hooks/useDetails';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './ProfileSettings.module.css';

export default function ProfileSettings(): JSX.Element {
  const { industries } = useIndustries();
  const { calculator } = useCalculator();
  const { details } = useDetails();
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="PROFILEINSTELLUNG" />
      <main className={styles.cardWrapper}>
        {industries &&
          industries.map((card, index) => (
            <Cards
              onClick={() => console.log('hey')}
              name={card}
              type="checked"
              key={index}
            />
          ))}
        <Cards
          onClick={() => history.push('/companydetails')}
          name="Firma"
          type={details && details.companyValue !== '0' ? 'checked' : 'asking'}
        />
        <Cards
          onClick={() => history.push('/calculate')}
          name="Stundensatz"
          type={calculator && calculator !== '0' ? 'checked' : 'asking'}
        />
      </main>
      <Navigation
        callToAction={false}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/industries'}
        goForward={''}
      />
    </div>
  );
}
