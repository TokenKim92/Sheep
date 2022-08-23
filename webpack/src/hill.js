export default class Hill {
  #color;
  #speed;
  #intervalCount;
  #stageWidth;
  #stageHeight;
  #intervalWidth;
  #points = [];

  constructor(color, speed, intervalCount) {
    this.#color = color;
    this.#speed = speed;
    this.#intervalCount = intervalCount;
  }

  resize(stageWidth, stageHeight) {
    this.#stageWidth = stageWidth;
    this.#stageHeight = stageHeight;

    this.#points = [];
    this.#intervalWidth = Math.ceil(
      this.#stageWidth / (this.#intervalCount - 2)
    );

    for (let i = 0; i < this.#intervalCount; i++) {
      this.#points.push({
        x: i * this.#intervalWidth,
        y: this.#getY(),
      });
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.#color;
    ctx.beginPath();

    let curPoint = this.#points[0];
    let prevPoint = curPoint;

    let dots = [];
    curPoint.x += this.#speed;

    if (curPoint.x > -this.#intervalWidth) {
      this.#expandStage();
    } else if (curPoint.x > this.#stageWidth + this.#intervalWidth) {
      this.#cutStage();
    }

    ctx.moveTo(curPoint.x, curPoint.y);

    let prevCx = curPoint.x;
    let prevCy = curPoint.y;

    let cx;
    let cy;

    for (let i = 1; i < this.#points.length; i++) {
      curPoint = this.#points[i];
      curPoint.x += this.#speed;
      cx = (prevPoint.x + curPoint.x) / 2;
      cy = (prevPoint.y + curPoint.y) / 2;

      ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cx, cy);

      dots.push({
        x1: prevCx,
        y1: prevCy,
        x2: prevPoint.x,
        y2: prevPoint.y,
        x3: cx,
        y3: cy,
      });

      prevPoint = curPoint;
      prevCx = cx;
      prevCy = cy;
    }

    ctx.lineTo(prevPoint.x, prevPoint.y);
    ctx.lineTo(this.#stageWidth, this.#stageHeight);
    ctx.lineTo(this.#points[0].x, this.#stageHeight);
    ctx.fill();

    return dots;
  }

  #getY() {
    const min = this.#stageHeight / 8;
    const max = this.#stageHeight - min;

    return min + Math.random() * max;
  }

  #expandStage() {
    this.#points.unshift({
      x: -(this.#intervalWidth * 2),
      y: this.#getY(),
    });
  }

  #cutStage() {
    this.#points.splice(-1);
  }
}
