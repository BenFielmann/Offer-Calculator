import React from 'react';
import BackIcon from '../assets/BackIcon';
import HomeIcon from '../assets/HomeIcon';
import ForwardIcon from '../assets/ForwardIcon';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export type Navigationprops = {
  isHomeActive?: boolean;
  isFirstStep?: boolean;
  callToAction?: boolean;
  goBack: string;
  goForward: string;
};
/*  */
function Navigation({
  isHomeActive,
  isFirstStep,
  callToAction,
  goBack,
  goForward,
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
      <Link to={goBack}>
        <BackIcon
          className={styles.navigationIcons}
          {...(isFirstStep ? disabledStyle : clickableStyle)}
        />
      </Link>

      <Link to="/">
        <HomeIcon
          className={styles.navigationIcons}
          {...(isHomeActive ? homeActiveStyle : clickableStyle)}
        />
      </Link>

      <Link to={goForward}>
        <ForwardIcon
          className={styles.navigationIcons}
          {...(callToAction ? callToActionStyle : disabledStyle)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
