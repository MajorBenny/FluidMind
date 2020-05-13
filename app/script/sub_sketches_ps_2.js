var constellation = [];
var n;
var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); 
  n = 400;

  for (var i = 0; i <= n; i++) {
    constellation.push(new star());
  }
  strokeWeight(.5);
  stroke(255,80);
  
}

function draw() {

  background(0);

  for (var i = 0; i < constellation.length; i++) {
    constellation[i].update();
    for (var j = 0; j < constellation.length; j++) {
      if (i > j) { 
        d = constellation[i].loc.dist(constellation[j].loc); 
        if (d <= width / 20) { 
          line(constellation[i].loc.x, constellation[i].loc.y, constellation[j].loc.x, constellation[j].loc.y)
        }
      }
    }
  }

}

function star() {

  this.a = random(TAU); 
  this.r = random(width * .01, width * .2); 
  this.loc = createVector(width / 2 + sin(this.a) * this.r, height / 2 + cos(this.a) * this.r);
  this.speed = createVector();
  this.speed = p5.Vector.random2D();
  this.acc = createVector();
  this.m;


  this.update = function() {
      this.acc = p5.Vector.random2D(); // movement of star will be a bit erractic
      //this.bam.random2D();
      this.acc.mult(0.1);
      this.speed.add(this.acc);
      
      this.m = constrain(map(dist(this.loc.x, this.loc.y, mouseX, mouseY), 0, 100, 8, .5), 0.5, 8); // constrain => avoid returning "not a number"
      this.speed.normalize().mult(this.m);

      
      // it reappears on the opposite side :
      if (dist(this.loc.x, this.loc.y, width / 2, height / 2) > (width / 2) * 0.5) {
        if (this.loc.x < width / 2) {
          this.loc.x = width - this.loc.x - width*0.1;
        } else if (this.loc.x > width / 2) {
          this.loc.x = width - this.loc.x + width*0.1; 
        }
        if (this.loc.y < height / 2) {
          this.loc.y = height - this.loc.y - height*0.1;
        } else if (this.loc.y > height / 2) {
          this.loc.y = height - this.loc.y + height*0.1;
        }
      }
      this.loc = this.loc.add(this.speed);
    } 
} 