"use client";
import { Application, extend } from "@pixi/react";
import { Assets, Container, Graphics, Sprite, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { Column, View } from "../util/View";

extend({
  Container,
  Graphics,
  Sprite,
});

export default function GraphPage() {
  const spriteRef = useRef(null);
  const parentRef = useRef(null);
  const [texture, setTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load("/thavma.png").then(setTexture);
    }
  }, [texture]);

  if (texture === Texture.EMPTY) return null;
  return (
    <Column className="h-dvh items-center justify-center bg-white">
      <View cn="aspect-video h-11/12" ref={parentRef}>
        <Application resizeTo={parentRef}>
          <pixiSprite
            ref={spriteRef}
            texture={texture}
            x={100}
            y={0}
            width={100}
            height={100}
          />
          <pixiSprite
            ref={spriteRef}
            texture={texture}
            x={200}
            y={0}
            width={100}
            height={100}
          />
          <pixiSprite
            ref={spriteRef}
            texture={texture}
            x={0}
            y={0}
            width={100}
            height={100}
          />
        </Application>
      </View>
    </Column>
  );
}
