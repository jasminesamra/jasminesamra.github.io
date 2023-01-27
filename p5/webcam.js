let capture;

function setup() {
  createCanvas(480 * 2, 360 * 2);
    
  capture = createCapture(VIDEO);
  capture.size(480 * 2, 360 * 2);
  capture.hide();
    
  noStroke();
}

function draw() {
  background(200);
  pixelateCameraImage();
  
}

function getRandomColorValue() {
  return Math.random() * 255;
}

function pixelateCameraImage() {
  capture.loadPixels();
  const stepSize = 3;
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - capture.pixels[i * 4]) / 255;
      const sideLength = stepSize * darkness;
        
      const r = 75;
      const g =75;
      const b = 75;
        
      fill(r, g, b);
      square(x, y, sideLength);
    }
  }
}