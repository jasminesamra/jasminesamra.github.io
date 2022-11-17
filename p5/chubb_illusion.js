function setup() {
  createCanvas(700, 700);
  background(220);
}

function draw() {
  animate();
}

var smallSquareSideIsLeft = false;
var loopCount = 0;

function animate() {
  drawLeftBg();
  drawRightBg();
  drawSmallSquare();
  if (loopCount % 8 == 0) {
    smallSquareSideIsLeft = !smallSquareSideIsLeft;
  }
  loopCount = loopCount + 1;
}

function drawLeftBg() {
  drawRect(50, 50, 300, 600, 10);
}

function drawRightBg() {
  drawRect(350, 50, 300, 600, 2); 
}

function drawSmallSquare() { 
  if (smallSquareSideIsLeft) {
    drawRect(150, 300, 100, 100, 4);
  } else {
    drawRect(450, 300, 100, 100, 4);
  }
}

function drawRect(topX, topY, lengthX, lengthY, pixelSize) {
  for (let x = topX; x <= topX + lengthX; x = x + pixelSize) {
    for (let y = topY; y <= topY + lengthY; y = y + pixelSize) {
      const rand = Math.random();
      
      if (rand > 0.5) {
        fill(0);
        stroke(0);
      } else if (rand > 0.15) {
        fill(255);
        stroke(255);
      } else {
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
        fill(r, g, b);
        stroke(r, g ,b);
      }
      square(x, y, pixelSize);
    }
  }
}