var canvasWidth = document.querySelector(".container").offsetWidth;
var canvasHeight = document.querySelector(".container").offsetHeight;
const PAD = 80;
const resolution = 1;
const WIDTH = canvasWidth / resolution;
const HEIGHT = canvasHeight / resolution;

const app = new PIXI.Application({
  width: canvasWidth,
  height: canvasHeight + 10,
  backgroundColor: 0xf4ece9,
});
document.getElementById("container").appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const bunnyTexture = PIXI.Texture.from("../imgs/little-flower.svg");
function updateBunny(bunny) {
  bunny.x += bunny.vx;
  bunny.y += bunny.vy;
  if (bunny.x > WIDTH + PAD) {
    bunny.x -= WIDTH + 2 * PAD;
  }
  if (bunny.x < -PAD) {
    bunny.x += WIDTH + 2 * PAD;
  }
  if (bunny.y > HEIGHT + PAD) {
    bunny.y -= HEIGHT + 2 * PAD;
  }
  if (bunny.y < -PAD) {
    bunny.y += HEIGHT + 2 * PAD;
  }
}

function createBunny() {
  const bunny = new PIXI.Sprite(bunnyTexture);
  bunny.update = updateBunny;

  const angle = Math.random() * Math.PI * 2;
  const speed = 50.0; // px per second
  bunny.vx = (Math.cos(angle) * speed) / 60.0;
  bunny.vy = (Math.sin(angle) * speed) / 60.0;
  bunny.position.set(Math.random() * WIDTH, Math.random() * HEIGHT);
  bunny.anchor.set(0.5, 0.5);

  return bunny;
}

for (let i = 0; i < 10; i++) {
  container.addChild(createBunny());
}

app.ticker.add(() => {
  container.children.forEach(updateBunny);
});

//load textures
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

const tF = new PIXI.Sprite(texture[0]);
tF.anchor.set(0.5);
tF.x = 190;
tF.y = 50;

let fls = new PIXI.Sprite(texture[2]);
fls.x = 0;
fls.y = 380;
fls.anchor.set(0.5);

let blf = new PIXI.Sprite(texture[3]);
blf.y = parseInt((canvasHeight * 65) / 100);
blf.x = -90;

let lbf1 = new PIXI.Sprite(texture[4]);
lbf1.x = 100;
lbf1.y = parseInt(canvasHeight / 2);
lbf1.anchor.set(0.5);

container.addChild(tF, fls, blf, lbf1);

// app.ticker.add((delta) => {
//   florzinha.rotation += 0.02 * delta;
// });

/* alerta quadro */
var quadro = document.querySelector(".quadro");
var heightalerta = parseInt(document.querySelector(".alerta").offsetHeight / 2);
var widthtalerta = parseInt(document.querySelector(".alerta").offsetWidth / 2);
var hAltQuadro = parseInt(quadro.scrollHeight / 2);
var wAltQuadro = parseInt(quadro.clientWidth / 2);
quadro.style.top = heightalerta - hAltQuadro + "px";
quadro.style.left = widthtalerta - wAltQuadro + "px";

var modal = document.querySelector(".alerta");
var closeBtn = document.querySelector(".close");

closeBtn.onclick = () => {
  modal.style.display = "none";
};
