import { Triangle, Line } from "fabric";
import {
  COLORS,
  LEVER_TOP,
  SCALES_HEIGHT,
  SCALES_WIDTH,
  STROKE_WIDTH,
} from "./settings";

export class Scales {
  constructor(left, canvas) {
    this.triangle = new Triangle({
      width: SCALES_WIDTH,
      height: SCALES_HEIGHT,
      fill: "",
      strokeWidth: 1,
      stroke: COLORS.gray,
      selectable: false,
      originX: "center",
      top: LEVER_TOP,
      left,
    });

    const top = LEVER_TOP + SCALES_HEIGHT + STROKE_WIDTH / 2;
    this.triangleBase = new Line(
      [left - SCALES_WIDTH / 2, top, left + SCALES_WIDTH / 2, top],
      {
        stroke: COLORS.gray,
        strokeWidth: STROKE_WIDTH,
        selectable: false,
      }
    );

    this.canvas = canvas;
  }

  animate(height = 0) {
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
