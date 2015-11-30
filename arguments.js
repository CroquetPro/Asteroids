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
  };
  return _curriedSum;
};
// Function.prototype.curry = function (numArgs) {
//   var fn = this;
//
// };

var sum = curriedSum(5);
console.log(sum(5)(2)(3)(2)(0));
