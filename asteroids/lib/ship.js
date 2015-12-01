(function () {
  if (typeof Asteroids === "undefined" ){
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (pos, game){
    var radius = 10;
    var color = "#00FF00";
    var vel = [0, 0];

    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: vel,
      radius: radius,
      color: color,
      game: game
    });
}

Ship.prototype.relocate = function () {
  this.pos[0] = ( Math.random() * this.DIM_X);
  this.pos[1] = ( Math.random() * this.DIM_Y);
};
Asteroids.Util.inherits(Ship, Asteroids.MovingObject);


})();
