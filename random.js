'use strict'

module.exports = {
  nextBool: function() {
    return Math.floor(Math.random() * 2) === 0;
  },
  nextDouble: function() {
    return Math.random();
  },
  nextInt: function(max) {
    return Math.floor(Math.random() * (max));
  }
};
