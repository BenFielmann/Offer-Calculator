import useLocalStorage from './useLocalStorage';

type details = {
  companyValue: string;
  ceoValue: string;
  phoneNumberValue: string;
  mobileValue: string;
  emailValue: string;
  urlValue: string;
  streetValue: string;
  plzValue: string;
  cityValue: string;
  managerValue: string;
  managerPhoneValue: string;
};

export default function useDetails(): {
  details: {
    companyValue: string;
    ceoValue: string;
    phoneNumberValue: string;
    mobileValue: string;
    emailValue: string;
    urlValue: string;
    streetValue: string;
    plzValue: string;
    cityValue: string;
    managerValue: string;
    managerPhoneValue: string;
  };
  addDetails: (detail: details) => void;
} {
  const [details, setDetails] = useLocalStorage<details>('details', {
    companyValue: '0',
    ceoValue: '0',
    phoneNumberValue: '0',
    mobileValue: '0',
    emailValue: '0',
    urlValue: '0',
    streetValue: '0',
    plzValue: '0',
    cityValue: '0',
    managerValue: '0',
    managerPhoneValue: '0',
  });
  function addDetails(detail: details) {
    setDetails(detail);
  }

  return {
    details,
    addDetails,
  };
}
