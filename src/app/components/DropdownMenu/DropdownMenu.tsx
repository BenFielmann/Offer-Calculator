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
        <MenuButton className={styles.BurgerIcon}>
          {' '}
          <BurgerIcon />{' '}
        </MenuButton>
      }
    >
      <MenuItem>Profil Übersicht</MenuItem>
      <MenuItem>Kunden Übersicht</MenuItem>
      <MenuItem>Rechner 1</MenuItem>
      <MenuItem>Rechner 2</MenuItem>
      <MenuItem>TodaysPlaceholder</MenuItem>
    </Menu>
  );
}
