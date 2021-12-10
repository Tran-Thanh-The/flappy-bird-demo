class colum {
  constructor(game) {
    this.game = game;
    this.colum1 = new Image();
    this.colum2 = new Image();
    this.x1 = 520;
    this.x2 = 730;
    this.y1 = 50 + Math.floor(Math.random()*230);
    this.y2 = Math.floor(Math.random()*230);

    this.loadImage();
  }

  loadImage() {
    this.colum1.src = './img/pipe.png';
    this.colum2.src = './img/pipe2.png';
  }

  update() {
    if ( !this.game.bird.die) {
      this.x1 -= 3;
      this.x2 -= 3;
      if (this.x1 <= -pipeW) {
        this.x1 = WIDTH+1;
        this.y1 = Math.floor(Math.random()*230);
      }
      if (this.x2 <= -pipeW) {
        this.x2 = WIDTH+1;
        this.y2 = Math.floor(Math.random()*230);
      }
      if ( this.x1 >= DieX2 && this.x1 <= DieX1) {
        if (!(this.game.bird.y >= this.y1+50 && this.game.bird.y <= this.y1 + 140)) {
          this.game.bird.die = true;
          this.game.audio.src = './sound/die.ogg';
          this.game.audio.play();
        }
      } 
      if ( this.x2 >= DieX2 && this.x2 <= DieX1) {
        if (!(this.game.bird.y >= this.y2+50 && this.game.bird.y <= this.y2 + 140)) {
          this.game.bird.die = true;
          this.game.audio.src = './sound/die.ogg';
          this.game.audio.play();
        }
      } 
    } 
  }  

  draw() {
    this.game.ctx.drawImage(this.colum2, 0, 0, 104, 640, this.x1, this.y1 - 350, pipeW, pipeH);
    this.game.ctx.drawImage(this.colum1, 0, 0, 104, 640, this.x1, this.y1 + 170, pipeW, pipeH);

    this.game.ctx.drawImage(this.colum2, 0, 0, 104, 640, this.x2, this.y2 - 350, pipeW, pipeH);
    this.game.ctx.drawImage(this.colum1, 0, 0, 104, 640, this.x2, this.y2 + 170, pipeW, pipeH);
  }
}