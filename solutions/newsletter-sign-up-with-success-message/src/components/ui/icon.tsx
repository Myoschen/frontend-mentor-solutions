import { type ComponentPropsWithoutRef } from "react";
import { ReactComponent as List } from "@/assets/images/icon-list.svg";
import { ReactComponent as Success } from "@/assets/images/icon-success.svg";

import { cn } from "@/utils/classnames";

const iconMap = {
  list: List,
  success: Success,
};

type IconName = keyof typeof iconMap;

interface IconProps extends Omit<ComponentPropsWithoutRef<"svg">, "name"> {
  name: IconName;
}

export default function Icon({ name, className, ...props }: IconProps) {
  const Comp = iconMap[name];
  return <Comp className={cn("h-5 w-5", className)} {...props} />;
}
