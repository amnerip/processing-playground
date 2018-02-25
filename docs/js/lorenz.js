// TODO: webgl and p5.js aren't playing well with each other rn.
var x = 1;
var y = 1;
var z = 1;
var t = 0;
var dt = 0.01;

var sigma = 10.0;
var rho = 15.0;
var beta = 8.0/3.0;

var rot_x = 0;
var rot_y = 0;
var rot_z = 0;

// var scale = 0;
// var scale_dt = 0.01;
// var MAX_SCALE = 10;

var points = [];

var pg;
function setup() {
	var canvas = createCanvas(600, 600, WEBGL);
	pg = createGraphics(256, 256);
	canvas.parent('sketch-container')
	colorMode(HSB);
}

function draw() {
  background(0);
  stroke(255);

  translate(width/2, height/2);
  scale(5);

  // fill(0);

  var dx = sigma*(y-x)*dt;
  var dy = (x*(rho-z)-y)*dt;
  var dz = (x*y - beta*z)*dt;

  x+=dx;
  y+=dy;
  z+=dz;

  points.push(createVector(x,y,z));
  var c = 0;
  beginShape();
  for (let p of points) {
		console.log(points.length, c);
		stroke(c, 255, 255);
		vertex(p.x, p.y, p.z);
		c++;
		if (c > 255) c = 0;
  }
  endShape();
  rot_x += 0.001;
  rot_y += 0.001;
  rot_z += 0.001;

  // scale += scale_dt;
  // if (scale > MAX_SCALE || scale < 0) scale_dt *= -1;
}
