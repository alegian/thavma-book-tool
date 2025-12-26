import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Column({
  children,
  cn,
  className,
  ...rest
}: PropsWithChildren<ComponentProps<typeof View>>) {
  return (
    <View {...rest} cn={twMerge("flex flex-col", className, cn)}>
      {children}
    </View>
  );
}

export function Row({
  children,
  className,
  cn,
  ...rest
}: PropsWithChildren<ComponentProps<typeof View>>) {
  return (
    <View {...rest} cn={twMerge("flex", className, cn)}>
      {children}
    </View>
  );
}

export function View({
  children,
  cn,
  className,
  ...rest
}: PropsWithChildren<ComponentProps<"div"> & { cn?: string }>) {
  return (
    <div {...rest} className={twMerge(className, cn)}>
      {children}
    </div>
  );
}
