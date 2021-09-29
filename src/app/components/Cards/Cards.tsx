import React from 'react';
import CheckIcon from '../assets/CheckIcon';
import QuestionIcon from '../assets/QuestionIcon';
import styles from './Cards.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export type CardsProps = {
  type: string;
  name: string;
  goTo: string;
  onClick?: () => void;
};

export default function Cards({
  goTo,
  type,
  name,
  onClick,
}: CardsProps): JSX.Element {
  return (
    <div>
      {type === 'checked' && (
        <section className={styles.card}>
          <p className={styles.textInput}>{name}</p>
          <div className={styles.buttongroup}>
            <CheckIcon className={styles.icon}>{[type]}</CheckIcon>
            <Link to={goTo}>
              <Button onClick={onClick} type="add" />
            </Link>
          </div>
        </section>
      )}
      {type === 'asking' && (
        <section className={styles.card}>
          <p className={styles.textInput}>{name}</p>
          <div className={styles.buttongroup}>
            <QuestionIcon className={styles.icon}>{[type]}</QuestionIcon>
            <Link to={goTo}>
              <Button onClick={onClick} type="add" />
            </Link>
          </div>
        </section>
      )}
      {type === 'chose' && (
        <section className={styles.card}>
          <p className={styles.textInput}>{name}</p>
          <Link to={goTo}>
            <Button onClick={onClick} className={styles.addbutton} type="add" />
          </Link>
        </section>
      )}
    </div>
  );
}
