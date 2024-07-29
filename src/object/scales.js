import { Triangle, Line } from "fabric";
import {
  COLORS,
  LEVER_TOP,
  SCALES_HEIGHT,
  SCALES_WIDTH,
  STROKE_WIDTH,
} from "./constants";

/** Class representing scales */
export class Scales {
  /** Create scales
   * @param {object} options - The scales options
   * @param {object} canvas - The canvas
   */
  constructor(options, canvas) {
    this.triangle = new Triangle({
      width: SCALES_WIDTH,
      height: SCALES_HEIGHT,
      fill: "",
      strokeWidth: 1,
      stroke: COLORS.gray,
      selectable: false,
      originX: "center",
      top: LEVER_TOP,
      ...options,
    });

    const top = LEVER_TOP + SCALES_HEIGHT + STROKE_WIDTH / 2;
    this.triangleBase = new Line(
      [
        options.left - SCALES_WIDTH / 2,
        top,
        options.left + SCALES_WIDTH / 2,
        top,
      ],
      {
        stroke: COLORS.gray,
        strokeWidth: STROKE_WIDTH,
        selectable: false,
      }
    );

    this.canvas = canvas;
  }

  /** Animate scales
   * @param {object} options - Options for animation
   */
  animate(options = {}) {
    const { height = 0 } = options;

    this.triangle.animate(
      { top: LEVER_TOP + height },
      { onChange: this.canvas.requestRenderAll() }
    );

    this.triangleBase.animate(
      { top: LEVER_TOP + SCALES_HEIGHT + height },
      { onChange: this.canvas.requestRenderAll() }
    );
  }
}
