var boxObj = null;
var animate;

function init() {
  boxObj = document.getElementById('littleBox');
  boxObj.style.position = 'relative';
  boxObj.style.left = '0px';
}

function moveRight() {
  boxObj.style.left = parseInt(boxObj.style.left) + 10 + 'px';
  animate = setTimeout(moveRight, 20); // call moveRight in 20msec
}

function stop() {
  clearTimeout(animate);
  boxObj.style.left = '0px';
}

window.onload = init;
