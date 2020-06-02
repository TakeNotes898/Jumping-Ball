Particle p1;
Particle p2;
Particle p3;

void settings(){
  size(600,600);
  p1 = new Particle (100,100,50);
  p2 = new Particle (100,150,60);
  p3 = new Particle();
}

void draw(){
  background(115);
  if(p1.overlaps(p2)){
    background(230,11,0);
  }
  p1.display();
  p2.display();
  p3.display();

  p2.x = mouseX;
  p2.y = mouseY;
}
class Particle {
  float x, y;
  float r;

  Particle(){
    x = random(width);
    y = random(height);
    r = random(4,18);
  }
  Particle(float tempX, float tempY, float tempR){
    x = tempX;
    y = tempY;
    r = tempR;
  }
  boolean overlaps(Particle nextGen){
    float d = dist(x,y,nextGen.x,nextGen.y);
    if (d < r + nextGen.r){
      return true;
    }else {
      return false;
    }
  }
  void display(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x,y,r*2,r*2);
  }
}
