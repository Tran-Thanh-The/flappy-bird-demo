class map {
  constructor(game) {
    this.background = new Image();
    this.game = game;

    this.x = 0;

    this.loadImage();
  }

  loadImage() {
    this.background.src = './img/background-day.png';
  }

  update() {
  }

  draw() {
    this.game.ctx.drawImage(this.background, 0, 0, 576, 1024, 0, 0, WIDTH, HEIGHT);
  }

}