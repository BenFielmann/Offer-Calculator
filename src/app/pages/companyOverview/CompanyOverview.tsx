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
          companyValue="Deine"
          ceoValue="Du"
          phoneNumberValue="040"
          mobileValue="0178"
          emailValue="Deine@mail.de"
          urlValue="www.Deine-Page.de"
          streetValue="Deine Straße"
          plzValue="22222"
          cityValue="Deine Stadt"
          managerValue="Er"
          managerPhoneValue="0179"
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
        goBack={'/companydetails'}
        goForward={'/profilesettings'}
      />
    </div>
  );
}
