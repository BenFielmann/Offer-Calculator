import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Calculator.module.css';

export default function Calculator(): JSX.Element {
  const [squareMeterPerHour, setSquareMeterPerHour] = useState('0');
  const [salaryPerHour, setSalaryPerHour] = useState('0');
  const [squareMeter, setSquareMeter] = useState('0');
  const [result, setResult] = useState(0);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const m2 = parseInt(squareMeter);
    const m2h = parseInt(squareMeterPerHour);
    const sph = parseInt(salaryPerHour);
    const costEstimate = (m2 / m2h) * sph;
    setResult(costEstimate);
  }
  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <label className={styles.label} htmlFor="squareMeterPerHour">
        Quatratmeter pro Stunde:
      </label>
      <input
        value={squareMeterPerHour}
        onChange={(event) => setSquareMeterPerHour(event.target.value)}
        type="number"
        className={styles.metaData}
      />
      <label className={styles.label} htmlFor="salaryPerHour">
        Stundenlohn:
      </label>
      <input
        value={salaryPerHour}
        onChange={(event) => setSalaryPerHour(event.target.value)}
        type="number"
        className={styles.metaData}
      />
      <label className={styles.label} htmlFor="squareMeter">
        Quatratmeter:
      </label>
      <input
        value={squareMeter}
        onChange={(event) => setSquareMeter(event.target.value)}
        type="number"
        className={styles.metaData}
      />
      <Button className={styles.button} type="calculate" />
      <label className={styles.label} htmlFor="p">
        Ergebnis bzw. Preisangebot:
      </label>
      <p className={styles.result}>{result}€</p>
    </form>
  );
}
