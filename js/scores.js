class scores {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.img_0 = new Image();
    this.img_1 = new Image();
    
    this.loadImage();
  }

  loadImage() {
    this.img_0.src = `../img/${Math.floor(this.score/10)}.png`;
    this.img_1.src = `../img/${this.score%10}.png`;
  }

  update() {
    if (this.game.pipe.x1 === 25 || this.game.pipe.x2 === 25) {
      this.score ++;
      this.loadImage();
    }
    if (this.game.pipe.x1 === 28 || this.game.pipe.x2 === 28) {
      this.game.audio.src = '../sound/point.ogg';
      this.game.audio.play();
    }
  }

  draw() {
    this.game.ctx.drawImage(this.img_0, 0, 0, 48, 72, 15, 15, 30, 45);
    this.game.ctx.drawImage(this.img_1, 0, 0, 48, 72, 50, 15 , 30, 45);
  }
}