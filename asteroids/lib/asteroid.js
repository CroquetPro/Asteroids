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

Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();
