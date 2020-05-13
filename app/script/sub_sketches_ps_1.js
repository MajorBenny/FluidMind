const dots = [];
let factor;
const count = 100;
let radius = 300;
function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB,360,100,100,100);
	noiseDetail(2);
	
	
	for (let i = 0; i < count; i++) {		
		dots.push(new Dot(radius, [0,200], 100, 10))
	}
}

function draw() {
    factor = map(mouseX,0,windowWidth,0.001,0.05);
    radius = map(mouseY,0,windowHeight,100,400);
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i]
		n = noise(dot.pos.x * factor, dot.pos.y * factor)
		dot.update(n)
		dot.draw()
	}
}

class Dot {
	constructor (radius, colorRange, brightness, alpha) {
		const r = random(TWO_PI);
		const x = width / 2 + sin(r) * radius;
		const y = height / 2 + cos(r) * radius;
		this.pos = createVector(x,y);
		this.prev = createVector(x,y);
		this.color = color(255);
		this.deadCount = 0;
		this.radius = radius;
		this.colorRange = colorRange;
		this.alpha = alpha;
		this.brightness = brightness;
	}
	
	update(noize) {
		this.v = p5.Vector.fromAngle(noize * TWO_PI + (this.deadCount * PI))
		this.v.setMag(3)
		this.color = color(map(noize, 0, 1, ...this.colorRange), 5, this.brightness, this.alpha)
		this.prev = this.pos.copy()
		this.pos = this.pos.add(this.v)
		
		if (dist(width/2, height/2, this.pos.x, this.pos.y) > this.radius + 6) {
			this.deadCount++;
		}
	}
	
	draw() {
		if (
      dist(width / 2, height / 2, this.pos.x, this.pos.y) > this.radius ||
      dist(width / 2, height / 2, this.prev.x, this.prev.y) > this.radius
    ) {
        //use return to stop a function;
      return;
    }

		strokeWeight(.5)
		stroke(this.color)
		line(this.prev.x, this.prev.y, this.pos.x, this.pos.y)

	}
}
