import GuiGraphics from "./guiGraphics";

export default interface Renderable {
  render(
    guiGraphics: GuiGraphics,
    mouseX: number,
    mouseY: number,
    partialTick: number,
  ): void;
}
