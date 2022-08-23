import './webpack/dist/sheep.js';

window.onload = () => {
  const appBuilder = new AppBuilder();
  appBuilder.build();
};

class AppBuilder {
  #app;

  build() {
    this.#app = new Sheep();

    this.resize();
    window.addEventListener('resize', this.resize);
    window.requestAnimationFrame(this.animate);
  }

  resize = () => {
    this.#app.resize();
  };

  animate = (curTime) => {
    this.#app.animate(curTime);
    window.requestAnimationFrame(this.animate);
  };
}
