import React from 'react';
import Cards from './Cards';

export default {
  title: 'Component/Cards',
  component: Cards,
};

export const CheckedCard = (): JSX.Element => <Cards type="checked" />;
export const AskingCard = (): JSX.Element => <Cards type="asking" />;
export const choseCard = (): JSX.Element => <Cards type="chose" />;
