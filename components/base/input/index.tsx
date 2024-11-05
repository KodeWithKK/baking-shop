"use client";

import { ForwardedRef, forwardRef, useCallback, useId, useState } from "react";

import { CheckIcon, ClosedEyeIcon, OpenEyeIcon } from "@/lib/icons/global";
import { cn } from "@/lib/utils";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "medium" | "large";
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = forwardRef(
  (
    {
      label,
      error,
      Icon,
      type = "text",
      className,
      size = "medium",
      ...props
    }: Readonly<InputProps>,
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
          className,
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "inline-block flex-shrink-0 text-[15px]",
              error && "text-brand-600",
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
              "peer block rounded border border-gray-200 p-1.5 placeholder:text-[15px] placeholder:text-gray-800 focus:border-brand-600/[.75] focus:outline-brand-600/[.75]",
              type !== "checkbox" && "w-full",
              type === "checkbox" &&
                "peer h-[13px] w-[13px] appearance-none checked:border-transparent checked:bg-brand-600 focus:outline-none",
              error && "border-brand-600",
              Icon && "pl-[40px]",
              size === "large" &&
                "rounded-lg border-gray-500 p-[10px] placeholder:text-base",
            )}
            {...props}
          />

          {error && <p className="text-brand-600">{error}</p>}

          {type === "password" && (
            <button
              type="button"
              className="absolute right-[5px] top-[5px] rounded-full p-1 text-gray-800 hover:bg-gray-800/[.15]"
              onClick={togglePasswordInputType}
            >
              {selectedType === "password" && (
                <OpenEyeIcon
                  className={cn("h-[22px]", error && "text-brand-600")}
                />
              )}
              {selectedType === "text" && (
                <ClosedEyeIcon
                  className={cn("h-[22px]", error && "text-brand-600")}
                />
              )}
            </button>
          )}

          {Icon && type !== "checkbox" && (
            <Icon
              className={
                "absolute left-[10px] top-[8px] h-6 peer-focus:text-brand-600"
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
