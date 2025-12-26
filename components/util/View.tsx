import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Column({
  children,
  className,
  ...rest
}: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <View {...rest} cn={twMerge("flex flex-col", className)}>
      {children}
    </View>
  );
}

export function Row({
  children,
  className,
  ...rest
}: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <View {...rest} cn={twMerge("flex", className)}>
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
    <div {...rest} className={twMerge(cn, className)}>
      {children}
    </div>
  );
}
