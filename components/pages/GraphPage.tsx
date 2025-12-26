"use client";
import { Application, extend, useApplication } from "@pixi/react";
import { Assets, Container, Graphics, Sprite, TilingSprite } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { Column, View } from "../util/View";
import { textures } from "@/services/textures";
import { FastSprite, FastTilingSprite } from "../FastSprite";

extend({
  Container,
  Graphics,
  Sprite,
  TilingSprite,
});

const SCALE = 2;

export default function GraphPage() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      Object.values(textures).map((texture) => Assets.load(texture)),
    ).then(() => setLoading(false));
  }, []);

  if (loading) return null;
  return (
    <Column className="h-dvh justify-center bg-white p-3">
      <View cn="grow" ref={parentRef}>
        <Application resizeTo={parentRef} antialias={false}>
          <Tab />
          <Frame />
        </Application>
      </View>
    </Column>
  );
}

function Tab() {
  const { app } = useApplication();

  return (
    <pixiContainer
      mask={new Graphics()
        .rect(16, 16, app.screen.width - 32, app.screen.height - 32)
        .fill(0x000000)}
    >
      <Background />
      <FastSprite texture={textures.NODE} x={128} y={128} scale={SCALE} />
    </pixiContainer>
  );
}

function Background() {
  const { app } = useApplication();

  return (
    <FastTilingSprite
      texture={textures.TAB_BG}
      anchor={0.5}
      x={app.screen.width / 2}
      y={app.screen.height / 2}
      width={2 * 3840}
      height={2 * 2160}
      scale={SCALE}
    />
  );
}

function Frame() {
  const { app } = useApplication();

  return (
    <>
      <FastSprite
        texture={textures.FRAME_CORNER}
        anchor={{ x: 0, y: 0 }}
        x={0}
        y={0}
        scale={SCALE}
      />
      <FastSprite
        texture={textures.FRAME_CORNER}
        anchor={{ x: 0, y: 1 }}
        x={0}
        y={app.renderer.screen.height}
        scale={SCALE}
      />
      <FastSprite
        texture={textures.FRAME_CORNER}
        anchor={{ x: 1, y: 1 }}
        x={app.screen.width}
        y={app.screen.height}
        scale={SCALE}
      />
      <FastSprite
        texture={textures.FRAME_CORNER}
        anchor={{ x: 1, y: 0 }}
        x={app.screen.width}
        y={0}
        scale={SCALE}
      />
    </>
  );
}
