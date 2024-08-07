import { Canvas as FabricCanvas } from "fabric";
import { CANVAS_DIMENSIONS, LEVER_WIDTH } from "./constants";

/** Class representing canvas */
export class Canvas {
  /** Create canvas
   * @param {object} id - Canvas id
   */
  constructor(id) {
    this.canvas = new FabricCanvas(id, CANVAS_DIMENSIONS);
  }

  /** Handle animation
   * @param {object} objects - Objects for animation
   */
  adjustScales(objects) {
    const { lever, leftScales, rightScales, leftSinker, rightSinker } = objects;

    const height =
      (100 * (rightSinker.radius() - leftSinker.radius())) /
      (rightSinker.radius() + leftSinker.radius());

    const leverHalfWiidth = LEVER_WIDTH / 2;

    const angle =
      (Math.atan(Math.abs(height) / leverHalfWiidth) * 180) / Math.PI;
    const lenght = Math.sqrt(
      Math.pow(Math.abs(height), 2) + Math.pow(leverHalfWiidth, 2)
    );

    lever.animate({
      angle: angle * (height > 0 ? 1 : -1),
      width: lenght > leverHalfWiidth ? lenght * 2 : LEVER_WIDTH,
    });

    leftScales.animate({ height: -height });
    rightScales.animate({ height });
    leftSinker.animate({ height: -height });
    rightSinker.animate({ height });
  }

  /** Handle updates
   * @param {object} objects - Objects for handling
   */
  handleUpdates(objects) {
    this.canvas.on("object:modified", () => this.adjustScales(objects));
  }

  /** Add objects to canvas
   * @param {object} objects - Objects for adding
   */
  add(...objects) {
    this.canvas.add(...objects);
  }

  /** Reset objects to initial position
   * @param {object} objects - Objects for resetting
   */
  reset(objects) {
    const { lever, leftScales, rightScales, leftSinker, rightSinker } = objects;

    lever.animate({ angle: 0, width: LEVER_WIDTH });
    leftScales.animate();
    rightScales.animate();
    leftSinker.reset();
    rightSinker.reset();

    this.canvas.requestRenderAll();
  }
}
