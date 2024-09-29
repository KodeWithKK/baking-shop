import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  intent?: "navbar" | "form";
  label?: string;
  className?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", intent = "form", label, className, Icon, ...restProps },
    ref,
  ) => {
    const inputId = useId();

    return (
      <div className={cn(className, "w-fit text-gray-975")}>
        {label && (
          <label
            className="mb-1 block text-[15px] font-medium"
            htmlFor={inputId}
          >
            {label}
          </label>
        )}

        <div className="relative w-fit">
          <input
            {...restProps}
            ref={ref}
            type={type}
            id={inputId}
            className={cn(
              "peer w-full rounded-lg border border-gray-500 p-[8px] placeholder:text-[15px] placeholder:text-gray-800",
              intent === "form" && "w-full",
              intent === "navbar" && [
                "w-[240px] rounded border-gray-200 bg-orange-50 p-[8px] focus:border-orange-600 focus:outline-orange-600",
              ],
              Icon && "pl-10",
            )}
          />
          {Icon && (
            <Icon
              className={cn(
                "absolute left-2.5 top-2.5 h-6 w-6",
                "text-gray-950 peer-focus:text-orange-600",
              )}
            />
          )}
        </div>
      </div>
    );
  },
);

// add displayName to display the component name in React Devtool
// otherwise "ForwardRef" will be displayed when error occurs
Input.displayName = "Input";

export default Input;
