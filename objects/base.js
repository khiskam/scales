import { Line } from "fabric";
import { CANVAS_DIMENSIONS, COLORS, STROKE_WIDTH } from "./settings";

export const base = new Line(
  [
    CANVAS_DIMENSIONS.width / 2,
    4,
    CANVAS_DIMENSIONS.width / 2,
    CANVAS_DIMENSIONS.height,
  ],
  {
    stroke: COLORS.gray,
    strokeWidth: STROKE_WIDTH,
    selectable: false,
  }
);
