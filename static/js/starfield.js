var NUM_STARS = 100;
var STAR_MAX = 4;
var ORIGIN;
var stars = [];

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.parent('sketch-container');
	ORIGIN = createVector(0,0,0);
	for (i = 0; i < NUM_STARS; i++) {
		stars.push(createVector(random(-width/2, width/2), random(-height/2, height/2), 1));
	}
}

function draw() {
	background(0);
	stroke(255);
	translate(width/2, height/2);

	for (let s of stars) {
		var dist = s.dist(ORIGIN);

		// size varies according to how long the star has been in view this is
		// maintained by the s.z variable
		var size = min(s.z, STAR_MAX);
		ellipse(s.x, s.y, size, size);

		// creating the movement in the stars is finding the unit vector from the center
		// of the canvas to the star and moving the star along that direction.
		var delta = (createVector(s.x, s.y, 5)).normalize().mult(s.z);

		// update the point:
		s.add(delta);

		// if it's out of range of the canvas, make new star:
		if (abs(s.x) > width/2 || abs(s.y) > height/2) {
			s.set(random(-width/2, width/2), random(-height/2, height/2), 1);
		}
	}
}
