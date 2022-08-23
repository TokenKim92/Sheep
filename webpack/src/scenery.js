import Hill from './hill.js';
import SheepController from './sheep-controller.js';
import Sun from './sun.js';
import BaseCanvas from '../lib/baseCanvas.js';
import Watermark from '../lib/watermark.js';
import sheepImage from '../imgs/sheep.png';

export default class Scenery extends BaseCanvas {
  #hills;
  #sun;
  #sheepController;
  #watermark;
  #isImageLoaded = false;

  constructor() {
    super(true);

    this.#watermark = new Watermark(
      "Basic code by 'Interactive Developer'",
      'Arial'
    );
    this.#sun = new Sun();
    this.#hills = [
      new Hill('#fd6bea', 0.2, 12),
      new Hill('#ff59c2', 0.5, 8),
      new Hill('#ff4674', 1.4, 6),
    ];

    const img = new Image();
    img.src = sheepImage;
    img.onload = () => {
      this.#sheepController = new SheepController(img);
      this.#isImageLoaded = true;

      this.resize();
    };
  }

  resize() {
    super.resize();

    this.#watermark.resize();
    this.#watermark.draw();
    this.#sun.resize(this.stageWidth, this.stageHeight);
    this.#hills.forEach((hill) =>
      hill.resize(this.stageWidth, this.stageHeight)
    );
    this.#isImageLoaded &&
      this.#sheepController.resize(this.stageWidth, this.stageHeight);
  }

  bringToStage() {
    super.bringToStage();
    this.#watermark.bringToStage();
  }

  removeFromStage() {
    super.removeFromStage();
    this.#watermark.removeFromStage();
  }

  animate(curTime) {
    this.clearCanvas();
    this.#sun.draw(this.ctx, curTime);
    let dots;
    this.#hills.forEach((hill) => {
      dots = hill.draw(this.ctx, curTime);
    });
    this.#isImageLoaded && this.#sheepController.draw(this.ctx, curTime, dots);
  }
}
