
void settings(){
  size(400,300);
}

void draw() {
  background(0);
  stroke(225);
  strokeWeight(2);
  fill(127);

  int x = 0;
  int y = 0;

  for (x = 0; x < width; x = x + 20){
  for (y = 0; y < height; y = y + 20){
    fill(random(255)); // or use mouseX and get the gradient
    rect(x,y,20,20);
  }
  }
  println(x);
}
