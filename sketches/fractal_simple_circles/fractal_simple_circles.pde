int depth = 1;
int maxDepth = 1;

void setup() {
  size(1200,700);
  background(0);
}

void mouseClicked() {
  maxDepth++;
}

void draw() {
  stroke(255);
  noFill();
  drawCircle(width/2.0, height/2.0, 300.0, 1);
}

void drawCircle(float x, float y, float r, int d) {
  if (d >= maxDepth) {
    return;
  }
  ellipse(x,y,r,r);
  drawCircle(x+r/2.0, y, r/2.0, d+1);
  //drawCircle(x-r/2.0, y, r/2.0, d+1);
  drawCircle(x, y+r/2.0, r/2.0, d+1);
  drawCircle(x, y-r/2.0, r/2.0, d+1);
}
