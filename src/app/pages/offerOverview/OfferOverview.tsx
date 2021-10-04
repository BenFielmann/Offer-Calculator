import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Textarea from '../../components/Textarea/Textarea';
import Cards from '../../components/Cards/Cards';
import styles from './OfferOverview.module.css';

export default function OfferOverview(): JSX.Element {
  const mockUpData = [
    {
      tittle: 'Angebot Hinzufügen',
      type: 'chose',
      goTo: '/customerdetails',
    },
  ];

  return (
    <div className={styles.container}>
      <Header name="ANGEBOTS ÜBERSICHT" />
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
          priceValue={'32,50'}
        />
        <Textarea
          isEditable={false}
          setIsEditable={console.log}
          onDeleteClick={console.log}
          companyValue="Kunde GmbH"
          ceoValue="Kunde"
          phoneNumberValue="040"
          mobileValue="0178"
          emailValue="Kunde@mail.de"
          urlValue="www.Kunde.de"
          streetValue="kundetraße"
          plzValue="0000"
          cityValue="Kunde Stadt"
          managerValue="Kunde Assitent"
          managerPhoneValue="0401"
          priceValue={'32,50'}
        />
        {mockUpData.map((card) => (
          <Cards
            onClick={() => console.log('hey')}
            name={card.tittle}
            type={card.type}
            goTo={''}
          />
        ))}
      </main>
      <Navigation
        callToAction={true}
        isFirstStep={false}
        isHomeActive={false}
        goBack={'/customeroverview'}
        goForward={'/mail'}
      />
    </div>
  );
}
