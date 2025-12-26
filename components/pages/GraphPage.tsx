"use client";
import { Application, extend } from "@pixi/react";
import { Assets, Container, Graphics, Sprite, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { Column, View } from "../util/View";
import { textures } from "@/services/textures";
import FastSprite from "../FastSprite";

extend({
  Container,
  Graphics,
  Sprite,
});

export default function GraphPage() {
  const spriteRef = useRef(null);
  const parentRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      Object.values(textures).map((texture) => Assets.load(texture)),
    ).then(() => setLoading(false));
  }, []);

  if (loading) return null;
  return (
    <Column className="h-dvh items-center justify-center bg-white">
      <View cn="aspect-video h-11/12" ref={parentRef}>
        <Application resizeTo={parentRef}>
          <FastSprite ref={spriteRef} texture={textures.TAB_BG} x={0} y={0} />
        </Application>
      </View>
    </Column>
  );
}
