import React from 'react';
import Cards from './Cards';

export default {
  title: 'Component/Cards',
  component: Cards,
};

export const CheckedCard = (): JSX.Element => (
  <Cards type="checked" name="Elektriker" />
);
export const AskingCard = (): JSX.Element => (
  <Cards type="asking" name="Elektriker" />
);
export const choseCard = (): JSX.Element => (
  <Cards type="chose" name="Elektriker" />
);
