// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   let someInstance = {}; 
//   let count = 0; 
//   let storage = {};
  
//   someInstance.count = count; 
//   someInstance.storage = storage; 
//   extend( someInstance, Stack.stackMethods );
//   return someInstance; 
// };

// // console.log('stackMethods', stackMethods);


// let extend = function (to, from) {
//   for ( let key in from ) {
//     to[key] = from[key]; 
//   }
// }; 


// Stack.stackMethods = {};

// Stack.stackMethods.push = function (value) {
//   this.count++; 
//   this.storage[count] = value;
// };

// Stack.stackMethods.pop = function () {
//   while ( this.count > 0 ) {
//     let popped = storage[1];
//     delete storage[1];
//     this.count--;
//     return popped; 
//   }
// };

// Stack.stackMethods.size = function () {
//   return this.count;
// };


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}; 
  var count = 0; 
  var storage = {};
  
  someInstance.count = count; 
  someInstance.storage = storage; 
  extend( someInstance, stackMethods );
  return someInstance; 
};

// var extend = function (to, from) {
//   for (var key in from ) {
//     to[key] = from[key];
//   }
// };


var stackMethods = {};


stackMethods.push = function (value) {
  this.count++; 
  this.storage[this.count] = value;
};



stackMethods.pop = function () {
  while ( this.count > 0 ) {
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return popped; 
  }
};



stackMethods.size = function () {
  return this.count;
};
