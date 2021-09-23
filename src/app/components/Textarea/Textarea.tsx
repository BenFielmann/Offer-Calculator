import React from 'react';
import CheckIcon from '../assets/CheckIcon';
import styles from './Textarea.module.css';
import Button from '../Button/Button';

export type TextareaProps = {
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
  onDeleteClick: () => void;
  companyValue: string;
  setCompanyValue?: (value: string) => void;
  ceoValue: string;
  setCeoValue?: (value: string) => void;
  phoneNumberValue: string;
  setPhoneNumberValue?: (value: string) => void;
  mobileValue: string;
  setMobileValue?: (value: string) => void;
  emailValue: string;
  setEmailValue?: (value: string) => void;
  urlValue: string;
  setUrlValue?: (value: string) => void;
  streetValue: string;
  setStreetValue?: (value: string) => void;
  plzValue: string;
  setPlzValue?: (value: string) => void;
  cityValue: string;
  setCityValue?: (value: string) => void;
  managerValue: string;
  setManagerValue?: (value: string) => void;
  managerPhoneValue: string;
  setManagerPhoneValue?: (value: string) => void;
};

export default function Textarea({
  isEditable,
  setIsEditable,
  onDeleteClick,
  companyValue,
  setCompanyValue,
  ceoValue,
  setCeoValue,
  phoneNumberValue,
  setPhoneNumberValue,
  mobileValue,
  setMobileValue,
  emailValue,
  setEmailValue,
  urlValue,
  setUrlValue,
  streetValue,
  setStreetValue,
  plzValue,
  setPlzValue,
  cityValue,
  setCityValue,
  managerValue,
  setManagerValue,
  managerPhoneValue,
  setManagerPhoneValue,
}: TextareaProps): JSX.Element {
  return (
    <section className={styles.main}>
      {isEditable &&
      setCompanyValue &&
      setCeoValue &&
      setPhoneNumberValue &&
      setMobileValue &&
      setEmailValue &&
      setUrlValue &&
      setStreetValue &&
      setPlzValue &&
      setCityValue &&
      setManagerValue &&
      setManagerPhoneValue ? (
        <>
          <input
            value={companyValue}
            onChange={(event) => setCompanyValue(event.target.value)}
            placeholder="Firma:"
            type="text"
            className={styles.textInput}
          />
          <input
            value={ceoValue}
            onChange={(event) => setCeoValue(event.target.value)}
            placeholder="Geschäftsleitung:"
            type="text"
            className={styles.textInput}
          />
          <input
            value={phoneNumberValue}
            onChange={(event) => setPhoneNumberValue(event.target.value)}
            placeholder="Tel/Fax:"
            type="tel"
            className={styles.textInput}
          />
          <input
            value={mobileValue}
            onChange={(event) => setMobileValue(event.target.value)}
            placeholder="Mobil:"
            type="tel"
            className={styles.textInput}
          />
          <input
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
            placeholder="E-Mail:"
            type="email"
            className={styles.textInput}
          />
          <input
            value={urlValue}
            onChange={(event) => setUrlValue(event.target.value)}
            placeholder="Web:"
            type="url"
            className={styles.textInput}
          />
          <input
            value={streetValue}
            onChange={(event) => setStreetValue(event.target.value)}
            placeholder="Straße / Nr:"
            type="text"
            className={styles.textInput}
          />
          <input
            value={plzValue}
            onChange={(event) => setPlzValue(event.target.value)}
            placeholder="PLZ:"
            type="text"
            className={styles.textInput}
          />
          <input
            value={cityValue}
            onChange={(event) => setCityValue(event.target.value)}
            placeholder="Stadt:"
            type="text"
            className={styles.textInput}
          />
          <input
            value={managerValue}
            onChange={(event) => setManagerValue(event.target.value)}
            placeholder="Leitender Angestellter (Ansprechpartner):"
            type="text"
            className={styles.textInput}
          />
          <input
            value={managerPhoneValue}
            onChange={(event) => setManagerPhoneValue(event.target.value)}
            placeholder="Tel:"
            type="tel"
            className={styles.textInput}
          />
        </>
      ) : (
        <>
          <p className={styles.InputOutput}>Firma: {companyValue}</p>
          <p className={styles.InputOutput}>Geschäftsleitung: {ceoValue}</p>
          <p className={styles.InputOutput}>Tel/Fax: {phoneNumberValue}</p>
          <p className={styles.InputOutput}>Mobil: {mobileValue}</p>
          <p className={styles.InputOutput}>E-Mail: {emailValue}</p>
          <p className={styles.InputOutput}>Web: {urlValue}</p>
          <p className={styles.InputOutput}>Straße: {streetValue}</p>
          <p className={styles.InputOutput}>PLZ: {plzValue}</p>
          <p className={styles.InputOutput}>Stadt: {cityValue}</p>
          <p className={styles.InputOutput}>
            Leitender Angstellter (Ansprechpartner): {managerValue}
          </p>
          <p className={styles.InputOutput}>Tel: {managerPhoneValue}</p>
        </>
      )}
      <div className={styles.buttongroup}>
        <Button type="edit" onClick={() => setIsEditable(true)} />
        {!isEditable && <CheckIcon className={styles.icon}></CheckIcon>}
        {!isEditable && <Button type="delete" onClick={onDeleteClick} />}
      </div>
    </section>
  );
}
