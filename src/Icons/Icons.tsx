type Props = {
  [key: string]: any;
};

function HeartOutlineIcon(props: Readonly<Props>) {
  return (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 00-62 62c0 70 103.79 126.66 108.21 129a8 8 0 007.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 00-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0146-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0014.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0146 46c0 53.61-77.76 102.15-96 112.8"
      />
    </svg>
  );
}

function HeartSolidIcon(props: Readonly<Props>) {
  return (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 01-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0162-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0162 62"
      />
    </svg>
  );
}

function CartOutlineIcon(props: Readonly<Props>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <circle
        cx={176}
        cy={416}
        r={16}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <circle
        cx={400}
        cy={416}
        r={16}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M48 80h64l48 272h256"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
      />
    </svg>
  );
}

function RightArrowIcon(props: Readonly<Props>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 17l5-5-5-5"
      />
    </svg>
  );
}

function CloseIcon(props: Readonly<Props>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
      />
    </svg>
  );
}

function ItemsListIcon(props: Readonly<Props>) {
  return (
    <svg height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M208 32H48a16 16 0 00-16 16v160a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16m-16 152H64a8 8 0 010-16h128a8 8 0 010 16m0-48H64a8 8 0 010-16h128a8 8 0 010 16m0-48H64a8 8 0 010-16h128a8 8 0 010 16"
      />
    </svg>
  );
}

function DeliveryIcon(props: Readonly<Props>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"
      />
      <path
        fill="currentColor"
        d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
      />
    </svg>
  );
}

export {
  HeartOutlineIcon,
  HeartSolidIcon,
  CartOutlineIcon,
  RightArrowIcon,
  CloseIcon,
  ItemsListIcon,
  DeliveryIcon,
};
