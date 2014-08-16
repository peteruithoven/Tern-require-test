// index.js
//var simpleModule = require("simplemodule.js"); // node.js can't find this module
//simpleModule.propA; // shows up in hints as strings
//simpleModule.propB; // shows up in hints as integer

var simpleModule = require("./simplemodule.js"); // node.js finds this module
//simpleModule.; // no hints (except propA because it's used below)
console.log("a: ",simpleModule.propA); // logs: a

var MyModule = require("./mymodule.js");
var myModule = new MyModule();
//myModule. // no hints (except propA because it's used below)
console.log("a: ",myModule.myPropA); // logs: a

var myModule2 = require("./mymodule2.js")();
//myModule. // no hints (except propA because it's used below)
console.log("a: ",myModule2.myPropA); // logs: a
