// initial circle's radius
var R;

// colors:
var c = 0;
var dc = 0.3;

// rotation speed
var rot = 0;
var dr = 0.001;
//var dr = 0.01;

// recursion depth
var depth = 10;

// number of circles around center one
var num_arms = 8;

// change in scale of image
var sc = 0;
var ds = 0.005;
var sc_max = 2.0;
var sc_min = 1.0;

var b = 0;
var b_max = 3;

function mouseClicked() {
}

function setup() {
	var cnv = createCanvas(600, 600);
	colorMode(HSB);
	cnv.parent('sketch-container');
	background(0);
	R = width/2;
}


function draw() {
	//background(0);
	stroke(255-c, 128, 128);
	//stroke(255, 128, 128);
	strokeWeight(3);
	noFill();
	translate(width/2, height/2);
	scale(map(sin(sc), -1, 1, sc_min, sc_max));

	rect_branch(R,depth);
	for (i = 1; i < num_arms; i++) {
		rotate((2.0*PI)/num_arms);
		rect_branch(R,depth);
	}

	sc += ds;
	c += dc;
	if (c < 0 || c > 255) dc *= -1;
	rot += dr;
}

function rect_branch(r, num) {
	if (r < 2) return;
	ellipse(0,0, r, r);

	push();
	rotate(rot);
	translate(0, -r/2);
	rotate(rot);
	rect_branch(r*0.765, num-1);
	pop();
}
