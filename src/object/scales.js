// import { Triangle, Line } from "fabric";
// import {
//   COLORS,
//   LEVER_TOP,
//   SCALES_HEIGHT,
//   SCALES_WIDTH,
//   STROKE_WIDTH,
// } from "./constants";

/** Class representing scales */
class Scales {
  /** Create scales
   * @param {object} options - The scales options
   * @param {Canvas} canvas - The canvas
   */
  constructor(options, canvas) {
    this.triangle = new fabric.Triangle({
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

    const top = LEVER_TOP + SCALES_HEIGHT;
    this.triangleBase = new fabric.Line(
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
    const onChange = () => this.canvas.requestRenderAll();

    this.triangle.animate({ top: LEVER_TOP + height }, { onChange });

    this.triangleBase.animate(
      { top: LEVER_TOP + SCALES_HEIGHT + height },
      { onChange }
    );
  }
}
