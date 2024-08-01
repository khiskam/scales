// import { COLORS, LEVER_LEFT, LEVER_RIGHT, LEVER_TOP } from "./object/constants";
// import { Lever } from "./object/lever";
// import { Scales } from "./object/scales";
// import { Sinker } from "./object/sinker";
// import { Canvas } from "./object/canvas";
// import { base, plug } from "./components";

const wrapper = new Canvas("canvas");

const lever = new Lever(
  { coords: [LEVER_LEFT, LEVER_TOP, LEVER_RIGHT, LEVER_TOP] },
  wrapper.canvas
);

const leftScales = new Scales({ left: LEVER_LEFT }, wrapper.canvas);
const rightScales = new Scales({ left: LEVER_RIGHT }, wrapper.canvas);

const leftSinker = new Sinker(
  { left: LEVER_LEFT, fill: COLORS.pink },
  { canvas: wrapper.canvas, scales: leftScales.triangleBase }
);

const rightSinker = new Sinker(
  { left: LEVER_RIGHT, fill: COLORS.blue },
  { canvas: wrapper.canvas, scales: rightScales.triangleBase }
);

const objects = { lever, leftScales, rightScales, leftSinker, rightSinker };

wrapper.add(
  base,
  plug,
  lever.line,
  leftScales.triangle,
  rightScales.triangle,
  leftScales.triangleBase,
  rightScales.triangleBase,
  leftSinker.circle,
  rightSinker.circle
);

wrapper.handleUpdates(objects);

document
  .querySelector("button")
  .addEventListener("click", () => wrapper.reset(objects));
