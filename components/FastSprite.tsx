import { Assets } from "pixi.js";
import { ComponentProps, useMemo } from "react";

export default function FastSprite({
  texture,
  ...rest
}: Omit<ComponentProps<"pixiSprite">, "texture"> & { texture: string }) {
  const fastTexture = useMemo(() => Assets.get(texture), [texture]);
  return <pixiSprite texture={fastTexture} {...rest} />;
}

