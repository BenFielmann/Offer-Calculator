import React from 'react';
import BurgerIcon from '../assets/BurgerIcon';
import styles from './Header.module.css';

export type Headerprops = {
  activeLink: boolean;
  onClick: () => void;
};

function Header({ activeLink, onClick }: Headerprops): JSX.Element {
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
        {...(activeLink === true ? active : inactive)}
      />
      <h1 className={styles.heading}> ANGEBOTS RECHNER </h1>
    </header>
  );
}

export default Header;
