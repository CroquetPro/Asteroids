(function(){
  if (typeof Asteroids === "undefined" ){
    window.Asteroids = {};
  }
  var Game = Asteroids.Game = function(DIM_X, DIM_Y, NUM_ASTEROIDS){
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.asteroids = []
  }

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++){
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition()));
    };
  };

  Game.prototype.randomPosition = function () {
    var pos = [];
    pos.push( Math.random() * this.DIM_X);
    pos.push( Math.random() * this.DIM_Y);
    return pos;
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach( function(asteroid){
      asteroid.move();
    })
    // this.ship.move
  };
  })()
