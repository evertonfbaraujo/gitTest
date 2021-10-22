var canvasWidth = document.querySelector(".container").offsetWidth;
var canvasHeight = document.querySelector(".container").offsetHeight;
const app = new PIXI.Application({
  width: canvasWidth,
  height: canvasHeight,
  backgroundColor: 0x1099bb,
});
document.getElementById("container").appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = [
 tf = PIXI.Texture.from("../imgs/top-right-flowers.svg"),
 wf = PIXI.Texture.from("../imgs/little-flower.svg")
]
// const texture = ;

const tF = new PIXI.Sprite(texture[0]);
tF.anchor.set(0.5);
tF.x = 190;
tF.y = 50;
container.addChild(tF);

let fls = new PIXI.Sprite(PIXI.Texture.from("../imgs/flower-left-side.png"))
fls.x = 0
fls.y = 380
fls.anchor.set(0.5)

let florzinha = new PIXI.Sprite(texture[1]);
florzinha.anchor.set(0.5)
florzinha.x = 100;
florzinha.y = 500;


container.addChild(florzinha, fls);

app.ticker.add((delta) => {

  florzinha.rotation += 0.02 * delta;
});
