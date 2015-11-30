(function () {
  if (typeof Asteroids === "undefined" ){
    window.Asteroids = {};
  }
  Asteroids.Util = {};

  Asteroids.Util.inherits = function (child, parent) {
    function Surrogate(){};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate ();
    child.prototype.constructor = child;
  };

})();
