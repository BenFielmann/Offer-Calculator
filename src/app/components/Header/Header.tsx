import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import styles from './Header.module.css';

function Header(): JSX.Element {
  return (
    <header className={`${styles.header}`}>
      <DropdownMenu activeButton={false} onClick={() => console.log('Klick')} />
      <h1 className={styles.heading}> ANGEBOTS RECHNER </h1>
    </header>
  );
}

export default Header;
