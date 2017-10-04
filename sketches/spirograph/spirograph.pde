// spirograph attempt
float R, r;
float p;

float t = 0;
float dt = 0.01;
float t_inner = 0;

int c = 0;
void mouseClicked() {
  background(0);
  r = random(0, R);
  p = random(0, r);
}

void setup() {
  size(600,600);
  colorMode(HSB);
  R = width/2;
  r = random(0, R);
  p = random(0, r);
  background(0);
  frameRate(500);
}

void draw() {
  stroke(c, 255, 255);
  noFill();
  
  // update the inner circle's rotation
  t_inner = -((R-r)/r)*t;
  
  // draw outer circle
  translate(R,R);
  rotate(t);
  
  // swith to the inner circle's axis and draw
  translate(R-r, 0);
  rotate(t_inner);
  point(p, 0);
  
  t += dt;
  c++;
  if (c>255) c=0;
}