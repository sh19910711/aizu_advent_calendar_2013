var Memory = function(capacity) {
  this.capacity = capacity;
  this.data = new Array(this.capacity);
};

Memory.prototype = {
  getCapacity: function() {
    return this.capacity;
  }
};

