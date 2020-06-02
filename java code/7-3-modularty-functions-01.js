float x =0;
float y = 0;
float xspeed = 5;
float yspeed = 2.3;

void settings(){
  size(400,300);
}
void draw() {
  background(0);
  displayBall();
  moveBall();
  checkEdges();
  //println(x);
}

void displayBall(){
  stroke(225);
  fill(127);
  ellipse(x,y,32,32);
}
void moveBall(){
  x = x + xspeed;
  y = y + yspeed;
}
void checkEdges(){
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }
}
// *************************************************
// *************************************************
// *************************************************
// draw 2 exactly the same stars in the same spot
// *************************************************
// *************************************************
// *************************************************

void settings(){
  size(400,300);
}

void draw() {
  background(51);
  star();
  star();
}

void star(){

  stroke(225);
  strokeWeight(2);
  fill(127);

// here we are hard coding a series of vertices

beginShape();
vertex(100,50);
vertex(114,80);
vertex(147,85);
vertex(123,107);
vertex(129,140);
vertex(100, 125);
vertex(71,140);
vertex(77,107);
vertex(53,85);
vertex(86,80);
endShape(CLOSE);
}


// *************************************************
// *************************************************
// *************************************************
// draw 2 stars in different locations
// *************************************************
// *************************************************
// *************************************************
float x =0;
float y = 0;
float xspeed = 5;
float yspeed = 2.3;

void settings(){
  size(640,360);
}

void draw() {
  background(51);
  star(100, 100);
  star(200, 300);
  moveStar();
  checkEdges();

  int x = 0;
  while(x < width) {
    star(x,y);
    x= x + xspeed;
  }

  int y = 0;
  while(y < height) {
    star(x,y);
    y = y + yspeed;
}
}

void star(float x, float y){

  stroke(225);
  strokeWeight(2);
  fill(127);
// here we are hard coding a series of vertices
  beginShape();
  vertex(x, y-50);
  vertex(x+14, y-20);
  vertex(x+47, y-15);
  vertex(x+23, y+7);
  vertex(x+29, y+40);
  vertex(x, y+25);
  vertex(x-29, y+40);
  vertex(x-23, y+7);
  vertex(x-47, y-15);
  vertex(x-14, y-20);
  endShape(CLOSE);
}

void moveStar(){
  x = x + xspeed;
  y = y + yspeed;
}
void checkEdges(){
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }
