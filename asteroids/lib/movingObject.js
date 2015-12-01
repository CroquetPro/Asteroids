(function(){
  if (typeof Asteroids === "undefined" ){
    window.Asteroids = {};
  }

var MovingObject = Asteroids.MovingObject = function (obj){
  for (var key in obj) {
    this[key] = obj[key];
  }



  // this.pos = pos;
  // this.vel = vel;
  // this.radius = radius;
  // this.color = color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillstyle = this.color;
  ctx.beginPath();

  ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0] * 10;
  this.pos[1] += this.vel[1] * 10;
  this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
  var x1 = this.pos[0];
  var x2 = otherObject.pos[0];
  var y1 = this.pos[1];
  var y2 = otherObject.pos[1];

  var dist = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

  if (dist > this.radius + otherObject.radius) {
    return false;
  } else {
    return true;
  }
};

MovingObject.prototype.checkCollissions = function (roids) {
  for(var i = 0; i < roids.length - 1; i++){
    for(var j = i + 1; j < roids.length; j++){
      if (roids[i].isCollidedWith(roids[j])){
        this.game.remove(roids[i], roids[j]);
      }
    }
  }
};


})()
