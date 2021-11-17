class ground {
  constructor(game) {
    this.ground = new Image();
    this.game = game;

    this.x = 0;

    this.loadImage();
  }

  loadImage() {
    this.ground.src = '../img/base.png';
  }

  update() {
    if ( !this.game.bird.die || !this.game.bird.start )
      this.x = (this.x <= -288) ? this.x = 0 : this.x -= 2; 
  }

  draw() {
    this.game.ctx.drawImage(this.ground, 0, 0, 672, 224, this.x, Ground, WIDTH,  140);
    this.game.ctx.drawImage(this.ground, 0, 0, 672, 224, this.x+WIDTH, Ground, WIDTH,  140);
  }
} 