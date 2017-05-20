var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    //generates the proper index we want to access in storage array
  //var bucket = [];
  var tuple = [k, v];
  
  if (this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      var bucketElement = this._storage.get(index)[i];
      if (bucketElement[0].indexOf(k) !== -1) {
        bucketElement[1] = v;
      } else {
        this._storage.set(index, tuple);
      }
    } 
  } 
  this._storage.set(index, [tuple]);
};

  // take in the key and convert to an index using the getIndexBelowMaxForKey
  // at that index in the storage                                                                    array, push the key value pair
  // if there is already a key with the same name
  //   overwrite the value

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var accessBucket = this._storage.get(index);
  for (var i = 0; i < accessBucket.length; i++) {
    if (accessBucket[i][0] === k) {
      return accessBucket[i][1];
    }
  }
  return undefined; 
  // console.log(accessBucket);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var accessBucket = this._storage.get(index);
  for ( var i = 0; i < accessBucket.length; i++ ) {
    if ( accessBucket[i][0] === k ) {
      accessBucket.pop(accessBucket[i]);
    }
  } 
  //delete this._storage[index];
};

// var hashTable = new HashTable;
// hashTable.insert('Steven', 'Seagal');
// hashTable.retrieve('Steven');

/*
 * Complexity: What is the time complexity of the above functions?
 */


