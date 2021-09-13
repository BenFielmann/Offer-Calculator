import React from 'react';
import BurgerButtonIcon from '../assets/BurgerButtonIcon';
import styles from './Header.module.css';

export type Headerprops = {
  activeLink: 'burgerActive' | 'burgerInactive';
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
    <nav className={`${styles.header}`}>
      <BurgerButtonIcon
        onClick={onClick}
        className={styles.burgerIcon}
        {...(activeLink === 'burgerActive' ? active : inactive)}
      />
      <h1 className={styles.heading}> ANGEBOTS RECHNER </h1>
    </nav>
  );
}

export default Header;
