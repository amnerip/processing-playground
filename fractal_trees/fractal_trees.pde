int depth = 1;
int maxDepth = 1;
float rot;

void setup() {
  size(600,600);
  colorMode(HSB);
  background(0);
}

void mouseClicked() {
  maxDepth++;
}

void draw() {
  background(0);
  stroke(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 255);
  rot = map(mouseY, 0, height, 0, PI);
  noFill();
  translate(width/2, height);
  rotate(-rot);
  drawStem(rot, 150.0, 0);
}

void drawStem(float x, float l, int d) {
  if (d >= maxDepth) {
    return;
  }
  rotate(x);
  line(0,0,0,-l);
  translate(0,-l);
  
  pushMatrix();
  drawStem(x, l*0.67, d+1);
  popMatrix();
  pushMatrix();
  drawStem(-x, l*0.67, d+1);
  popMatrix();
}