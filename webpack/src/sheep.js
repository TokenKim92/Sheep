export default class Sheep {
  static IMAGE_WIDTH = 360;
  static IMAGE_HEIGHT = 300;
  static SHEEP_WIDTH = 180;
  static SHEEP_HEIGHT = 150;
  static SHEEP_HALF_WIDTH = Sheep.SHEEP_WIDTH / 2;
  static TOTAL_FRAME = 8;
  static FPS = 24;
  static FPS_TIME = 1000 / Sheep.FPS;

  #img;
  #prevTime;
  #curFrame = 0;
  #pos;
  #movingSpeed;

  constructor(img, stageWidth) {
    this.#img = img;
    this.#pos = {
      x: stageWidth + Sheep.SHEEP_WIDTH,
      y: 0,
    };
    this.#movingSpeed = Math.random() * 2 + 1;
  }

  draw(ctx, curTime, dots) {
    if (!this.#prevTime) {
      this.#prevTime = curTime;
    }

    const isOnFPSTime = curTime - this.#prevTime > Sheep.FPS_TIME;
    if (isOnFPSTime) {
      this.#prevTime = curTime;
      this.#curFrame = (this.#curFrame + 1) % Sheep.TOTAL_FRAME;
    }

    this.animate(ctx, dots);
  }

  animate(ctx, dots) {
    this.#pos.x -= this.#movingSpeed;
    const closest = this.#getPosYAndRotation(this.#pos.x, dots);
    this.#pos.y = closest.y;

    ctx.save();
    ctx.translate(this.#pos.x, this.#pos.y);
    ctx.rotate(closest.rotation);
    ctx.drawImage(
      this.#img,
      Sheep.IMAGE_WIDTH * this.#curFrame,
      0,
      Sheep.IMAGE_WIDTH,
      Sheep.IMAGE_HEIGHT,
      -Sheep.SHEEP_HALF_WIDTH,
      -Sheep.SHEEP_HEIGHT + 20,
      Sheep.SHEEP_WIDTH,
      Sheep.SHEEP_HEIGHT
    );
    ctx.restore();
  }

  #getPosYAndRotation(x, dots) {
    for (let i = 1; i < dots.length; i++) {
      if (x >= dots[i].x1 && x <= dots[i].x3) {
        return this.#calculatePosYAndRotation(x, dots[i]);
      }
    }

    return {
      y: 0,
      rotation: 0,
    };
  }

  #calculatePosYAndRotation(x, dot) {
    const total = 200;
    let pt = this.#getPointOnQuad(
      dot.x1,
      dot.y1,
      dot.x2,
      dot.y2,
      dot.x3,
      dot.y3,
      0
    );
    let prevX = pt.x;
    for (let i = 1; i < total; i++) {
      const t = i / total;
      pt = this.#getPointOnQuad(
        dot.x1,
        dot.y1,
        dot.x2,
        dot.y2,
        dot.x3,
        dot.y3,
        t
      );

      if (x >= prevX && x <= pt.x) {
        return pt;
      }
      prevX = pt.x;
    }
    return pt;
  }

  #getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
    const tangentX = this.#quadTangent(x1, x2, x3, t);
    const tangentY = this.#quadTangent(y1, y2, y3, t);
    const rotation = -Math.atan2(tangentX, tangentY) + (90 * Math.PI) / 180;

    return {
      x: this.#getQuadValue(x1, x2, x3, t),
      y: this.#getQuadValue(y1, y2, y3, t),
      rotation: rotation,
    };
  }

  #getQuadValue(p0, p1, p2, t) {
    return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
  }

  #quadTangent(a, b, c, t) {
    return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
  }

  get x() {
    return this.#pos.x;
  }
}
