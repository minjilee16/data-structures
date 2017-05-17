var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0; 

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count ++; 
    storage.count = value; 
  };

  someInstance.dequeue = function() {
    let deque = storage.count;
    count--; 
    for (let key in storage ) {
      if ( key === 0 ) {
        delete storage.count; 
      } 
      key = key - 1;
    } 
   
    return deque; 
  };

  someInstance.size = function() {
    if ( count < 0 ) {
      return 0; 
    }
    return count;
  };

  return someInstance;
};
