import "./style.css";
import { COLORS, LEVER_LEFT, LEVER_RIGHT, LEVER_TOP } from "./objects/settings";
import { base } from "./objects/base";
import { plug } from "./objects/plug";
import { Lever } from "./objects/lever";
import { Scales } from "./objects/scales";
import { Sinker } from "./objects/sinker";
import Canvas from "./objects/canvas";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="canvas-wrapper">
      <canvas id="canvas"></canvas>
    </div> 
    <button>Очистить</button>
  </div> 

`;

const wrapper = new Canvas("canvas");

const lever = new Lever(
  [LEVER_LEFT, LEVER_TOP, LEVER_RIGHT, LEVER_TOP],
  wrapper.canvas
);

const leftScales = new Scales(LEVER_LEFT, wrapper.canvas);
const rightScales = new Scales(LEVER_RIGHT, wrapper.canvas);

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

wrapper.listenUpdates(objects);

document
  .querySelector("button")
  .addEventListener("click", () => wrapper.reset(objects));
