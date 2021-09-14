import React from 'react';

export default function ForwardIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24.1667 12.5L11.6667 25V19.1667H0V5.83333H11.6667V0L24.1667 12.5Z" />
    </svg>
  );
}
