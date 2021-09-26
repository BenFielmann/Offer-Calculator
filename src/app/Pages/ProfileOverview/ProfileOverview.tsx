import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import styles from './ProfileOverview.module.css';
import { useHistory } from 'react-router';

export default function ProfileOverview(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header name="PROFIL ÜBERSICHT" />
      <main
        onClick={() => history.push('/industries')}
        className={styles.cardWrapper}
      >
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
      <Navigation callToAction={false} isFirstStep={true} isHomeActive={true} />
    </div>
  );
}
