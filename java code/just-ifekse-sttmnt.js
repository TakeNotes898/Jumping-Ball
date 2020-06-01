int circleX = 0;

void settings() {
 size(640, 360);
}
void draw() {
 background(50);
 fill(255);
 ellipse(circleX, 180, 24, 24);
 circleX = circleX + 1;

 if (circleX > 140) {
   background(250,100,0);
 }
 else if (circleX > 240) {
   background(100,250,0);
 }
 else if (circleX > 340) {
   background(100,0, 250);
 }
 else if (circleX > 440) {
   background(0,100, 250);
 }
}
