import React from 'react';
import BackButtonIcon from '../assets/BackButtonIcon';
import HomeButtonIcon from '../assets/HomeButtonIcon';
import ForwardButtonIcon from '../assets/ForwardButtonIcon';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export type Navigationprops = {
  isHomeActive?: boolean;
  isFirstStep?: boolean;
  callToAction?: boolean;
};
/*  */
function Navigation({
  isHomeActive,
  isFirstStep,
  callToAction,
}: Navigationprops): JSX.Element {
  const clickableStyle = {
    fill: 'var(--text-primary)',
  };

  const disabledStyle = {
    fill: 'var(--bg-primary)',
  };

  const callToActionStyle = {
    fill: 'var(--color-secondary)',
  };

  const homeActiveStyle = {
    fill: 'var(--text-secondary)',
  };

  return (
    <nav className={`${styles.navigation}`}>
      <Link to="/back">
        <BackButtonIcon
          className={styles.navigationIcons}
          {...(isFirstStep ? disabledStyle : clickableStyle)}
        />
      </Link>
      <Link to="/home">
        <HomeButtonIcon
          className={styles.navigationIcons}
          {...(isHomeActive ? homeActiveStyle : clickableStyle)}
        />
      </Link>
      <Link to="/forward">
        <ForwardButtonIcon
          className={styles.navigationIcons}
          {...(callToAction ? callToActionStyle : disabledStyle)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
