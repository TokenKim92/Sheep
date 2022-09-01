import Hill from './hill.js';
import SheepController from './sheep-controller.js';
import Sun from './sun.js';
import BaseCanvas from '../lib/baseCanvas.js';
import Watermark from '../lib/watermark.js';
import sheepImage from '../imgs/sheep.png';
import TypingBanner from './typingBanner.js';

export default class Scenery extends BaseCanvas {
  #hills;
  #sun;
  #sheepController;
  #watermark;
  #isImageLoaded = false;
  #explainBanner;

  constructor(fontName) {
    super(true);

    this.#explainBanner = new TypingBanner(fontName, 50, '#ffffff', '#2f2f2fcc'); //prettier-ignore
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
      this.#explainBanner.show(300);
    };

    window.addEventListener('click', this.onClick);
  }

  resize() {
    super.resize();

    this.#explainBanner.resize();
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

    this.#explainBanner.setMessage();
    this.#explainBanner.show(300);
    window.addEventListener('click', this.onClick);
  }

  removeFromStage() {
    super.removeFromStage();
    this.#explainBanner.hide();
    this.#watermark.removeFromStage();
    window.removeEventListener('click', this.onClick);
  }

  animate(curTime) {
    this.clearCanvas();
    this.#explainBanner.animate(curTime);
    this.#sun.draw(this.ctx, curTime);
    let dots;
    this.#hills.forEach((hill) => {
      dots = hill.draw(this.ctx, curTime);
    });
    this.#isImageLoaded && this.#sheepController.draw(this.ctx, curTime, dots);
  }

  #onClick = () => {
    this.#explainBanner.hide();
  };
}
