import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/classnames";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export default function Button({
  children,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "relative isolate inline-flex w-full items-center justify-center rounded-md bg-charcoal-grey p-4 text-sm font-bold tracking-wider text-white shadow-sm",
        "transition-shadow hover:shadow-xl hover:shadow-primary/40",
        "before:absolute before:inset-0 before:z-[-1] before:rounded-md before:bg-gradient-to-r before:from-[#ff5478] before:to-primary before:opacity-0 before:transition-opacity before:content-[''] hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
