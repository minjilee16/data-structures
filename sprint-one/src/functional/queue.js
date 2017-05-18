var Queue = function() {
  var someInstance = {};
  var storage = {};
  let count = 0; 

  someInstance.enqueue = function(value) {
    count ++; 
    storage[count] = value; 
  };




  someInstance.dequeue = function() {
    while ( count > 0 ) {
      let dequeued = storage[1];
      delete storage[1];
      for (let key in storage) {
        key--;
        storage[key] = storage[key + 1];
      } count--;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return count;
  };
  return someInstance;
};
