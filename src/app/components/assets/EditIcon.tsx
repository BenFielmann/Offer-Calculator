import React from 'react';

export default function EditIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.2525V18.0025H4.21875L16.6613 6.9425L12.4425 3.1925L0 14.2525ZM19.9238 4.0425C20.3625 3.6525 20.3625 3.0225 19.9238 2.6325L17.2913 0.2925C16.8525 -0.0975 16.1438 -0.0975 15.705 0.2925L13.6463 2.1225L17.865 5.8725L19.9238 4.0425Z"
      />
    </svg>
  );
}
