// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation
let paused = false;
var blobs = []

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  for (i = 0; i < 10; i++) blobs.push(new Blob(random(0, width), random(0, height)));
}

function draw() {

  // UPDATE CODE HERE: What do we want to do here? We should check if we're paused and, if so, skip all the other drawing code.

  background(450);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 20 * blobs[i].r / d;
      }
      set(x, y, color(sum, 255, 255));
    }
  }
  updatePixels();

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}

function keyPressed() {
  if (key === 'p') {
    if (paused === true) {
      paused = false;
      loop();
    } else {
      paused = true;
      noLoop();
    }
  }
}
