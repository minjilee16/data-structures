var BinarySearchTree = function(value) {
  var tree = Object.create(treeMethod); 
  tree.value = value; 
  tree.right = null;
  tree.left = null;
  return tree;
};

var treeMethod = {};


treeMethod.insert = function (value) {
  //compare value to the value of the first node value
  //  if it is higher
  //    add to the right of the node
  //  else
  //    add to the left of the node
  // console.log(this.right);
  // console.log(this.tree);
  //var subTree = new BinarySearchTree(value);

 
  
  if ( this.value < value && this.right === null ) {
    this.right = new BinarySearchTree(value);
  } else if ( this.value < value && this.right !== null ) {
    this.right.insert(value);
  } else if (this.value > value && this.left === null) {
    this.left = new BinarySearchTree(value);
  } else if ( this.value > value && this.left !== null ) {
    this.left.insert(value);
  }
};



treeMethod.contains = function (value) {
  //compare the parent node value in the tree with the value
  //if it matches
  //  return true
  // iterate right and left array 
  // invoking the recursion function to the each element of node 
  // if it is true then return true 
  //  return false

  // if (this.value === value) {
  //   return true;
  // } else if (this.left !== null) {
  //   this.left.contains(value);
  // } else if (this.right !== null) {
  //   this.right.contains(value);
  // } 
  // return false;
  
  if ( this.value === value) {
    return true; 
  } else {
    if ( this.value < value && this.right !== null ) {
      return this.right.contains(value); 
    } else if ( this.value > value && this.left !== null ) {
      return this.left.contains(value);
    }
  }
  return false;
};

treeMethod.depthFirstLog = function () {
};

// var binarySearchTree = BinarySearchTree();
// binarySearchTree.insert(5);
// console.log(binarySearchTree);
// console.log(binarySearchTree);



/*
 * Complexity: What is the time complexity of the above functions?
 */
