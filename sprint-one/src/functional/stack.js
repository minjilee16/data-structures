var Stack = function() {
  var someInstance = {};

  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    count++;
    storage[count] = value;
    
  };

  someInstance.pop = function() {
    while ( count > 0 ) {
      let popped = storage[count];
      delete storage[count];
      count--;
      return popped;
    }
  };

  someInstance.size = function() {
    return count; 
  };
  return someInstance;
};
  //push: 
  //make a new key in storage
  //set it equal to the passed value
  //  push that into the storage variable
  //  increment count variable
  //pop:
  //remove the last element in the object
  //decrement the count 
  //returns the element popped