"use client";

import { useState, useEffect } from "react";
import { useSelectContext } from "./Select";
import cn from "@/utils/cn";

import { OptionProps } from "./types";

function Option({ value, text = value }: Readonly<OptionProps>) {
  const [isDataAdded, setIsDataAdded] = useState<boolean>(false);
  const { variant, addDataMap, handleOptionClick } = useSelectContext();

  useEffect(() => {
    if (!isDataAdded) {
      setIsDataAdded(true);
      addDataMap(value, text);
    }
  }, [isDataAdded, text, value, addDataMap]);

  return (
    <button
      type="button"
      className={cn(
        "w-full px-2 py-1 text-left text-[15px]",
        variant === "secondary" && "hover:bg-orange-600/30",
      )}
      onClick={() => {
        handleOptionClick(value);
      }}
    >
      {text}
    </button>
  );
}

export default Option;
