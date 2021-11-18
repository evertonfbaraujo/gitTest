class Scketh {
  constructor() {
    this.width = document.querySelector(".container").offsetWidth;
    this.height = document.querySelector(".container").offsetHeight;
    this.pad = 80;
    this.app = new PIXI.Application({
      width: this.width,
      height: this.height,
      backgroundColor: 0xf4ece9,
      resolution: 1,
      resizeTo: container,
    });
    document.getElementById("container").appendChild(this.app.view);
    this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);
    this.time = 0;
    this.add();
    this.add2();
    this.sizeScreen();
    this.render();
  }
  sizeScreen() {
    if (this.width >= 768) {
      this.tF.x = parseInt((this.width * 75) / 100);
      // this.
    }
    if (this.width <= 411) {
      this.florLateral.x = this.width + 20;
    }
  }
  add() {
    let dataLP = parseInt(document.querySelector(".grid-1").offsetLeft);
    let dataTP = parseInt(document.querySelector(".grid-1").offsetTop);
    this.tF = new PIXI.Sprite(
      PIXI.Texture.from("../imgs/top-right-flowers.svg")
    );
    this.tF.anchor.set(0.5);
    this.tF.x = 190;
    this.tF.y = 50;

    this.blf = new PIXI.Sprite(
      PIXI.Texture.from("../imgs/bottom-left-flowers.svg")
    );
    this.blf.y = parseInt((this.height * 72) / 100);
    this.blf.x = -90;

    this.fls = new PIXI.Sprite(
      PIXI.Texture.from("../imgs/flower-left-side.png")
    );
    this.fls.x = 0;
    this.fls.y = 380;
    this.fls.anchor.set(0.5);

    this.florLateral = new PIXI.Sprite(
      PIXI.Texture.from("../imgs/flor_lado.png")
    );
    this.florLateral.x = this.width;
    this.florLateral.y = 600;
    this.florLateral.rotation = 2.1;
    this.florLateral.anchor.set(0.5);

    this.florbranca = new PIXI.Sprite(
      PIXI.Texture.from("../imgs/white_flor.png")
    );
    this.florbranca.anchor.set(0.5, 0.5);
    this.florbranca.alpha = 0;
    this.florbranca.scale.x = 0;
    this.florbranca.rotation = 0;
    this.florbranca.scale.y = 0;
    this.florbranca.x = dataLP + 20;
    this.florbranca.y = dataTP + 75;

    this.flormarron = new PIXI.Sprite(
      PIXI.Texture.from("../imgs/brown_flor.png")
    );
    this.flormarron.x = dataLP + 60;
    this.flormarron.y = dataTP + 22;
    this.flormarron.anchor.set(0.5);
    this.flormarron.rotation = 0;
  }
  add2() {
    const WIDTH = this.width;
    const HEIGHT = this.height;
    const PAD = this.pad;
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
      bunny.vx = (Math.cos(angle) * speed) / 550.0;
      bunny.vy = (Math.sin(angle) * speed) / 160.0;
      bunny.position.set(Math.random() * WIDTH, Math.random() * HEIGHT);
      bunny.anchor.set(0.5, 0.5);

      return bunny;
    }

    for (let i = 0; i < 10; i++) {
      this.container.addChild(createBunny());
    }

    this.app.ticker.add(() => {
      this.container.children.forEach(updateBunny);
    });
  }
  render() {
    let tl = gsap.timeline({
      defaults: { duration: 2, repeat: -1, yoyo: true },
    });
    tl.to(this.florbranca.scale, {
      x: 2.0,
      y: 2.0,
    });
    let tlShow = gsap.timeline({
      defaults: { duration: 2, repeat: -1, yoyo: true },
    });
    tlShow.to(this.florbranca, {
      alpha: 1,
    });
    this.app.ticker.add((delta) => {
      this.florbranca.rotation -= 0.009 * delta;
    });
    this.app.stage.addChild(
      this.tF,
      this.blf,
      this.fls,
      this.florLateral,
      this.florbranca,
      this.flormarron
    );
  }
}

new Scketh();
