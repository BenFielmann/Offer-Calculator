import React from 'react';
import AddIcon from '../assets/AddIcon';
import BurgerIcon from '../assets/BurgerIcon';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import MailIcon from '../assets/MailIcon';
import classes from './Button.module.css';

type ButtonProps = {
  type: 'add' | 'burger' | 'delete' | 'edit' | 'mail';
};

function Button({ type }: ButtonProps): JSX.Element {
  const icons = {
    add: <AddIcon />,
    burger: <BurgerIcon />,
    delete: <DeleteIcon />,
    edit: <EditIcon />,
    mail: <MailIcon />,
  };

  return <button className={classes.button}>{icons[type]}</button>;
}

export default Button;
