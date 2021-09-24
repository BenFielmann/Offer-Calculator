import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import BurgerIcon from '../assets/BurgerIcon';
import '@szhsin/react-menu/dist/index.css';
import './CustomReactMenu.css';
import styles from './DropdownMenu.module.css';

export default function DropdownMenu(): JSX.Element {
  return (
    <Menu
      menuButton={
        <MenuButton className={styles.button}>
          {' '}
          <BurgerIcon className={styles.burgerIcon} />{' '}
        </MenuButton>
      }
    >
      <MenuItem>Profil Übersicht</MenuItem>
      <MenuItem>Kunden Übersicht</MenuItem>
      <MenuItem>Stundensatz Rechner</MenuItem>
      <MenuItem>Quadratmeter Rechner</MenuItem>
    </Menu>
  );
}
