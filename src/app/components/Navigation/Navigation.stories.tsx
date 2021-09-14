import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const BackActive = (): JSX.Element => <Navigation isFirstStep={false} />;
export const BackInactive = (): JSX.Element => (
  <Navigation isFirstStep={true} />
);

export const HomeActive = (): JSX.Element => <Navigation isHomeActive={true} />;
export const HomeUsable = (): JSX.Element => (
  <Navigation isHomeActive={false} />
);

export const ForwardAction = (): JSX.Element => (
  <Navigation callToAction={true} />
);
export const ForwardInactive = (): JSX.Element => (
  <Navigation callToAction={false} />
);
