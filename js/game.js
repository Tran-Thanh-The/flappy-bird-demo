
class game {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d'); 
    this.canvas.height = HEIGHT;
    this.canvas.width = WIDTH;
    document.querySelector('#app').appendChild(this.canvas);

    this.currentFame = 0;

    this.map = new map(this);
    this.ground = new ground(this);
    this.pipe = new colum(this);
    this.bird = new bird(this);

    this.loop();
  }

  loop() {
    this.draw();
    this.update();
    this.fame();
    setTimeout(() => {this.loop()}, 30);
  }

  fame() {
    this.currentFame ++;
    if ( this.currentFame > 30)
      this.currentFame = 0;
  }

  setUp() {
    this.bird.y = 250;
    this.bird.start = false;
    this.pipe.x1 = 520;
    this.pipe.x2 = 730;
    this.pipe.y1 = 50 + Math.floor(Math.random()*230);
    this.pipe.y2 = Math.floor(Math.random()*230);
  }

  update() {
    this.map.update();
    this.pipe.update();
    this.ground.update();
    this.bird.update();
  }

  draw() {
    this.map.draw();
    this.pipe.draw();
    this.ground.draw();
    this.bird.draw();
  }

}

let g = new game();