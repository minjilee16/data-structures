
var Queue = function() {
  var someInstance = {};
  var count = 0;
  var storage = {};
  someInstance.storage = storage;
  someInstance.count = count;
  extend(someInstance, queueMethods);
  return someInstance; 
};


var extend = function (to, from) {
  for (var key in from ) {
    to[key] = from[key];
  }
};


queueMethods = {};

queueMethods.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value; 
};


queueMethods.dequeue = function () {
  if ( this.count > 0 ) {
    var dequeued = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      key--; 
      this.storage[key] = this.storage[key + 1];
    }  
    this.count--; 
    return dequeued;
  } 
};

queueMethods.size = function () {
  return this.count;
}; 

