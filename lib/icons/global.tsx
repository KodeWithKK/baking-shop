import { SVGProps } from "react";
type IconProps = Readonly<SVGProps<SVGSVGElement>>;

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={1.3}>
        <circle cx={11} cy={11} r={6}></circle>
        <path strokeLinecap="round" d="M11 8a3 3 0 0 0-3 3m12 9l-3-3"></path>
      </g>
    </svg>
  );
}

export function HeartOutlineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.541 3.948a3.25 3.25 0 00-4.595-.012 3.25 3.25 0 00.012 4.595l4.707 4.708a.5.5 0 00.707 0l4.683-4.68a3.25 3.25 0 00-.012-4.594 3.25 3.25 0 00-4.601-.012l-.447.448zm4.805 3.905L8.02 12.178 3.665 7.824a2.25 2.25 0 01-.012-3.18 2.25 2.25 0 013.181.01l.81.81a.5.5 0 00.715-.008l.79-.796a2.25 2.25 0 013.186.012 2.25 2.25 0 01.011 3.181"
      />
    </svg>
  );
}

export function HeartSolidIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 01-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0162-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0162 62"
      />
    </svg>
  );
}

export function CartOutlineIcon(props: IconProps) {
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

export function DividerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 3v18a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0"
      ></path>
    </svg>
  );
}

export function UserOutlineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 7.5a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0M12 4.75a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5m-4 10A2.25 2.25 0 005.75 17v1.188c0 .018.013.034.031.037 4.119.672 8.32.672 12.438 0a.04.04 0 00.031-.037V17A2.25 2.25 0 0016 14.75h-.34a.3.3 0 00-.079.012l-.865.283a8.75 8.75 0 01-5.432 0l-.866-.283a.3.3 0 00-.077-.012zM4.25 17A3.75 3.75 0 018 13.25h.34q.28.001.544.086l.866.283a7.25 7.25 0 004.5 0l.866-.283c.175-.057.359-.086.543-.086H16A3.75 3.75 0 0119.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.1 40.1 0 01-12.92 0 1.54 1.54 0 01-1.29-1.517z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function RightArrowIcon(props: IconProps) {
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

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
      />
    </svg>
  );
}

export function ItemsListIcon(props: IconProps) {
  return (
    <svg height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M208 32H48a16 16 0 00-16 16v160a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16m-16 152H64a8 8 0 010-16h128a8 8 0 010 16m0-48H64a8 8 0 010-16h128a8 8 0 010 16m0-48H64a8 8 0 010-16h128a8 8 0 010 16"
      />
    </svg>
  );
}

export function DeliveryIcon(props: IconProps) {
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

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.207 6.793a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L10 15.586l8.793-8.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="-0.5 0 48 48" {...props}>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <path
          d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 00.213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 019.827 24"
          fill="#FBBC05"
          transform="translate(-401 -860) translate(401 860)"
        />
        <path
          d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 00-21.09 13.071l7.908 6.04a13.849 13.849 0 0113.182-9.51"
          fill="#EB4335"
          transform="translate(-401 -860) translate(401 860)"
        />
        <path
          d="M23.714 37.867a13.849 13.849 0 01-13.182-9.51l-7.909 6.038a23.43 23.43 0 0021.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
          fill="#34A853"
          transform="translate(-401 -860) translate(401 860)"
        />
        <path
          d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
          fill="#4285F4"
          transform="translate(-401 -860) translate(401 860)"
        />
      </g>
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="38.658 12.828 207.085 207.085" {...props}>
      <path
        d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
        fill="#3c5a9a"
      />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#020817"
        d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
      />
    </svg>
  );
}
