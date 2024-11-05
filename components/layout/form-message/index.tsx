import { cn } from "@/lib/utils";

import { CheckCircledIcon, ExclamationTriangleIcon } from "./icons";

interface FormMessageProps {
  type: "success" | "error";
  message?: string;
}

export default function FormMessage({
  type = "success",
  message,
}: Readonly<FormMessageProps>) {
  if (!message) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-x-2 rounded-md p-3 text-sm",
        type === "error" && "bg-brand-600/15 text-brand-600",
        type === "success" && "bg-emerald-500/15 text-emerald-500",
      )}
    >
      {type === "error" && <ExclamationTriangleIcon className="h-4 w-4" />}
      {type === "success" && <CheckCircledIcon className="h-4 w-4" />}
      <p>{message}</p>
    </div>
  );
}
