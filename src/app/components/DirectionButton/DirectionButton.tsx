import React from 'react';
import BackIcon from '../assets/BackIcon';
import HomeIcon from '../assets/HomeIcon';
import ForwardIcon from '../assets/ForwardIcon';
import classes from './DirectionButton.module.css';
import { Link } from 'react-router-dom';

type ButtonProps = {
  type: 'back' | 'home' | 'forward';
};

function DirectionButton({ type }: ButtonProps): JSX.Element {
  const icons = {
    back: <BackIcon />,
    home: <HomeIcon />,
    forward: <ForwardIcon />,
  };

  return (
    <Link className={classes.directionButton} to={''}>
      {icons[type]}
    </Link>
  );
}

export default DirectionButton;
