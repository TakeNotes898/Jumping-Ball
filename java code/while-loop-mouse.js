float x = 0;

void settings(){
  size(400,300);
}

void draw() {
  background(0);

  x = 0;
  while (x < width){
    if (mouseX < 1) {
      x = x + 1;
    } else {
      x = x + mouseX;
    }


  fill(101);
  stroke(225);
  ellipse(x, 150,16,16);
  }
  println(x);
}
