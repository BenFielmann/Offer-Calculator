import React from 'react';

export default function AddButtonIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
        fill="#03BEF9"
      />
    </svg>
  );
}
