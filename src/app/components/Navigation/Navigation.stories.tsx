import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const BackActive = (): JSX.Element => (
  <Navigation isHomeActive='clickableStyle' />
);
export const BackInactive = (): JSX.Element => (
  <Navigation activeLink="backInactive" />
);

export const HomeActive = (): JSX.Element => (
  <Navigation activeLink="homeActive" />
);
export const HomeInactive = (): JSX.Element => (
  <Navigation activeLink="homeInactive" />
);

export const ForwardActive = (): JSX.Element => (
  <Navigation activeLink="forwardActive" />
);
export const ForwardInactive = (): JSX.Element => (
  <Navigation activeLink="forwardInactive" />
);
