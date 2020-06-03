// *************************************************
// *************************************************
// *************************************************
// returning to the 8-4 floating bubbles
// *************************************************
// *************************************************
// *************************************************

//Bubble b1;
//Bubble b2;

Bubble [] bubbles = new Bubble[40];

void settings(){
  size (600, 600);

  for (int i = 0; i < bubbles.length; i++){
  bubbles[i] = new Bubble(random(60));
  }
}

void draw(){
  background(225);

  for (int i = 0; i < bubbles.length; i++){
  bubbles[i].display();
  bubbles[i].assending();;
  bubbles[i].top();
  }
  //b1.x = mouseX;
  //b1.y = mouseY;

}

class Bubble {
  float x;
  float y;
  float diameter;
  float yspeed;
  //float r;
  //color bubbleColor;

  Bubble(float tempD) {
    x = random(width);
    y = height;
    diameter = tempD;
    yspeed = random(0.5,2.5);
    //r = radius;
    //bubbleColor = tempC;
  }
  void assending(){
    y = y - yspeed;
    x = x + random(-2,2);
    }

  void top(){
    if (y < 0 - diameter) {
    y = height + diameter;
    }
  }
  void display(){
    stroke(0);
    fill(127);
    ellipse(x, y, diameter, diameter);
  }

}
