import React from 'react';
import CheckIcon from '../assets/CheckIcon';
import QuestionIcon from '../assets/QuestionIcon';
import styles from './Cards.module.css';
import Button from '../Button/Button';

export type CardsProps = {
  type: 'checked' | 'asking' | 'chose';
};

export default function Cards({ type }: CardsProps): JSX.Element {
  switch (type) {
    case 'checked':
      return (
        <section className={styles.card}>
          <p className={styles.textInput}>Facility Management</p>
          <div className={styles.buttongroup}>
            <CheckIcon className={styles.icon}>{[type]}</CheckIcon>
            <Button type="add" />
          </div>
        </section>
      );
    case 'asking':
      return (
        <section className={styles.card}>
          <p className={styles.textInput}>Firma</p>
          <div className={styles.buttongroup}>
            <QuestionIcon className={styles.icon}>{[type]}</QuestionIcon>
            <Button type="add" />
          </div>
        </section>
      );
    case 'chose':
      return (
        <section className={styles.card}>
          <p className={styles.textInput}>Elektriker</p>
          <Button className={styles.addbutton} type="add" />
        </section>
      );
  }
}
