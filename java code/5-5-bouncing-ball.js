float circleX;
float circleY;
float xspeed = 20;

void settings() {
  size(640, 360);
  circleX = 0;
  circleY = 0;
}
void draw() {
  background(51);
  fill(102);
  stroke(255);
  ellipse(circleX,circleY, 32, 32);
  circleX = circleX + xspeed;
 if ((circleX > width) || (circleX < 0)) {
    xspeed = xspeed * -1;
  }

  circleY = circleY + xspeed;
 if ((circleY > height) || (circleY == 0)) {
    xspeed = xspeed * -1;
  }
}
