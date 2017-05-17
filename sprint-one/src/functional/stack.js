var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // debugger;
    count ++;
    console.log(count);
    storage.count = value;
    console.log(storage.count);
    //not being pushed to the correct key
    
  };

  someInstance.pop = function() {
    
    let popped = storage.count;
    
    console.log(storage.count);
    delete storage.count;
    count--;
    return popped;
  };

  someInstance.size = function() {
    if ( count < 0 ) {
      return 0; 
    }
    return count; 
  };

  return someInstance;
};

var stack = Stack();
stack.push('a');
// { 0: a }
stack.push('b');
stack.push('c');
//stack.push('d');
// console.log(stack.storage)
// stack.pop();
// stack.pop();

  //push: 
  //make a new key in storage
  //set it equal to the passed value
  //  push that into the storage variable
  //  increment count variable
  //pop:
  //remove the last element in the object
  //decrement the count 
  //returns the element popped. 
  //size: 
  //