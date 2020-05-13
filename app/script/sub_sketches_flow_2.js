//pendulum movement, based on the tutorial of Generative Design;

var shape;

var joints = 6;
var lineLen = 300;
var speedRelation = 4;

var center;
var pendulumPath;
var angle = 0;
var maxAngle = 360;
var speed;

var showPendulum = true;
var showPendulumPath = true;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noFill();
    strokeWeight(.5);

    center = createVector(width/2,height/2);

    startDrawing();
    background(0);
}

function startDrawing() {
    pendulumPath = [];
    // new empty array for each joint
    for (var i = 0; i < joints; i++) {
      pendulumPath.push([]);
    }
  
    angle = -90;
    speed = (10 / pow(1.75, joints - 1) / pow(2, speedRelation - 1));
  }
  
  function draw() {
    
    angle += speed;
  
    // each frame, create new positions for each joint
    if (angle <= maxAngle + speed) {
      // start at the center position
      var pos = center.copy();
  
      for (var i = 0; i < joints; i++) {
        var a = angle * pow(speedRelation, i);
        if (i % 2 == 1) a = -a;
        var nextPos = p5.Vector.fromAngle(radians(a));
        nextPos.setMag((joints - i) / joints * lineLen );
        nextPos.add(pos);
  
        if (showPendulum) {
          noFill();
          stroke(200, 10);
          point(pos.x, pos.y);
          
          line(pos.x, pos.y, nextPos.x, nextPos.y);
        }
  
        pendulumPath[i].push(nextPos);
        pos = nextPos;
      }
    }
  
    // draw the path for each joint
    if (showPendulumPath) {
      strokeWeight(.6);
      for (var i = 0; i < pendulumPath.length; i++) {
        var path = pendulumPath[i];
  
        // beginShape();
        var hue = map(i, 0, joints, 100, 150);
        stroke(hue,5);
        for (var j = 0; j < path.length; j++) {
          point(path[j].x, path[j].y);
        }
        // endShape();
      }
    }
  }
  
  function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas('###'+'time'+'.png');
  
    if (keyCode == DELETE || keyCode == BACKSPACE) startDrawing();
  
    if (keyCode == UP_ARROW) {
      lineLength += 2;
      startDrawing();
    }
    if (keyCode == DOWN_ARROW) {
      lineLength -= 2;
      startDrawing();
    }
    if (keyCode == LEFT_ARROW) {
      joints--;
      if (joints < 1) joints = 1;
      startDrawing();
    }
    if (keyCode == RIGHT_ARROW) {
      joints++;
      if (joints > 10) joints = 10;
      startDrawing();
    }
  
    if (key == '+') {
      speedRelation += 0.5;
      if (speedRelation > 5) speedRelation = 5;
      startDrawing();
    }
    if (key == '-') {
      speedRelation -= 0.5;
      if (speedRelation < 2) speedRelation = 2;
      startDrawing();
    }
  
    if (key == '1') showPendulum = !showPendulum;
    if (key == '2') showPendulumPath = !showPendulumPath;
  }