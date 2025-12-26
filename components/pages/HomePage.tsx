"use client";
import { Button, ButtonProps } from "@heroui/react";
import { Column, View } from "../util/View";

export default function HomePage() {
  return (
    <Column cn="min-h-dvh items-center justify-center bg-background">
      <Column cn="items-center gap-lg">
        <View cn="t-title text-foreground">Thavma Book Tool</View>

        <Column cn="gap-sm">
          <MainButton>New</MainButton>
          <MainButton variant="secondary">Import</MainButton>
        </Column>
      </Column>
    </Column>
  );
}

function MainButton({ children, ...rest }: ButtonProps) {
  return (
    <Button size="lg" fullWidth {...rest}>
      {children}
    </Button>
  );
}
