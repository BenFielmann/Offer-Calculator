import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import Cards from '../../components/Cards/Cards';
import styles from './CompanyOverview.module.css';

export default function CompanyOverview(): JSX.Element {
  const mockUpData = [
    {
      tittle: 'Profil Hinzufügen',
      type: 'chose',
      goTo: '/companydetails',
    },
  ];
  return (
    <div className={styles.container}>
      <Header name="FIRMEN ÜBERSICHT" />
      <main className={styles.cardWrapper}>
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
        {mockUpData.map((card) => (
          <Cards
            onClick={() => console.log('hey')}
            name={card.tittle}
            type={card.type}
            goTo={card.goTo}
          />
        ))}
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/companydetails'}
        goForward={'/profilesettings'}
      />
    </div>
  );
}
