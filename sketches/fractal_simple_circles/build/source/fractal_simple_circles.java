import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class fractal_simple_circles extends PApplet {

int depth = 1;
int maxDepth = 1;

public void setup() {
  
  background(0);
}

public void mouseClicked() {
  maxDepth++;
}

public void draw() {
  stroke(255);
  noFill();
  drawCircle(width/2.0f, height/2.0f, 300.0f, 1);
}

public void drawCircle(float x, float y, float r, int d) {
  if (d >= maxDepth) {
    return;
  }
  ellipse(x,y,r,r);
  drawCircle(x+r/2.0f, y, r/2.0f, d+1);
  //drawCircle(x-r/2.0, y, r/2.0, d+1);
  drawCircle(x, y+r/2.0f, r/2.0f, d+1);
  drawCircle(x, y-r/2.0f, r/2.0f, d+1);
}
  public void settings() {  size(1200,700); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "fractal_simple_circles" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
