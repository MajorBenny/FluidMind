var pos
var length

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  pos = createVector(width / 2, height / 2)
}

function draw() {
  stroke(255, 50)
  var sw = random(1, 5)
  strokeWeight(sw)
  point(pos.x, pos.y)

  var step = p5.Vector.random2D()

  var r = random(100)
  if (r < 1) {
    length = random(25, 100)
  } else if (r < 30) {
    length = random(5, 15)
  } else {
    length = random(0, 3)
  }

  step.mult(length)
  pos.add(step)

  if (pos.x < 0 || pos.x > width) {
    pos.x = width / 2
  }
  if (pos.y < 0 || pos.y > height) {
    pos.y = height / 2
  }
}
