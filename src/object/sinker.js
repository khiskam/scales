// import { Circle } from "fabric";
// import {
//   LEVER_TOP,
//   SCALES_HEIGHT,
//   SCALE_MAX,
//   SCALE_DEFAULT,
// } from "./constants";

/** Class representing a sinker */
class Sinker {
  /** Create sinker
   * @param {object} options - The sinker options.
   * @param {object} objects - Objects for initialization.
   */
  constructor(options, objects) {
    this.circle = new fabric.Circle({
      radius: 20,
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
      lockScalingFlip: true,
      minScaleLimit: 0.8,
      originX: "center",
      originY: "bottom",
      top: LEVER_TOP + SCALES_HEIGHT,
      ...options,
    });

    this.left = options.left;

    this.circle.setControlsVisibility({
      mt: false,
      mr: false,
      mb: false,
      ml: false,
    });

    this.handleScale(objects.scales);

    this.canvas = objects.canvas;
  }

  /** Scale sinker
   * @param {number} top - Max top value
   */
  scale(top) {
    if (this.circle.scaleX > SCALE_MAX) {
      this.circle.scale(SCALE_MAX);
    }

    this.circle.set({ left: this.left, top });
    this.canvas.requestRenderAll();
  }

  /** Animate sinker
   * @param {object} options - Options for animation
   */
  animate(options = {}) {
    const { height = 0 } = options;

    this.circle.animate(
      { top: LEVER_TOP + SCALES_HEIGHT + height },
      {
        onChange: () => {
          this.circle.setCoords();
          this.canvas.requestRenderAll();
        },
      }
    );
  }

  /** Return to initial position*/
  reset() {
    this.circle.animate(
      {
        top: LEVER_TOP + SCALES_HEIGHT,
        left: this.left,
        scaleX: SCALE_DEFAULT,
        scaleY: SCALE_DEFAULT,
      },
      {
        onChange: () => {
          this.circle.setCoords();
          this.canvas.requestRenderAll();
        },
      }
    );
  }

  /** Get sinker radius
   * @returns {number} - Sinker radius
   */
  radius() {
    return this.circle.getRadiusX();
  }

  /** Handle sinker scale
   *  @param {object} options - Options for animation
   */
  handleScale(scales) {
    this.circle.on("scaling", () => {
      if (this.circle.scaleX > SCALE_MAX) {
        this.circle.scale(SCALE_MAX);
      }

      this.circle.set({ left: this.left, top: scales.top });
      this.canvas.requestRenderAll();
    });
  }
}
