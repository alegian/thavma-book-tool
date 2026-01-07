import GuiGraphics from "./guiGraphics";
import Renderable from "./renderable";

export default abstract class Screen implements Renderable {
  renderables: Renderable[] = [];

  protected abstract init(): void;

  abstract renderBackground(
    guiGraphics: GuiGraphics,
    mouseX: number,
    mouseY: number,
    partialTick: number,
  ): void;

  render(
    guiGraphics: GuiGraphics,
    mouseX: number,
    mouseY: number,
    partialTick: number,
  ): void {
    this.renderBackground(guiGraphics, mouseX, mouseY, partialTick);

    for (const r of this.renderables) {
      r.render(guiGraphics, mouseX, mouseY, partialTick);
    }
  }

  protected addRenderable<T extends Renderable>(renderable: T): T {
    this.renderables.push(renderable);
    return renderable;
  }
}
