var state = 1;

function setup() { 
  let canvas = createCanvas(400, 400);
  canvas.parent('game')
  textSize(100);
  textAlign(CENTER);
  textFont('Inconsolata');
}

function draw() {
  if (state == '1') {
    draw1();
  } else if (state == '2') {
    draw2();
  } else if (state == '3') {
    draw3();
  }
}

function keyPressed() {
	state = key;
}

function draw1() {
  stroke('yellow');
  strokeWeight(20);
  background('indigo');
  line(0, 0, mouseX, mouseY);
}

function draw2() {
  background('yellow');
  fill('red');
  noStroke();
  text("YOU WON!", width/2, height/2);
}

function draw3() {
  background('black');
  fill('white');
  noStroke();
  text("YOU LOSE", width/2, height/2);
}