class Scketh {
  constructor() {
    this.width = document.querySelector(".container").offsetWidth;
    this.height = document.querySelector(".container").offsetHeight;
    this.app = new PIXI.Application({
      width: this.width,
      height: this.height,
      backgroundColor: 0xf4ece9,
      resolution: 1,
      resizeTo: container,
    });
    document.getElementById("container").appendChild(this.app.view);
    this.add();
    this.render();
  }
  add() {
    console.log("teste add()");
  }
  render() {
    console.log(this.app);
  }
}

new Scketh();
