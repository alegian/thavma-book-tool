import { Assets } from "pixi.js";
import { ComponentProps, useMemo } from "react";

export function FastSprite({
  texture,
  ...rest
}: Omit<ComponentProps<"pixiSprite">, "texture"> & { texture: string }) {
  const fastTexture = useMemo(() => Assets.get(texture), [texture]);
  return <pixiSprite texture={fastTexture} {...rest} />;
}

export function FastTilingSprite({
  texture,
  ...rest
}: Omit<ComponentProps<"pixiTilingSprite">, "texture"> & { texture: string }) {
  const fastTexture = useMemo(() => Assets.get(texture), [texture]);
  return <pixiTilingSprite texture={fastTexture} {...rest} />;
}

