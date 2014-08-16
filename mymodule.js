// mymodule.js
module.exports = function () {
  this.myPropA = "a";
  this.myPropB = 2;
  this.myMethod = function(arg1, arg2) {
    return arg1+arg2;
  };
};
