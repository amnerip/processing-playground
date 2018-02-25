// sine waves from both axis, purple, yellow color pallete
var x = 0.0;
var dx;

var num_dots = 100.0;
var spacing;
var speed = 200.0;

function setup() {
	var cnv = createCanvas(600, 600);
	cnv.parent('sketch-container');
	spacing = width/num_dots;
	dx = (2.0*PI)/width;
}

function draw() {
	background(100, 27, 134);

	translate(0, height/2);
	for (i = 0; i < num_dots; i++) {
		fill(197, 201, 33);
		push();
		ellipse((i*spacing+x)%width,-width/2*sin(dx*(x-i*spacing)), 5, width/2);
		translate(width/2, -height/2);
		rotate(PI/2);
		ellipse((i*spacing+x)%width, -width/2*sin(dx*(x-i*spacing)), 5, width/2);
		pop();
	}

	x += speed*dx;
	if (x > width) x = 0.0;
}
