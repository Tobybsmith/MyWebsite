var playerY;
var playerYAcc;
var g = 0.35;
var jump = -6;
var doJump = false;
let pipes = [];
var space = 120;
var pipeC;
var bkg;
var menu = true;
var dead = false;

function setup() {
  createCanvas(800, 400);
  playerY = 200;
  playerYAcc = 0;
  pipeC = color(0, map(random(0, 100), 1, 100, 0, 255), 0);
  bkg = color(69, 197, 217);
  background(bkg);
}

function draw() {
  if (menu && !dead) {
    {
      text("Click to begin falppy bird!", 400, 200);
    }
  } else if (!menu && !dead)
  {
    background(bkg);
    //do physics
    playerY += playerYAcc;
    playerYAcc += g;
    if (playerYAcc < -10) {
      playerYAcc = -10;
    }
    if(playerY > 400)
      {
        dead = true;
      }
    //draw the screen
    fill(100, 100, 100);
    ellipse(50, playerY, 25, 25);
    //do pipes
    if (frameCount % space === 0) {
      pipeC = color(0, map(random(0, 100), 1, 100, 50, 205), 0);
      pipes.push(new Pipe(800, random(100, 300), pipeC, 150));
    }
    for (var i = pipes.length - 1; i > 0; i--) {
      var p = pipes.at(i);
      p.x -= 5;
      p.d();
      if (p.x < -50) {
        pipes.shift();
        break;
      }
      if (p.x > 50 && p.x < 100) {
        if (playerY > p.y || playerY < p.y - 100) {
          dead = true;
        }
      }
    }
  }
  else
    {
      background(bkg);
      text("You Died!", 400, 200);
    }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    playerYAcc = jump;
  }
}
function mousePressed(){
  menu = false;
}
class Pipe {
  constructor(x, y, c, s) {
    this.x = x;
    this.y = y;
    this.color = c;
    this.gap = s;
  }
  d() {
    fill(this.color);
    rect(this.x, this.y, 50, 400 - this.y);
    rect(this.x, this.y - 100, 50, this.y - 700);
  }
}
