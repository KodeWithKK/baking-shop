import { SVGProps } from "react";
type IconProps = Readonly<SVGProps<SVGSVGElement>>;

export function BeatLoaderIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx={4} cy={12} r={3} fill="currentColor">
        <animate
          id="b"
          attributeName="r"
          begin="0;a.end-0.25s"
          dur="0.75s"
          values="3;.2;3"
        />
      </circle>
      <circle cx={12} cy={12} r={3} fill="currentColor">
        <animate
          attributeName="r"
          begin="b.end-0.6s"
          dur="0.75s"
          values="3;.2;3"
        />
      </circle>
      <circle cx={20} cy={12} r={3} fill="currentColor">
        <animate
          id="a"
          attributeName="r"
          begin="b.end-0.45s"
          dur="0.75s"
          values="3;.2;3"
        />
      </circle>
    </svg>
  );
}
