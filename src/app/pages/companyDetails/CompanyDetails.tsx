import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import styles from './CompanyDetails.module.css';
import { useHistory } from 'react-router';

export default function CompanyDetails(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="FIRMEN DETAILS" />
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
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
      />
    </div>
  );
}
