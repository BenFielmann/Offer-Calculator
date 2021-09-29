import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import styles from './CompanyDetails.module.css';

export default function CompanyDetails(): JSX.Element {
  const [companyValue, setCompanyValue] = useState('');
  const [ceoValue, setCeoValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [plzValue, setPlzValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [managerValue, setManagerValue] = useState('');
  const [managerPhoneValue, setManagerPhoneValue] = useState('');

  return (
    <div className={styles.container}>
      <Header name="FIRMEN DETAILS" />
      <main className={styles.cardWrapper}>
        <form>
          <Textarea
            isEditable={true}
            setIsEditable={console.log}
            onDeleteClick={console.log}
            companyValue={companyValue}
            setCompanyValue={setCompanyValue}
            ceoValue={ceoValue}
            setCeoValue={setCeoValue}
            phoneNumberValue={phoneNumberValue}
            setPhoneNumberValue={setPhoneNumberValue}
            mobileValue={mobileValue}
            setMobileValue={setMobileValue}
            emailValue={emailValue}
            setEmailValue={setEmailValue}
            urlValue={urlValue}
            setUrlValue={setUrlValue}
            streetValue={streetValue}
            setStreetValue={setStreetValue}
            plzValue={plzValue}
            setPlzValue={setPlzValue}
            cityValue={cityValue}
            setCityValue={setCityValue}
            managerValue={managerValue}
            setManagerValue={setManagerValue}
            managerPhoneValue={managerPhoneValue}
            setManagerPhoneValue={setManagerPhoneValue}
          />
        </form>
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/profilesettings'}
        goForward={'/companyoverview'}
      />
    </div>
  );
}
