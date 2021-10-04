import React from 'react';
import { useHistory } from 'react-router-dom';
import useCalculator from '../../hooks/useCalculator';
import useCustomerDetails from '../../hooks/useCustomerDetails';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import styles from './NewObject.module.css';

export default function NewObject(): JSX.Element {
  const { calculator } = useCalculator();
  const { customerDetails } = useCustomerDetails();
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="NEUES OBJECT" />
      <main className={styles.cardWrapper}>
        <Cards
          onClick={() => history.push('/customerdetails')}
          name="Kundendaten"
          type={
            customerDetails && customerDetails.companyValue !== '0'
              ? 'checked'
              : 'asking'
          }
          goTo={'/customerdetails'}
        />
        <Cards
          onClick={() => history.push('/date')}
          name="Datum"
          type={calculator && calculator !== '0' ? 'checked' : 'asking'}
          goTo={'/date'}
        />
        <Cards
          onClick={() => history.push('/calculate')}
          name="Stundensatz"
          type={calculator && calculator !== '0' ? 'checked' : 'asking'}
          goTo={'/calculate'}
        />
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
