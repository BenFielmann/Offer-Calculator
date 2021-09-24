import React from 'react';

export default function BurgerIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="inherite"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0H21.875V4.6875H0V0ZM0 6.25H21.875V10.9375H0V6.25ZM0 12.5H21.875V17.1875H0V12.5Z" />
    </svg>
  );
}
