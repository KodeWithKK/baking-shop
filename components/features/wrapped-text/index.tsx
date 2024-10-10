"use client";

import { useMemo, useState } from "react";

type Props = {
  wrapLength?: number;
  children: string;
  [key: string]: any;
};

function WrappedText({
  wrapLength = 28,
  children,
  ...restProps
}: Readonly<Props>) {
  const [showWrappedText, setShowWrappedText] = useState(true);

  const wrappedText = useMemo((): string => {
    const words = children.split(" ");
    if (words.length > wrapLength) {
      return words.slice(0, wrapLength).join(" ") + "... ";
    } else return children;
  }, [children, wrapLength]);

  return (
    <p {...restProps}>
      <span>{showWrappedText ? wrappedText : children + " "}</span>
      <ActionButton onClick={() => setShowWrappedText((prev) => !prev)}>
        {showWrappedText ? "Read More" : "Read Less"}
      </ActionButton>
    </p>
  );
}

type ActionButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function ActionButton({ onClick, children }: Readonly<ActionButtonProps>) {
  return (
    <button
      type="button"
      className="text-[#468fce] underline underline-offset-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default WrappedText;
