var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods); 
  // var someInstance = {};
  var count = 0; 
  var storage = {}; 
  newQueue.count = count; 
  newQueue.storage = storage; 
  return newQueue;
};

var queueMethods = {};



queueMethods.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;
};


queueMethods.dequeue = function () {
  while ( this.count > 0 ) {
    var dequeued = this.storage[1];
    delete this.storage[1];
    for ( var key in this.storage ) {
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
