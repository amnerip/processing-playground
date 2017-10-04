var depth = 1;
var maxDepth = 1;

function setup() {
  createCanvas(1200,700);
  background(0);
}

function mouseClicked() {
  maxDepth++;
}

function draw() {
  stroke(255);
  noFill();
  drawCircle(width/2.0, height/2.0, 300.0, 1);
}

function drawCircle(float x, float y, float r, int d) {
  if (d >= maxDepth) {
    return;
  }
  ellipse(x,y,r,r);
  drawCircle(x+r/2.0, y, r/2.0, d+1);
  drawCircle(x, y+r/2.0, r/2.0, d+1);
  drawCircle(x, y-r/2.0, r/2.0, d+1);
}
