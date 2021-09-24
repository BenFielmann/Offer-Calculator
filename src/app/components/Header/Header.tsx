import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import styles from './Header.module.css';

export type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps): JSX.Element {
  return (
    <header className={`${styles.header}`}>
      <DropdownMenu />
      <h1 className={styles.heading}>{name}</h1>
    </header>
  );
}
