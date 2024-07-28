import { Line } from "fabric";
import { COLORS, STROKE_WIDTH } from "./settings";

export class Lever {
  constructor(coords, canvas) {
    this.line = new Line(coords, {
      stroke: COLORS.gray,
      strokeWidth: STROKE_WIDTH,
      selectable: false,
      centeredRotation: true,
      originX: "center",
      originY: "center",
    });

    this.canvas = canvas;
  }

  animate(angle, width) {
    this.line.animate(
      { angle, width },
      { onChange: this.canvas.requestRenderAll() }
    );
  }
}
