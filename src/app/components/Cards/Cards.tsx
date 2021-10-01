import React from 'react';
import CheckIcon from '../assets/CheckIcon';
import QuestionIcon from '../assets/QuestionIcon';
import styles from './Cards.module.css';
import Button from '../Button/Button';

export type CardsProps = {
  type?: string;
  name: string;
  onClick?: () => void;
};

export default function Cards({
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
            <Button onClick={onClick} type="add" />
          </div>
        </section>
      )}
      {type === 'asking' && (
        <section className={styles.card}>
          <p className={styles.textInput}>{name}</p>
          <div className={styles.buttongroup}>
            <QuestionIcon className={styles.icon}>{[type]}</QuestionIcon>
            <Button onClick={onClick} type="add" />
          </div>
        </section>
      )}
      {type === 'chose' && (
        <section className={styles.card}>
          <p className={styles.textInput}>{name}</p>
          <Button onClick={onClick} className={styles.addbutton} type="add" />
        </section>
      )}
    </div>
  );
}
