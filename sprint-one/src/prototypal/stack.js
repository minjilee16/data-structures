var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods); 
  var count = 0;
  var storage = {};
  newStack.storage = storage;
  newStack.count = count;
  return newStack;
};



var stackMethods = {};

stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {
  if ( this.count > 0 ) {
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return popped;
  }
};

stackMethods.size = function () {
  return this.count;
};
