function sum(){
  var nums = [].slice.call(arguments);
  var sum = 0;
  nums.forEach ( function(num){
    sum += num;
  })
  return sum;
}



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

var curriedSum = function(numArgs) {
  var numbers = []
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var results = 0;
      numbers.forEach( function(el) {
        results += el;
      });
      return results;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum
};

Function.prototype.curry = function (numArgs) {
  var fn = this;
  var args = []
  function _curry(num) {
    args.push(num);
    // console.log(args);
    if (args.length === numArgs) {
      // console.log(fn);
      return fn.apply(undefined, args);
    } else {
      return _curry;
    }
  };
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
// var f1 = sumThree.curry(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
