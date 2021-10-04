import useLocalStorage from './useLocalStorage';

type customerDetails = {
  companyValue: string;
  ceoValue: string;
  phoneNumberValue: string;
  mobileValue: string;
  emailValue: string;
  urlValue: string;
  streetValue: string;
  plzValue: string;
  cityValue: string;
  priceValue: string;
  managerValue: string;
  managerPhoneValue: string;
};

export default function useCustomerDetails(): {
  customerDetails: {
    companyValue: string;
    ceoValue: string;
    phoneNumberValue: string;
    mobileValue: string;
    emailValue: string;
    urlValue: string;
    streetValue: string;
    plzValue: string;
    cityValue: string;
    priceValue: string;
    managerValue: string;
    managerPhoneValue: string;
  };
  addCustomerDetails: (customerDetail: customerDetails) => void;
} {
  const [customerDetails, setCustomerDetails] =
    useLocalStorage<customerDetails>('customerDetails', {
      companyValue: '0',
      ceoValue: '0',
      phoneNumberValue: '0',
      mobileValue: '0',
      emailValue: '0',
      urlValue: '0',
      streetValue: '0',
      plzValue: '0',
      cityValue: '0',
      priceValue: '0',
      managerValue: '0',
      managerPhoneValue: '0',
    });
  function addCustomerDetails(customerDetail: customerDetails) {
    setCustomerDetails(customerDetail);
  }

  return {
    customerDetails,
    addCustomerDetails,
  };
}
