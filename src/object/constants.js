export const COLORS = {
  gray: getComputedStyle(document.documentElement).getPropertyValue(
    "--gray-color"
  ),
  pink: getComputedStyle(document.documentElement).getPropertyValue(
    "--pink-color"
  ),
  blue: getComputedStyle(document.documentElement).getPropertyValue(
    "--blue-color"
  ),
};

export const STROKE_WIDTH = 8;

export const CANVAS_DIMENSIONS = {
  width: 600,
  height: 400,
};

export const LEVER_TOP = 100;
export const LEVER_WIDTH = 400;
export const LEVER_LEFT = 100;
export const LEVER_RIGHT = LEVER_LEFT + LEVER_WIDTH;

export const SCALES_HEIGHT = 164;
export const SCALES_WIDTH = 100;

export const SCALE_MAX = 3;
export const SCALE_DEFAULT = 1;
