const COLORS = {
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

const STROKE_WIDTH = 8;

const CANVAS_DIMENSIONS = {
  width: 600,
  height: 400,
};

const LEVER_TOP = 100;
const LEVER_WIDTH = 400;
const LEVER_LEFT = 100;
const LEVER_RIGHT = LEVER_LEFT + LEVER_WIDTH;

const SCALES_HEIGHT = 164;
const SCALES_WIDTH = 100;

const SCALE_MAX = 3;
const SCALE_DEFAULT = 1;
