var img1;

function preload() {
  img1 = loadImage("js/p5_self_portrait/self_portrait.svg");
}

function setup() {
  createCanvas(500, 500);
  turtle1 = new Turtle(150, 225, 220, 200, 18);
  turtle2 = new Turtle(100, 225, 70, 200, 20);
}

function draw() {
  background(0);
  image(img1, 0, 0);
  turtle1.display();
  turtle1.move();
  turtle2.display();
  turtle2.move();
}