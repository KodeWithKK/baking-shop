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
  const [isCollapsed, setIsCollapsed] = useState(true);

  const wrappedText = useMemo((): string => {
    const words = children.split(" ");
    if (words.length > wrapLength) {
      return words.slice(0, wrapLength).join(" ") + "... ";
    } else return children;
  }, [children, wrapLength]);

  return (
    <p {...restProps}>
      <span>
        {isCollapsed && wrappedText}
        {isCollapsed && children.split(" ").length > wrapLength && (
          <ReadMoreBtn
            onClick={() => {
              setIsCollapsed(false);
            }}
          />
        )}
      </span>
      <span>{!isCollapsed && children}</span>
    </p>
  );
}

type ReadMoreBtnType = {
  onClick: () => void;
};

function ReadMoreBtn({ onClick }: Readonly<ReadMoreBtnType>) {
  return (
    <button
      type="button"
      className="text-[#468fce] underline underline-offset-4"
      onClick={onClick}
    >
      Read More
    </button>
  );
}

export default WrappedText;
