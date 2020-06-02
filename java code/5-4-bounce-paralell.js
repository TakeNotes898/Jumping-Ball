int x = 15;
boolean going = false;

void settings() {
 size(640, 360);
}
void draw() {
 background(0);
 fill(255);

 ellipse(x, 150, 24, 24);
 if (going){
 x = x + 2;
 }
}

void mousePressed() {
 if (going) {
 going = false;
 }
 else {
   going = true;
 }
}
