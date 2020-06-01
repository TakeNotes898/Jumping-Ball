float x = 0;
float y = 0;
float spacing = 50;

void settings(){
  size(400,300);
}

void draw() {
  background(0);

  spacing = spacing + random(-2,2);

  stroke(225);
  strokeWeight(2);

//  x=50;
//  line(x,0,x,height);
//  x= x + 50;
//  line(x,0,x,height);
//// instead you should write a while loop//////////
x = 0;
while(x < width) {
  line(x,0,x,height);
  x= x + spacing;
}

y = 0;
while(y < height) {
  line(0,y,width,y);
  y = y + spacing;
}


  println(x);
}


// *************************************************
// *************************************************
// *************************************************
// static
// *************************************************
// *************************************************
// *************************************************


void settings(){
  size(400,300);
}

void draw() {
  background(0);
  stroke(225);
  strokeWeight(2);

  int x = 0;
  while(x < width) {
    line(x,0,x,height);
    x= x + 20;
  }

  int y = 0;
  while(y < height) {
    line(0,y,width,y);
    y = y + 20;
  }


  println(x);
}
