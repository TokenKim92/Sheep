export default class FontFormat {
  #width;
  #size;
  #name;

  constructor(width, size, name) {
    this.#width = width;
    this.#size = size;
    this.#name = name;
  }

  get width() {
    return this.#width();
  }

  get size() {
    return this.#width();
  }

  get size() {
    return this.#width();
  }

  get font() {
    return `${this.#width} ${this.#size}px ${this.#name}`; // prettier-ignore
  }
}