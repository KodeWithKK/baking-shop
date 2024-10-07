import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva("rounded-md inline-flex justify-center", {
  variants: {
    intent: {
      primary: [
        "bg-orange-500",
        "text-white",
        "border-transparent",
        "hover:bg-orange-600",
      ],
      secondary: [
        "bg-gray-200",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-300",
      ],
      outline: [
        "border",
        "border-gray-200",
        "text-gray-800",
        "text-center",
        "hover:bg-orange-100",
        "hover:border-orange-100",
      ],
      text: [
        "text-gray-800",
        "underline",
        "hover:text-gray-975",
        "underline-offset-[2px]",
      ],
    },
    size: {
      default: ["text-[15px]"],
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-[15px]", "py-2", "px-4"],
      full: ["text-[15px]", "w-full", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", class: "font-normal " },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof button> {}

function Button({
  className,
  type = "button",
  intent,
  size,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      className={cn(button({ intent, size }), className)}
      {...props}
    />
  );
}

export default Button;
