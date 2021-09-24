import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const HeaderComponent = (): JSX.Element => (
  <Header name="ANGEBOTSRECHNER" />
);
