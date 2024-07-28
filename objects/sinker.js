import { Circle } from "fabric";
import { LEVER_TOP, SCALES_HEIGHT, SCALE_MAX, SCALE_DEFAULT } from "./settings";

export class Sinker {
  constructor(options, objects) {
    this.circle = new Circle({
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

    this.circle.on("scaling", () => this.addScaleListener(objects.scales));

    this.canvas = objects.canvas;
  }

  scale(top) {
    if (this.circle.scaleX > SCALE_MAX) {
      this.circle.scale(SCALE_MAX);
    }

    this.circle.set({ left: this.left, top });
    this.canvas.requestRenderAll();
  }

  animate(height) {
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

  resetAnimation() {
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

  radius() {
    return this.circle.getRadiusX();
  }

  addScaleListener(scales) {
    if (this.circle.scaleX > SCALE_MAX) {
      this.circle.scale(SCALE_MAX);
    }

    this.circle.set({ left: this.left, top: scales.top });
    this.canvas.requestRenderAll();
  }
}