// Doing the starfield challenge first

// * using PVector
// * general environment of having multiple moving objects
int NUM_STARS = 100;
int STAR_MAX = 4;
//PVector ORIGIN = new PVector(width/2, height/2);
PVector ORIGIN = new PVector(0, 0);

ArrayList<PVector> stars = new ArrayList<PVector>();

void setup() {
  size(800, 600);
  for (int x = 0; x < NUM_STARS; x++) {
    stars.add(new PVector(random(-width/2, width/2), random(-height/2, height/2), 1));
  }
}

void draw() {
  background(0);
  stroke(255);
  translate(width/2, height/2);

  for (PVector s : stars) {
    float dist = s.dist(ORIGIN);
    
    // size varies according to how long the star has been in view this is
    // maintained by the s.z variable
    int size = min((int)s.z, STAR_MAX);
    ellipse(s.x, s.y, size, size);
    
    // creating the movement in the stars is finding the unit vector from the center
    // of the canvas to the star and moving the star along that direction.
    PVector delta = (new PVector(s.x, s.y, 5)).normalize().mult(s.z);
    
    // update the point:
    s.add(delta);

    // if it's out of range of the canvas, make new star:
    if (abs(s.x) > width/2 || abs(s.y) > height/2) {
      s.set(random(-width/2, width/2), random(-height/2, height/2), 1);
    }
  }
}