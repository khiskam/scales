import { Line } from "fabric";
import { COLORS, STROKE_WIDTH } from "./constants";

/** Class representing a lever */
export class Lever {
  /** Create lever
   * @param {object} options - The lever options
   * @param {Canvas} canvas - The canvas
   */
  constructor(options, canvas) {
    this.line = new Line(options.coords, {
      stroke: COLORS.gray,
      strokeWidth: STROKE_WIDTH,
      selectable: false,
      centeredRotation: true,
      originX: "center",
      originY: "center",
    });

    this.canvas = canvas;
  }

  /** Animate lever
   * @param {object} options - Options for animation
   */
  animate(options) {
    this.line.animate(options, { onChange: this.canvas.requestRenderAll() });
  }
}
