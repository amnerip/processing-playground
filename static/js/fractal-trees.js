var depth = 1;
var maxDepth = 1;
var rot;

function setup() {
  // size(600,600);
  var cnv = createCanvas(600, 600);
	cnv.parent('sketch-container');
  colorMode(HSB);
  background(0);
}

function mouseClicked() {
  maxDepth++;
}

function draw() {
  background(0);
  stroke(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 255);
  rot = map(mouseY, 0, height, 0, PI);
  noFill();
  translate(width/2, height);
  rotate(-rot);
  drawStem(rot, 150.0, 0);
}

function drawStem(x, l, d) {
  if (d >= maxDepth) {
    return;
  }
  rotate(x);
  line(0,0,0,-l);
  translate(0,-l);

  push();
  drawStem(x, l*0.67, d+1);
  pop();
  push();
  drawStem(-x, l*0.67, d+1);
  pop();
}
