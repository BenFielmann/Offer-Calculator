import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const AddButton = (): JSX.Element => <Button type="add" />;
export const BurgerButton = (): JSX.Element => <Button type="burger" />;
export const DeleteButton = (): JSX.Element => <Button type="delete" />;
export const EditButton = (): JSX.Element => <Button type="edit" />;
export const MailButton = (): JSX.Element => <Button type="mail" />;
