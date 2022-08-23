export default class Sun {
  static FPS = 30;
  static FPS_TIME = 1000 / Sun.FPS;
  static PARTICLE_COUNT = 60;
  static PARTICLE_INTERVAL = 1 / Sun.PARTICLE_COUNT;
  static COLOR = '#ffb200';

  #prevTime = 0;
  #stageWidth;
  #stageHeight;
  #radius;
  #pos = {
    x: 0,
    y: 0,
  };
  #orgParticlesPosList = [];
  #particlePosList = [];

  constructor() {}

  resize(stageWidth, stageHeight) {
    this.#stageWidth = stageWidth;
    this.#stageHeight = stageHeight;

    this.#radius = this.#stageWidth / 8;
    this.#pos = {
      x: this.#stageWidth - this.#radius * 2,
      y: (this.#pos.y = this.#radius + 100),
    };

    this.#initParticlePos();
  }

  draw(ctx, curTime) {
    if (!this.#prevTime) {
      this.#prevTime = curTime;
    }

    const isOnFPSTime = curTime - this.#prevTime > Sun.FPS_TIME;
    if (isOnFPSTime) {
      this.#prevTime = curTime;
      this.#updateParticlePos();
    }

    ctx.save();
    ctx.fillStyle = Sun.COLOR;
    ctx.beginPath();

    let particlePos = this.#particlePosList[0];
    ctx.moveTo(particlePos.x + this.#pos.x, particlePos.y + this.#pos.y);
    for (let i = 1; i < Sun.PARTICLE_COUNT; i++) {
      particlePos = this.#particlePosList[i];
      ctx.lineTo(particlePos.x + this.#pos.x, particlePos.y + this.#pos.y);
    }

    ctx.fill();
    ctx.restore();
  }

  #updateParticlePos() {
    let particlePos;
    for (let i = 1; i < Sun.PARTICLE_COUNT; i++) {
      let particlePos = this.#orgParticlesPosList[i];
      this.#particlePosList[i] = {
        x: particlePos.x + this.#ranInt(5),
        y: particlePos.y + this.#ranInt(5),
      };
    }
  }

  #ranInt(max) {
    return Math.random() * max;
  }

  #initParticlePos() {
    for (let i = 0; i < Sun.PARTICLE_COUNT; i++) {
      const pos = this.#getParticlePos(this.#radius, Sun.PARTICLE_INTERVAL * i);
      this.#orgParticlesPosList[i] = pos;
      this.#particlePosList[i] = pos;
    }
  }

  #getParticlePos(radius, degree) {
    const theta = Math.PI * 2 * degree;

    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
    };
  }
}
