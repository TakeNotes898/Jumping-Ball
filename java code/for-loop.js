//  whlie vs for loop



void settings(){
  size(400,300);
}

void draw() {
  background(0);
  stroke(225);
  strokeWeight(2);

  int x = 0;

  for (x = 0; x < width; x= x + 20){
    line(x,0,x,height);
  }

  int y = 0;
  while(y < height) {
    line(0,y,width,y);
    y = y + 20;
  }


  println(x);
}



// *************************************************
// *************************************************
// *************************************************
// time delay How to do oit
// *************************************************
// *************************************************
// *************************************************


float endLoop = 0;
void settings(){
  size(400,300);
}

void draw() {
  background(0);
  stroke(225);
  strokeWeight(2);

  int x = 0;

  for (x = 0; x < endLoop; x= x + 20){
    line(x,0,x,height);
    //delay(100); //NOT LIKE THAT
  }

  //int y = 0;
  //while(y < height) {
  //  line(0,y,width,y);
  //  y = y + 20;
  //}

endLoop = endLoop + 1;

  println(x);
}
