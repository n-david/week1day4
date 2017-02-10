var wrapLog = function (callback, name) {
  return function() {
    var args = [].slice.call(arguments);
    var result = 0;
    for (var i = 0; i < args.length; i++) {
      result += args[i];
    }
    console.log(name + '(' + args.join(',') + ')' + ' => ' + result);
  }
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
