import React from 'react';
import Calculator from './Calculator';

export default {
  title: 'Component/Calculator',
  component: Calculator,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const CostCalculator = (): JSX.Element => <Calculator />;
