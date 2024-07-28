import { Circle } from "fabric";
import { CANVAS_DIMENSIONS, COLORS } from "./settings";

export const plug = new Circle({
  radius: 20,
  left: CANVAS_DIMENSIONS.width / 2,
  fill: COLORS.gray,
  selectable: false,
  originX: "center",
});
