var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //make a node
    //set address to that of the new node
    //reassign tail to reference new node
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode; 
      list.tail = newNode; 
    }
    
  };

  list.removeHead = function() {
    //check to see if there are elements in the list
    //if there are, initiate first element removal
    //  remove the first element
    //  if there is another node
    //    reassign head to next element
    //  else
    //    assign head to null
    var listEl = list.head.value;
    if ( list.head.next !== null ) {
      list.head = list.head.next;
    } else {
      list.head = null;
    } return listEl;
   
  };

  list.contains = function(target) {
    //if there are elements in the LL
    //  if the value of that element = target
    //    return true
    //  otherwise
    //    return false
    if ( list.head !== null ) {
      for ( var key in list ) { 
        if ( list[key].value === target ) {
          return true;
        }
      }
    }
    return false; 
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
