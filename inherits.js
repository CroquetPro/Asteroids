Function.prototype.inherits = function(parent) {
  function Surrogate(){};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate ();
  this.prototype.constructor = this;
};
//
// function MovingObject (name) {
//   this.name = name;
//   this.shape = "triangle";
// };
//
// MovingObject.prototype.f = function(){
//   return "Hey.." + this.name;
// }
//
// function Ship () {
//   MovingObject.call(this, "shdacssasape");
// };
// Ship.inherits(MovingObject);
//
// function Asteroid () {};
// Asteroid.inherits(MovingObject);
//
// Asteroid.prototype.crash = function () {
//   return "no more dinosour"
// };
//
// var ship = new Ship();
// // var ast =
//
// console.log(ship.f());
// console.log(ship.shape);
// console.log(ship.crash);
