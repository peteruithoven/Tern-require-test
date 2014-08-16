// mymodule2.js
module.exports = MyModule;

function MyModule() {
  if (!(this instanceof MyModule)) return new MyModule();
  this.myPropA = "a";
  this.myPropB = 2;
  this.myMethod = function(arg1, arg2) {
    return arg1+arg2;
  };
}
