var Tree = function(value) {
  var newTree = Object.create(treeMethods); 
  newTree.value = value;
  
  newTree.children = [];  
  extend(newTree, treeMethods);
  //add child method extended into Tree
  return newTree;
};

var treeMethods = {};

var extend = function(to, from) {
  for (var key in from) { 
    if (from[key] === undefined) {
      to[key] = from[key];
    }
  }
};

treeMethods.addChild = function(value) {
  //make a new node with the given value
  //add to the tree as a child
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // console.log('value', this.value);
  // console.log('target', target);
  if (this.children !== null) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.value === target) {
        return true;
      }  
      this.children[i].contains(target);
    } 
  }
  return false;
};

      
      // // console.log(this .children[i].value);
      // if (this.children[i].value !== target && this.children[i].children) {
      //   this.children[i].contains(target);
      // } else if (this.children[i].value === target) {
      //   return true;
      // }


var tree = new Tree(4);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
tree.contains(8);

/*
 * Complexity: What is the time complexity of the above functions?
 */
