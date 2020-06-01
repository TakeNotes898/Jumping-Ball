function init() {
  context = myCanvas2.getContext('2d');
  setInterval(draw, 10);
}

function setup() {
  context.size(300, 300);
  context.background(50);
}


function draw() {
  context.stroke(255);
  context.line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
 context.background(50);
}
