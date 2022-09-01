import './webpack/dist/sheep.min.js';

window.onload = () => {
  const appBuilder = new AppBuilder();
  appBuilder.build();
};

class AppBuilder {
  #app;

  build() {
    WebFont.load({
      google: { families: ['Fjalla One'] },
      fontactive: () => {
        this.#app = new Sheep('Fjalla One');

        this.resize();
        window.addEventListener('resize', this.resize);
        window.requestAnimationFrame(this.animate);
      },
    });
  }

  resize = () => {
    this.#app.resize();
  };

  animate = (curTime) => {
    this.#app.animate(curTime);
    window.requestAnimationFrame(this.animate);
  };
}
