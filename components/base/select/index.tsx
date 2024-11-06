"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { produce } from "immer";

import { RightArrowIcon } from "@/lib/icons/global";
import { cn } from "@/lib/utils";

import Option from "./option";
import { DataMap, SelectProps } from "./types";

interface ISelectContext {
  variant: string;
  addDataMap: (value: string, text: string) => void;
  handleOptionClick: (value: string) => void;
}

const SelectContext = createContext<ISelectContext | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "useSelectContext must be used within a SelectContextProvider",
    );
  }

  return context;
};
function Select({
  variant = "secondary",
  placeholder = "Select Value",
  onChange,
  defaultValue = "",
  children,
}: Readonly<SelectProps>) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [isOptionsCollapsed, setIsOptionsCollapsed] = useState<boolean>(true);
  const [dataMap, setDataMap] = useState<DataMap>({}); // value-text map

  const addDataMap = useCallback((value: string, text: string) => {
    setDataMap(
      produce((draft) => {
        draft[value] = text;
      }),
    );
  }, []);

  const handleOptionClick = useCallback(
    (key: string) => {
      setSelectedValue(key);
      setIsOptionsCollapsed(true);
      onChange?.(key);
    },
    [onChange],
  );

  const contextValue = useMemo(
    () => ({
      variant,
      addDataMap,
      handleOptionClick,
    }),
    [variant, addDataMap, handleOptionClick],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative inline-block">
        <button
          type="button"
          className={cn(
            "w-full rounded-md px-2 py-1",
            variant === "secondary" && "w-[175px]",
            variant === "secondary" &&
              "bg-gray-900/30 max-md:bg-gray-900/[.25]",
          )}
          onClick={() => {
            setIsOptionsCollapsed((prev) => !prev);
          }}
        >
          <span className="flex justify-between gap-3 text-[15px]">
            {selectedValue === "" && <span>{placeholder}</span>}
            {selectedValue !== "" && (
              <span>{dataMap[selectedValue] ?? selectedValue}</span>
            )}
            <RightArrowIcon
              className={cn(
                "h-6 w-6 -rotate-90",
                isOptionsCollapsed && "rotate-90",
              )}
            />
          </span>
        </button>

        <div
          className={cn(
            "absolute left-0 top-[36px] overflow-hidden rounded-md",
            variant === "secondary" &&
              "border border-gray-400 bg-[#cdccd1] max-md:bg-[#d8d7db]",
          )}
        >
          {!isOptionsCollapsed && children}
        </div>
      </div>
    </SelectContext.Provider>
  );
}

export { Select, Option };
export default Select;
