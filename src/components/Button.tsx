import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: "outline" | "text";
}

export function Button({ children, buttonType = "text", ...rest }: Props) {
  const className = clsx({
    "py-3 px-4 hover:bg-zinc-100 rounded-full text-sm text-zinc-500":
      buttonType === "text",
    "py-3 px-4 hover:shadow-md transition-shadow bg-white ring-1 ring-zinc-300 rounded-full text-sm text-zinc-500":
      buttonType === "outline",
  });
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
