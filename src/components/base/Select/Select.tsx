"use client";

import {
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from "react";
import cn from "@/utils/cn";
import { produce } from "immer";
import Option from "./Option";

import { SelectProps, DataMap } from "./types";
import { RightArrowIcon } from "@/Icons/Icons";

const defaultContextValue = {
  variant: "secondary" as string,
  addDataMap: (key: string, value: string) => {},
  setSelectedKey: (value: string) => {},
  setIsOptionsCollapsed: (value: boolean) => {},
};

const SelectContext = createContext(defaultContextValue);
export const useSelectContext = () => useContext(SelectContext);

function Select({
  variant = "secondary",
  placeholder = "Select Value",
  value = "",
  children,
}: Readonly<SelectProps>) {
  const [selectedKey, setSelectedKey] = useState<string>(value);
  const [isOptionsCollapsed, setIsOptionsCollapsed] = useState<boolean>(true);
  const [dataMap, setDataMap] = useState<DataMap>({});

  const addDataMap = useCallback((key: string, value: string) => {
    setDataMap(
      produce((draft) => {
        draft[key] = value;
      }),
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      variant,
      addDataMap,
      setSelectedKey,
      setIsOptionsCollapsed,
    }),
    [variant, addDataMap],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative inline-block">
        <button
          type="button"
          className={cn(
            "w-full rounded-md px-2 py-1",
            variant === "secondary" && "w-[175px]",
            variant === "secondary" && "bg-[#cdccd1]",
          )}
          onClick={() => setIsOptionsCollapsed((prev) => !prev)}
        >
          <span className="flex justify-between gap-3 text-[15px]">
            {selectedKey === "" && <span>{placeholder ?? "Select Value"}</span>}
            {selectedKey !== "" && (
              <span>{dataMap[selectedKey] ?? selectedKey}</span>
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
            variant === "secondary" && "border border-gray-400 bg-[#cdccd1]",
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
