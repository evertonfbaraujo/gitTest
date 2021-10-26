var canvasWidth = document.querySelector(".container").offsetWidth;
var canvasHeight = document.querySelector(".container").offsetHeight;
const app = new PIXI.Application({
  width: canvasWidth,
  height: canvasHeight + 10,
  backgroundColor: 0x1099bb,
});
document.getElementById("container").appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const texture = [
  // Top Flowers
  (tf = PIXI.Texture.from("../imgs/top-right-flowers.svg")),
  //Little white Flower
  (lwf = PIXI.Texture.from("../imgs/little-flower.svg")),
  //Big Flower side left
  (lsf = PIXI.Texture.from("../imgs/flower-left-side.png")),
  //Bottom Flowers
  (bf = PIXI.Texture.from("../imgs/bottom-left-flowers.svg")),
  //Brown Flower
  (lbf = PIXI.Texture.from("../imgs/little-brown-flower.svg")),
];
// const texture = ;

const tF = new PIXI.Sprite(texture[0]);
tF.anchor.set(0.5);
tF.x = 190;
tF.y = 50;

let fls = new PIXI.Sprite(texture[2]);
fls.x = 0;
fls.y = 380;
fls.anchor.set(0.5);

let florzinha = new PIXI.Sprite(texture[1]);
florzinha.anchor.set(0.5);
florzinha.x = 100;
florzinha.y = 500;

let blf = new PIXI.Sprite(texture[3]);
blf.y = parseInt((canvasHeight * 65) / 100);
blf.x = -90;

let lbf1 = new PIXI.Sprite(texture[4]);
lbf1.x = 100;
lbf1.y = parseInt(canvasHeight / 2);
lbf1.anchor.set(0.5);

container.addChild(tF, florzinha, fls, blf, lbf1);

app.ticker.add((delta) => {
  florzinha.rotation += 0.02 * delta;
});
