// parameters for the formulas
var n = 0.0;
var c = 9;

// color change
var cc = 0;
var dc = 1;

var spheres = [];
var max_depth = 2000;

var rot = 0;
var dr = 1;

var max_r;
function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	colorMode(HSB);

	background(0);
	// for (n = 0; n < max_depth; n++) {
	var r = 0;
	max_r = width/4;
	while (r <= max_r) {
		var a = n * 137.5;
		r = c * sqrt(n);

		var x = r*cos(a);
		var y = r*sin(a);
		spheres.push(createVector(x, y, r));
		n++;
	}
}

function draw() {
	background(255);
	translate(width/2, height/2);
	rotate(rot);
	rot += dr;

	// cc = 0;
	for (let s of spheres) {
		// fill(0);
		fill(cc, 255, 255);
		stroke(255);
		var ellipse_width = map(s.z*s.z, 0, max_r*max_r/2, c, 2*c);
		// var ellipse_width = map(s.z, 0, width/2, c, 2*c);
		ellipse(s.x, s.y, ellipse_width, ellipse_width);

	}
		cc += dc;
		if (cc > 255 || cc < 0) dc *= -1;

}
