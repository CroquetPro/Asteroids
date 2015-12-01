(function () {
  if (typeof Asteroids === "undefined" ){
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (pos, game){
    var radius = 4;
    var color = "#000000";
    var vel = [Math.random() * 2 - 1, Math.random() * 2 - 1];

    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: vel,
      radius: radius,
      color: color,
      game: game
    });
}
Asteroid.prototype.collideWith = function (otherObject) {
  if (typeof otherObject === Ship){
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
  }
};

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();
