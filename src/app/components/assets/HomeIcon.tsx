import React from 'react';

export default function HomeButtonIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.38889 0.588372C8.83974 0.208397 9.41038 0 10 0C10.5896 0 11.1603 0.208397 11.6111 0.588372L19.1111 6.91615C19.6756 7.39059 20 8.08948 20 8.82726V19.7184C20 20.2341 19.7951 20.7286 19.4305 21.0933C19.0658 21.458 18.5713 21.6628 18.0556 21.6628H14.7222C14.2065 21.6628 13.7119 21.458 13.3473 21.0933C12.9826 20.7286 12.7778 20.2341 12.7778 19.7184V14.1628C12.7778 13.9418 12.69 13.7298 12.5337 13.5736C12.3774 13.4173 12.1655 13.3295 11.9444 13.3295H8.05556C7.83454 13.3295 7.62258 13.4173 7.4663 13.5736C7.31002 13.7298 7.22222 13.9418 7.22222 14.1628V19.7184C7.22222 20.2341 7.01736 20.7286 6.65271 21.0933C6.28805 21.458 5.79348 21.6628 5.27778 21.6628H1.94444C1.6891 21.6628 1.43625 21.6125 1.20034 21.5148C0.964427 21.4171 0.750073 21.2739 0.569515 21.0933C0.388956 20.9127 0.24573 20.6984 0.148012 20.4625C0.0502946 20.2266 0 19.9737 0 19.7184V8.82615C0 8.08948 0.324444 7.39059 0.888889 6.91504L8.38889 0.588372Z" />
    </svg>
  );
}
