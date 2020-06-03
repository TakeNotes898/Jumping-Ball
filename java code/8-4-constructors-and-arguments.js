// *************************************************
// *************************************************
// *************************************************
// floating bubbles
// *************************************************
// *************************************************
// *************************************************

Bubble b1;
Bubble b2;


void settings(){
  size (600, 600);
  b1 = new Bubble(64);
  b2 = new Bubble(16);
}

void draw(){
  background(225);
  b1.display();
  b1.assending();;
  b1.top();

  b2.display();
  b2.assending();;
  b2.top();

  //b1.x = mouseX;
  //b1.y = mouseY;

}

class Bubble {
  float x;
  float y;
  float diameter;
  //color bubbleColor;

  Bubble(float tempD) {
    x = width/2;
    y = height;
    diameter = tempD;
    //bubbleColor = tempC;
  }
  void assending(){
    --y;
    x = x + random (-2,2);
  }
  void top(){
    if (y < diameter/2){
      y = diameter/2;
    }
  }
  void display(){
    stroke(0);
    fill(127);
    ellipse(x, y, diameter, diameter);
  }

}






// *************************************************
// *************************************************
// *************************************************
// added color
// *************************************************
// *************************************************
// *************************************************
Bubble b1;
Bubble b2;


void settings(){
  size (600, 600);
  b1 = new Bubble(75,50,64,color(255,0,0));
  b2 = new Bubble(50,60,16,color(0,255,0));
}

void draw(){
  background(225);
  b1.display();
  b1.assending();;
  b1.top();

  b2.display();
  b2.assending();;
  b2.top();

  // b1.x = mouseX;
  // b1.y = mouseY;

}

class Bubble {
  float x;
  float y;
  float diameter;
  color bubbleColor;

  Bubble(float x, float y, float tempD, color tempC) {
    x = width/2;
    y = height;
    diameter = tempD;
    bubbleColor = tempC;
  }
  void assending(){
    --y;
    x = x + random (-2,3);
  }
  void top(){
    if (y < diameter/2){
      y = diameter/2;
    }
  }
  void display(){
    stroke(0);
    fill(127);
    ellipse(x, y, diameter, diameter);
  }

}
