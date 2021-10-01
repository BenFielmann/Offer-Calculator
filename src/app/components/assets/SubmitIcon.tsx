import React from 'react';

export default function SubmitIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.375 14.375V3.125H26.875V26.875H3.125V14.375H14.375Z"
        fill="#33FF00"
        stroke="#252A2E"
        strokeWidth="2.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.625 8.125V20.625H8.125"
        stroke="black"
        strokeWidth="2.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.625 18.125L8.125 20.625L10.625 23.125"
        stroke="black"
        strokeWidth="2.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
