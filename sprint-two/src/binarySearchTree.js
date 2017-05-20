var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree); 
  this.tree.value = value; 
  this.tree.right = {};
  this.tree.left = {};
  return tree;
};


BinarySearchTree.insert = function (value) {
  //compare value to the value of the first node value
  //  if it is higher
  //    add to the right of the node
  //  else
  //    add to the left of the node
  // console.log(this.right);
  // console.log(this.tree);
  if ( this.tree.value > value ) {
    this.tree.right = value; 
  } else {
    this.tree.left = value; 
  }
};



BinarySearchTree.contains = function (value) {
  //compare the parent node value in the tree with the value
  //if it matches
  //  return true
  // iterate right and left array 
  // invoking the recursion function to the each element of node 
  // if it is true then return true 
  //  return false

};

BinarySearchTree.depthFirstLog = function () {
};

// var binarySearchTree = BinarySearchTree();
// binarySearchTree.insert(5);
// console.log(binarySearchTree);
// console.log(binarySearchTree);



/*
 * Complexity: What is the time complexity of the above functions?
 */
