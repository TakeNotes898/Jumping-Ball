// *************************************************
// *************************************************
// *************************************************
// created a row and a column of stars
// *************************************************
// *************************************************
// *************************************************

float x = 0;
float y = 0;
float xspeed = 5;
float yspeed = 5;

void settings(){
  size(640,360);
}

void draw() {
  background(51);
  star(100, 100);
  star(200, 300);

  float x = 0;
  while(x < width) {
    star(x,y);
    x = x + 20;
  }

  float y = 0;
  while(y < height) {
    star(x,y);
    y = y + 20;
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

// *************************************************
// *************************************************
// *************************************************
// created start on mouse click
// *************************************************
// *************************************************
// *************************************************


float x = 0;
float y = 0;
float xspeed = 5;
float yspeed = 5;

void settings(){
  size(640,360);
}

void draw() {
  background(51);
  star(100, 100);
  star(x, y);

  //x = 0;
  //while (x < width){
  //  if (mouseX < 1) {
  //    x = x + mouseX;
  //  }
  //}
  //y = 0;
  //while (y < height){
  //  if (star(0,y) < 1) {
  //    y = y + mouseY;
  //  }
  //}

  while(x < width) {
    star(x,y);
    x = x + mouseX;
  }

  while(y < height) {
    star(x,y);
    y = y + mouseY;
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

//void moveStar(float x, float y){
//  x = x + xspeed;
//  y = y + yspeed;
//}
//void checkEdges(float x, float y){
//  if (x > width || x < 0) {
//    xspeed = xspeed * -1;
//  }
//  if (y > height || y < 0) {
//    yspeed = yspeed * -1;
//  }
//}
