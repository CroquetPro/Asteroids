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
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
    };
  };

  Game.prototype.randomPosition = function () {
    var pos = [];
    pos.push( Math.random() * this.DIM_X);
    pos.push( Math.random() * this.DIM_Y);
    return pos;
  };

  Game.prototype.moveObjects = function () {
    // console.log(this);
    this.asteroids.forEach( function(asteroid) {
      asteroid.move();
    })
    // this.ship.move
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.wrap = function (pos) {
    pos[0] = (pos[0] + this.DIM_X) % this.DIM_X;
    pos[1] = (pos[1] + this.DIM_Y) % this.DIM_Y;
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.asteroids[0].checkCollissions(this.asteroids);
  };

  Game.prototype.remove = function (roid1, roid2) {
    this.asteroids = this.asteroids.filter(function(asteroid) {
      return (asteroid !== roid1 && asteroid !== roid2);
    });
  };
  })()
