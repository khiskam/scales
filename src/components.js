import { Circle, Line } from "fabric";
import { COLORS, CANVAS_DIMENSIONS, STROKE_WIDTH } from "./object/constants";

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

export const plug = new Circle({
  radius: 20,
  left: CANVAS_DIMENSIONS.width / 2,
  fill: COLORS.gray,
  selectable: false,
  originX: "center",
});
