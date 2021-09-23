import React from 'react';
import AddIcon from '../assets/AddIcon';
import BurgerIcon from '../assets/BurgerIcon';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import MailIcon from '../assets/MailIcon';
import CalculateIcon from '../assets/CalculateIcon';
import classes from './Button.module.css';

type ButtonProps = {
  type: 'add' | 'burger' | 'delete' | 'edit' | 'mail' | 'calculate';
  className?: string;
  onClick?: () => void;
};

function Button({ type, className, onClick }: ButtonProps): JSX.Element {
  const icons = {
    add: <AddIcon />,
    burger: <BurgerIcon />,
    delete: <DeleteIcon />,
    edit: <EditIcon />,
    mail: <MailIcon />,
    calculate: <CalculateIcon />,
  };

  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {icons[type]}
    </button>
  );
}

export default Button;
