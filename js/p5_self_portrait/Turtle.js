function Turtle(x, y, offsetx, offsety, tempDiameter) {
  strokeWeight(3);
  fill(0);
  this.x = x;
  this.y = y;
  this.offsetx = offsetx;
  this.offsety = offsety;
  this.diameter = tempDiameter;
  this.speed = 0.05;
  this.angle = 0;
  this.scalar = 20;

  this.move = function(){
    // this.x += random(-this.speed,this.speed);
    // this.y += random(-this.speed,this.speed);
    this.x = this.offsetx + cos(this.angle)*this.scalar;
    this.y = this.offsety + sin(this.angle)*this.scalar;
    this.angle += 0.05;
  };

  this.display = function() {
    ellipse(this.x,this.y,this.diameter,this.diameter);
  };

}
