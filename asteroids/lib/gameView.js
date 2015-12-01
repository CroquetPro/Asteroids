(function(){
  if (typeof Asteroids === "undefined" ){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var game = this.game;
    setInterval(game.draw.bind(game, this.ctx) ,20);
    setInterval(game.step.bind(game) ,20);
    // game.moveObjects();
    // game.draw(this.ctx);

  };


})()
