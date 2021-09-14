import React from 'react';
import BurgerIcon from '../assets/BurgerIcon';
import styles from './Header.module.css';

export type BurgerIconprops = {
  activeButton: boolean;
  onClick: () => void;
};

function Header({ activeButton, onClick }: BurgerIconprops): JSX.Element {
  const active = {
    fill: 'var(--text-primary)',
  };

  const inactive = {
    fill: 'var(--color-secondary)',
  };

  return (
    <header className={`${styles.header}`}>
      <BurgerIcon
        onClick={onClick}
        className={styles.burgerIcon}
        {...(activeButton === true ? active : inactive)}
      />
      <h1 className={styles.heading}> ANGEBOTS RECHNER </h1>
    </header>
  );
}

export default Header;
