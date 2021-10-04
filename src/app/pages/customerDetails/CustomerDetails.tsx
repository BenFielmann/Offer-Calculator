import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCustomerDetails from '../../hooks/useCustomerDetails';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import styles from './CustomerDetails.module.css';

export default function CustomerDetails(): JSX.Element {
  const [companyValue, setCompanyValue] = useState('');
  const [ceoValue, setCeoValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [plzValue, setPlzValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [managerValue, setManagerValue] = useState('');
  const [managerPhoneValue, setManagerPhoneValue] = useState('');

  const { addCustomerDetails } = useCustomerDetails();
  const history = useHistory();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    addCustomerDetails({
      companyValue: companyValue,
      ceoValue: ceoValue,
      phoneNumberValue: phoneNumberValue,
      mobileValue: mobileValue,
      emailValue: emailValue,
      urlValue: urlValue,
      streetValue: streetValue,
      plzValue: plzValue,
      cityValue: cityValue,
      priceValue: priceValue,
      managerValue: managerValue,
      managerPhoneValue: managerPhoneValue,
    });
    history.push('/newobject');
  }

  return (
    <div className={styles.container}>
      <Header name="KUNDENDATEN" />
      <main className={styles.cardWrapper}>
        <form onSubmit={(event) => handleSubmit(event)}>
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
            priceValue={priceValue}
            setPriceValue={setPriceValue}
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
        goBack={'/newobject'}
        goForward={'/'}
      />
    </div>
  );
}
