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

// *************************************************
// *************************************************
// *************************************************
// pass by refrence
// *************************************************
// *************************************************
// *************************************************

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

  p1.overlaps(p2); // changed not into a function but a call
  p3.overlaps(p2); //

  p1.display();
  p2.display();
  p3.display();

  p2.x = mouseX;
  p2.y = mouseY;
}

class Particle {
  float x, y;
  float r;
  color col; // added new local variable

  Particle(){
    x = random(width);
    y = random(height);
    r = random(4,18);
    col = color(0); // added the value of color even though if it is not used nothing changes. i am going to go and guesse that this is for the order and organization. man i am freaking out... chill chill chill... i am good thank you
  }
  Particle(float tempX, float tempY, float tempR){
    x = tempX;
    y = tempY;
    r = tempR;
  }
  void overlaps(Particle nextGen){ //changed from boolean to void
    float d = dist(x,y,nextGen.x,nextGen.y);
    if (d < r + nextGen.r){
      // return true;     // delet that
      col = color(0,255,0,100);
      nextGen.col = color(255,0,0,100);
    }else {
      // return false;   // delet that
      col = color(0,100);
      nextGen.col = color(0,100);
    }
  }
  void display(){
    stroke(255);
    strokeWeight(4);
    fill(col); // changed from noFill() to fill(col)
    ellipse(x,y,r*2,r*2);
  }
}
