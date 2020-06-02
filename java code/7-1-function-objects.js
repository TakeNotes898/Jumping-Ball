float x =0;
float y = 0;
float xspeed = 5;
float yspeed = 2.3;

void settings(){
  size(400,300);
}

void draw() {
  background(0);
  stroke(225);
  fill(127);
  ellipse(x,y,32,32);

  x = x + xspeed;
  y = y + yspeed;

  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }

  println(x);
}


// *************************************************
// *************************************************
// *************************************************
// 7.2
// *************************************************
// *************************************************
// *************************************************




void settings() {
  size(320,240);
}
void draw() {
  background(51);
  flower();
}

void flower() {
  fill(255,0,0);
  ellipse(100,100,20,20);
}
