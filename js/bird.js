class bird {
  constructor(game) {
    this.game = game;
    this.bird = new Image();
    this.die = true;
    this.start = false;

    this.speed = 0;
    this.y = 250;
    
    this.loadImage();
    this.listenKeyBoard();
  }

  loadImage() {
    this.bird.src = "../img/mid.png";
  }

  listenKeyBoard() {
    document.addEventListener("keydown", (event) => {
      if (!this.start) {
        this.start = true;
        this.die = false;
      }
      if ( this.die && this.start)
        this.game.setUp();
      if ( event.key == ' ' && !this.die) {
        this.speed = -8;
        this.y -= 20;
      }
    })
  }

  update() {
    if ( !this.die ) {
      if (this.y <= DieY) {
        this.y += this.speed
      }
      else {  
        this.die = true;
        this.game.audio.src = '../sound/die.ogg';
        this.game.audio.play();
        // this.game.bird.start = false;
      }
      (this.game.currentFame%3 === 0) ? this.speed += 2 : {};
      // this.speed ++;
    }
    else if ( !this.start){
      if ( this.game.currentFame%10 === 0) {
        (this.y != 250) ? this.y = 250 : this.y = 255;
      }
    }
  } 

  draw() { 
    this.game.ctx.drawImage(this.bird, 0, 0, 68, 48, BirdX, this.y, BirdW, BirdH);
  }
}