"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { useSelectContext } from "../select";
import { OptionProps } from "../select/types";

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
        variant === "secondary" &&
          "hover:bg-brand-600/30 max-md:hover:bg-brand-600/20",
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
