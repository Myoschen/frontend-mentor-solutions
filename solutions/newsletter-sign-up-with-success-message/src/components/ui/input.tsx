import { useId, type ComponentPropsWithoutRef } from "react";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  type Control,
} from "react-hook-form";

import { cn } from "@/utils/classnames";

type InputProps<T extends FieldValues> = Omit<
  ComponentPropsWithoutRef<"input">,
  "id" | "name"
> & {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
};

export default function Input<T extends FieldValues>({
  label,
  name,
  control,
  className,
  ...props
}: InputProps<T>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={"grid gap-y-2"}>
          <div
            className={"flex items-center justify-between text-xs font-bold"}
          >
            <label htmlFor={id}>{label}</label>
            {error && error.message !== "" && (
              <span className={"text-primary"}>{error.message}</span>
            )}
          </div>
          <input
            id={id}
            className={cn(
              "rounded-md border-grey px-4 py-3 shadow-sm",
              "focus:border-charcoal-grey focus:ring-charcoal-grey",
              error &&
                error.message !== "" && [
                  "border-primary bg-primary/10",
                  "focus:border-primary focus:ring-primary",
                ],
              className
            )}
            {...field}
            {...props}
          />
        </div>
      )}
    />
  );
}
