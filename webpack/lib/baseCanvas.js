export default class BaseCanvas {
  static INIT_MODE = -1;
  static SMALL_MODE = 0;
  static REGULAR_MODE = 1;
  static MEDIUM_MODE = 2;
  static LARGE_MODE = 3;

  #canvas;
  #ctx;
  #stageWidth;
  #stageHeight;
  #isFull;

  constructor(isFull = false) {
    this.#canvas = document.createElement('canvas');
    this.#ctx = this.#canvas.getContext('2d');
    document.body.append(this.#canvas);

    this.#isFull = isFull;
    this.#isFull && this.#canvas.classList.add('canvas-full');
  }

  resize(width = 0, height = 0) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); // prettier-ignore
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); // prettier-ignore

    this.#stageWidth = width === 0 ? vw : width;
    this.#stageHeight = height === 0 ? vh : height;

    this.#canvas.width = this.#stageWidth;
    this.#canvas.height = this.#stageHeight;
  }

  clearCanvas() {
    this.#ctx.clearRect(0, 0, this.#stageWidth, this.#stageHeight);
  }

  clearRect(x, y, w, h) {
    this.#ctx.clearRect(x, y, w, h);
  }

  addEventToCanvas(type, listener) {
    this.#canvas.addEventListener(type, listener);
  }

  removeEventFromCanvas(type, listener) {
    this.#canvas.removeEventListener(type, listener);
  }

  bringToStage() {
    document.body.append(this.#canvas);
  }

  removeFromStage() {
    this.clearCanvas();
    document.body.removeChild(this.#canvas);
  }

  setPosition(x, y) {
    if (this.#isFull) {
      throw new Error('Positioning is not possible in full screen mode.');
    }

    this.#canvas.style.left = `${x}px`;
    this.#canvas.style.top = `${y}px`;
  }

  get stageWidth() {
    return this.#stageWidth;
  }

  get stageHeight() {
    return this.#stageHeight;
  }

  get ctx() {
    return this.#ctx;
  }

  get isMatchMedia() {
    return this.sizeMode === BaseCanvas.SMALL_MODE;
  }

  get isHeighResolution() {
    return this.sizeMode === BaseCanvas.LARGE_MODE;
  }

  get sizeMode() {
    const canvasSizeModes = [
      { mode: BaseCanvas.SMALL_MODE, size: 500 },
      { mode: BaseCanvas.REGULAR_MODE, size: 1000 },
      { mode: BaseCanvas.MEDIUM_MODE, size: 1980 },
      { mode: BaseCanvas.LARGE_MODE, size: 3840 },
    ];

    const sizeModeIndex = 
      canvasSizeModes
        .filter((sizeMode) => !window.matchMedia(`(max-width: ${sizeMode.size}px)`).matches)
        .length; // prettier-ignore

    return canvasSizeModes[sizeModeIndex].mode;
  }
}
