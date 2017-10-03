float x = 1;
float y = 1;
float z = 1;
float t = 0;
float dt = 0.01;

float sigma = 10.0;
float rho = 15.0;
float beta = 8.0/3.0;

float rot_x = 0;
float rot_y = 0;
float rot_z = 0;

float scale = 0;
float scale_dt = 0.01;
float MAX_SCALE = 10;

ArrayList<PVector> points = new ArrayList<PVector>();

void setup() {
  size(600,600, P3D);
  colorMode(HSB);
  frameRate(1000);
}

void draw() {
  background(0);
  stroke(255);
  translate(width/2, height/2);
  scale(scale);
  noFill();
    lights();

  rotateX(rot_x);
  //rotateY(rot_y);
  //rotateZ(rot_z);
  float dx = sigma*(y-x)*dt;
  float dy = (x*(rho-z)-y)*dt;
  float dz = (x*y - beta*z)*dt;

  x+=dx;
  y+=dy;
  z+=dz;
  
  points.add(new PVector(x,y,z));
  
  int c = 0;
  beginShape();
  for (PVector p : points) {
    stroke(c, 255, 255);
    vertex(p.x, p.y, p.z);
      c++;
        if (c > 255) c = 0;


  }
  endShape();
  rot_x += 0.001;
  rot_y += 0.001;
  rot_z += 0.001;
  scale += scale_dt;
  if (scale > MAX_SCALE || scale < 0) scale_dt *= -1;
}