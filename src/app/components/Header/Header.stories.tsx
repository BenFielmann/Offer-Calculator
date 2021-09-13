import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const HomeActive = (): JSX.Element => (
  <Header activeLink="burgerActive" onClick={() => console.log('Klicked')} />
);
export const HomeInactive = (): JSX.Element => (
  <Header activeLink="burgerInactive" onClick={() => console.log('Klicked')} />
);
