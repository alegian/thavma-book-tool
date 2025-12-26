"use client";
import { Button } from "@heroui/react";
import { Column } from "../util/View";
import { ReactNode } from "react";

export default function HomePage() {
  return (
    <Column cn="min-h-dvh items-center justify-center">
      <Column cn="items-center gap-sm">
        <MainButton>Import</MainButton>
        <MainButton>New</MainButton>
      </Column>
    </Column>
  );
}

function MainButton({ children }: { children: ReactNode }) {
  return <Button size="lg">{children}</Button>;
}
