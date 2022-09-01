import Sheep from './sheep.js';

export default class SheepController {
  static COUNT_TO_ADD_SHEEP = 200;

  #img;
  #sheepList = [];
  #curCount;
  #stageWidth;
  #stageHeight;

  constructor(img) {
    this.#img = img;
    this.#curCount = 150;

    this.addSheep();
  }

  resize(stageWidth, stageHeight) {
    this.#stageWidth = stageWidth;
    this.#stageHeight = stageHeight;
  }

  addSheep() {
    this.#sheepList.push(new Sheep(this.#img, this.#stageWidth));
  }

  draw(ctx, curTime, dots) {
    this.#curCount += 1;

    if (this.#curCount > SheepController.COUNT_TO_ADD_SHEEP) {
      this.#curCount = 0;
      this.addSheep();
    }

    this.#sheepList.forEach((sheep, index) => {
      sheep.x < -Sheep.SHEEP_WIDTH
        ? this.#sheepList.splice(index, 1)
        : sheep.draw(ctx, curTime, dots);
    });
  }
}
