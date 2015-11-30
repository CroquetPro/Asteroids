function sum(){
  var nums = [].slice.call(arguments);
  var sum = 0;
  nums.forEach ( function(num){
    sum += num;
  })
  return sum;
}

console.log(sum());

Function.prototype.myBind =  function(){
  var args = [].slice.call(arguments);
  var context = args[0];
  var fn = this;
  var leftOvers = args.slice(1);
  return function(){
    var other = [].slice.call(arguments);
    leftOvers = leftOvers.concat(other);
    fn.apply(context, leftOvers);
  };
};

function Cat(name) {
  this.name = name;
};

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
}

markov = new Cat("Markov");
breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
