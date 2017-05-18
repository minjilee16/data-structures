var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // someInstance  = {};
  this.count = 0;
  this.storage = {};
  // return Queue;
};


Queue.prototype.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value; 
};

Queue.prototype.dequeue = function () {
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

Queue.prototype.size = function () {
  return this.count;
};



