import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import styles from './ProfileOverview.module.css';

export default function ProfileOverview(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header name="PROFIL ÜBERSICHT" />
      <main className={styles.cardWrapper}>
        <Textarea
          isEditable={false}
          setIsEditable={console.log}
          onDeleteClick={console.log}
          companyValue="Web GmbH"
          ceoValue="Benjamin Fielmann"
          phoneNumberValue="040 000000"
          mobileValue="01700000000"
          emailValue="Ben@gmx.de"
          urlValue="www.Ben.de"
          streetValue="Web Straße"
          plzValue="00000"
          cityValue="Hamburg"
          managerValue="Assistent"
          managerPhoneValue="01700000000"
        />
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/profilesetting'}
        goForward={'/'}
      />
    </div>
  );
}
