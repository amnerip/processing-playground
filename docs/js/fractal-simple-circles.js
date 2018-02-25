var depth = 1;
var maxDepth = 1;

var MAX_CLICKS = 7;

function setup() {
  // var cnv = createCanvas(1200,700);
  var cnv = createCanvas(600,600);
	cnv.parent('sketch-container');
  background(0);
}

function mouseClicked() {
  if (maxDepth < MAX_CLICKS) {
    maxDepth++;
  }
}

function draw() {
  stroke(255);
  noFill();
  drawCircle(width/2.0, height/2.0, 300.0, 1);
}

function drawCircle(x, y, r, d) {
  var x = parseFloat(x);
  var y = parseFloat(y);
  var r = parseFloat(r);
  var d = parseInt(d);

  if (d >= maxDepth) {
    return;
  }
  ellipse(x,y,r,r);
  drawCircle(x+r/2.0, y, r/2.0, d+1);
  drawCircle(x, y+r/2.0, r/2.0, d+1);
  drawCircle(x, y-r/2.0, r/2.0, d+1);
}
