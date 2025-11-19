// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var mouseRadius = 10;

class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(50, 50) * Math.cos(angle);
    this.yspeed = random(50, 50) * Math.sin(angle);
    this.r = random(120, 240);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width || this.x < 0) this.xspeed *= -1;
    if (this.y > height || this.y < 0) this.yspeed *= -1;
    // Find distance to mouse
    let distanceToMouse = dist(this.x, this.y, mouseX, mouseY);
    // Is it within the mouse's radius?
    if (distanceToMouse < mouseRadius) {
      // Is it hitting on the left?
      if (mouseX < this.x) {
        this.xspeed = abs(this.xspeed);
      } else if (mouseX > this.x) {
        // The right?
        this.xspeed = abs(this.xspeed) * -1;
      }

      // Is it hitting from the top?
      if (mouseY < this.y) {
        this.yspeed = abs(this.yspeed);
      } else if (mouseY > this.y) {
        // The bottom?
        this.yspeed = abs(this.yspeed) * -1;
      }
    }
  }

  show() {
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
