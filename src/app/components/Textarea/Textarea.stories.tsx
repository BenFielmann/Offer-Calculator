import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const EditableTextArea = (): JSX.Element => (
  <Textarea
    isEditable={true}
    setIsEditable={console.log}
    onDeleteClick={console.log}
    companyValue="Muster Firma"
    setCompanyValue={console.log}
    ceoValue=""
    setCeoValue={console.log}
    phoneNumberValue=""
    setPhoneNumberValue={console.log}
    mobileValue=""
    setMobileValue={console.log}
    emailValue=""
    setEmailValue={console.log}
    urlValue=""
    setUrlValue={console.log}
    streetValue=""
    setStreetValue={console.log}
    plzValue=""
    setPlzValue={console.log}
    cityValue=""
    setCityValue={console.log}
    managerValue=""
    setManagerValue={console.log}
    managerPhoneValue=""
    setManagerPhoneValue={console.log}
  />
);
export const TextArea = (): JSX.Element => (
  <Textarea
    isEditable={false}
    setIsEditable={console.log}
    onDeleteClick={console.log}
    companyValue="Muster Firma"
    ceoValue="Muster Mann"
    phoneNumberValue="0...."
    mobileValue="0...."
    emailValue="Muster@mail.de"
    urlValue="www.Muster.de"
    streetValue="Muster Straße"
    plzValue="0...."
    cityValue="Muster Stadt"
    managerValue="Muster Frau"
    managerPhoneValue="0...."
  />
);
