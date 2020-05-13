//   Adaptation of the particles example from
//   sketch.js by Justin Windle into Processing
//   using p5js.
//   https://github.com/soulwire/sketch.js
//
// *********************************************

// ----------------------------------------
// Configuration
// ----------------------------------------

// GLOBALS
var MAX_PARTICLES = 1000

var COLORS = ["#FFFFFF", "#F2F2F2", "#F9F9F9", "#D1D1D1", "#202020"]

//ARRAYS
var particles = []
var pool = []

//VARIABLES
var wander1 = 5.0
var wander2 = 12.0
var drag1 = 0.01
var drag2 = 2
var force1 = 0.1
var force2 = 10
var theta1 = -0.5
var theta2 = 0.5
var size1 = 15
var size2 = 250
var sizeScalar = 0.99

// ----------------------------------------
// Particle Functions
// ----------------------------------------

function Particle(x, y, size) {
  this.alive = true
  this.size = size
  this.wander = 0.15
  this.theta = random(TWO_PI)
  this.drag = 0.92
  this.color = "#FFFFFF"
  this.location = createVector(x, y)
  this.velocity = createVector(0.0, 0.0)
}
Particle.prototype.move = function () {
  this.location.add(this.velocity)
  this.velocity.mult(this.drag)
  this.theta += random(theta1, theta2) * this.wander
  this.velocity.x += sin(this.theta) * 0.01
  this.velocity.y += cos(this.theta) * 0.05
  this.size *= sizeScalar
  this.alive = this.size > 0.5
}
Particle.prototype.show = function () {
  //arc( this.location.x, this.location.y, this.size, 0, TWO_PI );
  fill(0, 50)
  stroke(255, 30)
  rect(this.location.x, this.location.y, this.size, this.size)
}

function spawn(x, y) {
  var particle, theta, force
  if (particles.length >= MAX_PARTICLES) {
    pool.push(particles.shift())
  }
  particle = new Particle(mouseX, mouseY, map(noise(frameCount * 0.01, mouseX * 0.1, mouseY * 0.1), 0, 1, size1, size2))
  particle.wander = random(wander1, wander2)
  particle.color = random(COLORS)
  particle.drag = random(drag1, drag2)
  theta = random(TWO_PI)
  force = random(force1, force2)
  particle.velocity.x = sin(theta) * force
  particle.velocity.y = cos(theta) * force
  particles.push(particle)
}

function update() {
  var i, particle
  for (i = particles.length - 1; i >= 0; i--) {
    particle = particles[i]
    if (particle.alive) {
      particle.move()
    } else {
      pool.push(particles.splice(i, 1)[0])
    }
  }
}

function moved() {
  var max, i
  max = random(1, 3)
  for (i = 0; i < max; i++) {
    spawn(mouseX, mouseY)
  }
}

// ----------------------------------------
// Runtime
// ----------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight)
  cursor("none")

  background(0)
  rectMode(CENTER)
}

function draw() {
  update()

  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].show()
  }

  mouseX = width / 2 + random(-600, 600)
  mouseY = height / 2 + random(-300, 300)

  moved()
}

function mouseMoved() {
  moved()
}
