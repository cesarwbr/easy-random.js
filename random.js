'use strict'

module.exports = {
  nextBool: function() {
    return Math.floor(Math.random() * 2) === 0;
  },
  nextDouble: function() {
    return Math.random();
  },
  nextInt: function(max) {
    if(!max) {
      console.error('EASY RANDOM: You must pass a max argument.');
      return;
    }

    return Math.floor(Math.random() * (max));
  },
  choice: function(seq) {
    if (typeof seq === 'string' || seq instanceof Array) {
      return seq[this.nextInt(seq.length - 1)];
    }

    console.error('EASY RANDOM: You must pass a sequence of Array or String as argument.');
  },
  shuffle: function(seq) {
    if (!(seq instanceof Array)) {
      console.error('EASY RANDOM: You must pass a sequence of Array as argument.');
      return;
    }

    var counter = seq.length;
    var index, temp;

    while (counter > 0) {
        index = Math.floor(Math.random() * counter);

        counter--;

        temp = seq[counter];
        seq[counter] = seq[index];
        seq[index] = temp;
    }

    return seq;
  }
};
