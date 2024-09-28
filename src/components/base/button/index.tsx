import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded-md", {
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
      text: [
        "font-medium",
        "text-orange-600",
        "underline",
        "underline-offset-4",
        "max-sm:text-[15px]",
      ],
    },
    size: {
      default: [""],
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      full: ["w-full", "py-2.5", "px-4"],
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", class: "uppercase text-sm" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
      className={button({ intent, size, className })}
      {...props}
    />
  );
}

export default Button;
