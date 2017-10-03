var R = 200;
var r = 100;
var t = 0;
var dt = 0.1;

function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0);
	noFill();
	stroke(255);

	translate(width/2, height/2);
	rotate(t);
	ellipse(0,0, 5,5);
	line(0,0, 0, R);

	ellipse(0, R, 10, 10);
	t += dt;
	translate(0, R);
	rotate(t);
	line(0,0, 0, r);
	ellipse(0,r, 5, 5);
}
