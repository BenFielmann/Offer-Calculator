import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const HomeActive = (): JSX.Element => (
  <Header activeLink={true} onClick={() => console.log('Klicked')} />
);
export const HomeInactive = (): JSX.Element => (
  <Header activeLink={false} onClick={() => console.log('Klicked')} />
);
