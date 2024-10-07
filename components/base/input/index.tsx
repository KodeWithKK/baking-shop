"use client";

import { useId, useState, ForwardedRef, forwardRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, OpenEyeIcon, ClosedEyeIcon } from "@/lib/icons/global";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = forwardRef(
  (
    { label, error, Icon, type = "text", ...props }: Readonly<InputProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [selectedType, setSelectedType] = useState<string>(type);
    const inputId = useId();

    const togglePasswordInputType = useCallback(() => {
      setSelectedType((prev) => {
        if (prev === "password") {
          return "text";
        } else return "password";
      });
    }, []);

    return (
      <div
        className={cn(
          type === "checkbox" &&
            "relative inline-flex flex-row-reverse items-center gap-2",
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "inline-block flex-shrink-0 text-[15px]",
              error && "text-orange-600",
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={selectedType}
            id={inputId}
            className={cn(
              "peer block rounded border border-gray-200 p-1.5 placeholder:text-[15px] placeholder:text-gray-800 focus:border-orange-600/[.75] focus:outline-orange-600/[.75]",
              type !== "checkbox" && "w-full",
              type === "checkbox" &&
                "peer h-[13px] w-[13px] appearance-none checked:border-transparent checked:bg-orange-600 focus:outline-none",
              error && "border-orange-600",
              Icon && "pl-[40px]",
            )}
            {...props}
          />

          {error && <p className="text-orange-600">{error}</p>}

          {type === "password" && (
            <button
              type="button"
              className="absolute right-[5px] top-[5px] rounded-full p-1 text-gray-800 hover:bg-gray-800/[.15]"
              onClick={togglePasswordInputType}
            >
              {selectedType === "password" && (
                <OpenEyeIcon
                  className={cn("h-[22px]", error && "text-orange-600")}
                />
              )}
              {selectedType === "text" && (
                <ClosedEyeIcon
                  className={cn("h-[22px]", error && "text-orange-600")}
                />
              )}
            </button>
          )}

          {Icon && type !== "checkbox" && (
            <Icon
              className={
                "absolute left-[10px] top-[8px] h-6 peer-focus:text-orange-600"
              }
            />
          )}
        </div>

        {type === "checkbox" && (
          <label
            htmlFor={inputId}
            className="absolute left-0 top-[4px] hidden h-[13px] w-[13px] peer-checked:block"
          >
            <CheckIcon className="text-white peer-checked:block" />
          </label>
        )}
      </div>
    );
  },
);

// add displayName to display the component name in React Devtool
// otherwise "ForwardRef" will be displayed when error occurs
Input.displayName = "Input";

export default Input;
