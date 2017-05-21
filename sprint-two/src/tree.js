var Tree = function(value) {
  var newTree = Object.create(treeMethods); 
  newTree.value = value;
  
  newTree.children = [];  
  //add child method extended into Tree
  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  //make a new node with the given value
  //add to the tree as a child
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // console.log('value', this.value);
  // console.log('target', target);
  if (this.value === target) {
    return true;
  }   
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  } 
  return false;
};

var tree = Tree;
tree.addChild(5);
console.log(tree);
/*
 * Complexity: What is the time complexity of the above functions?
 */
