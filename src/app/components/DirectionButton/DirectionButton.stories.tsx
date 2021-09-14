import React from 'react';
import DirectionButton from './DirectionButton';

export default {
  title: 'Component/DirectionButton',
  component: DirectionButton,
};

export const BackButton = (): JSX.Element => <DirectionButton type="back" />;
export const HomeButton = (): JSX.Element => <DirectionButton type="home" />;
export const ForwardButton = (): JSX.Element => (
  <DirectionButton type="forward" />
);
