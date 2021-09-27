export {};
import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import styles from './CustomerDetails.module.css';
import { useHistory } from 'react-router';

export default function CustomerDetails(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="KUNDEN DATEN" />
      <main
        onClick={() => history.push('/profielsettings')}
        className={styles.cardWrapper}
      >
        <Textarea
          isEditable={true}
          setIsEditable={console.log}
          onDeleteClick={console.log}
          companyValue="Muster Firma"
          setCompanyValue={console.log}
          ceoValue=""
          setCeoValue={console.log}
          phoneNumberValue=""
          setPhoneNumberValue={console.log}
          mobileValue=""
          setMobileValue={console.log}
          emailValue=""
          setEmailValue={console.log}
          urlValue=""
          setUrlValue={console.log}
          streetValue=""
          setStreetValue={console.log}
          plzValue=""
          setPlzValue={console.log}
          cityValue=""
          setCityValue={console.log}
          managerValue=""
          setManagerValue={console.log}
          managerPhoneValue=""
          setManagerPhoneValue={console.log}
        />
        <Textarea
          isEditable={false}
          setIsEditable={console.log}
          onDeleteClick={console.log}
          companyValue="Muster Firma"
          ceoValue="Muster Mann"
          phoneNumberValue="0...."
          mobileValue="0...."
          emailValue="Muster@mail.de"
          urlValue="www.Muster.de"
          streetValue="Muster Straße"
          plzValue="0...."
          cityValue="Muster Stadt"
          managerValue="Muster Frau"
          managerPhoneValue="0...."
        />
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
