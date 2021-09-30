import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const BackActive = (): JSX.Element => <Navigation isFirstStep={false} goBack={''} goForward={''} />;
export const BackInactive = (): JSX.Element => (
  <Navigation isFirstStep={true} goBack={''} goForward={''} />
);

export const HomeActive = (): JSX.Element => <Navigation isHomeActive={true} goBack={''} goForward={''} />;
export const HomeUsable = (): JSX.Element => (
  <Navigation isHomeActive={false} goBack={''} goForward={''} />
);

export const ForwardAction = (): JSX.Element => (
  <Navigation callToAction={true} goBack={''} goForward={''} />
);
export const ForwardInactive = (): JSX.Element => (
  <Navigation callToAction={false} goBack={''} goForward={''} />
);
