import { Canvas } from "fabric";
import { CANVAS_DIMENSIONS, LEVER_WIDTH } from "./settings";

export default class {
  constructor(id) {
    this.canvas = new Canvas(id, CANVAS_DIMENSIONS);
  }

  adjustScales(objects) {
    const { lever, leftScales, rightScales, leftSinker, rightSinker } = objects;

    const height =
      (100 * (rightSinker.radius() - leftSinker.radius())) /
      (rightSinker.radius() + leftSinker.radius());

    const angle = (Math.atan(Math.abs(height) / 200) * 180) / Math.PI;
    const lenght = Math.sqrt(Math.pow(Math.abs(height), 2) + Math.pow(200, 2));

    lever.animate(
      angle * (height > 0 ? 1 : -1),
      lenght > 200 ? lenght * 2 : 400
    );

    leftScales.animate(-height);
    rightScales.animate(height);
    leftSinker.animate(-height);
    rightSinker.animate(height);
  }

  listenUpdates(objects) {
    this.canvas.on("object:modified", () => this.adjustScales(objects));
  }

  add(...objects) {
    this.canvas.add(...objects);
  }

  reset(objects) {
    const { lever, leftScales, rightScales, leftSinker, rightSinker } = objects;

    lever.animate(0, LEVER_WIDTH);
    leftScales.animate();
    rightScales.animate();
    leftSinker.resetAnimation();
    rightSinker.resetAnimation();

    this.canvas.requestRenderAll();
  }
}
