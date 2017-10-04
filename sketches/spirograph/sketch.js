var R, r;
var p;
var t = 0;
var dt = 0.05;
var t_inner = 0;
var c = 0;
var dc = 1;

var point = [];

function mouseClicked() {
  background(0);
  r = random(0, R);
  p = random(0, r);
}

function setup() {
  createCanvas(600,600);
  colorMode(HSB);
  R = width/2;
  r = random(0, R);
  p = random(0, r);
  frameRate(1000);
  background(0);
}

function draw() {
  stroke(c, 255, 255);
	fill(c, 255, 255);

  // update the inner circle's rotation
  t_inner = -((R-r)/r)*t;

  // draw outer circle
  translate(R,R);
  rotate(t);

  // swith to the inner circle's axis and draw
  translate(R-r, 0);
  rotate(t_inner);
	ellipse(p,0, 1, 5);

  t += dt;
  c += dc;;
  if (c>255 || c < 0) dc *= -1;;
}
