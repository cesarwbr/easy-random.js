'use strict'

module.exports = {
    nextBool: function() {
        return Math.floor(Math.random() * 2) === 0;
    },
    nextDouble: function() {
        return Math.random();
    },
    nextInt: function(max) {
        if (!max) {
            throw new EasyRandomException('EASY RANDOM: You must pass a max argument.');
        }

        return Math.floor(Math.random() * (max));
    },
    choice: function(seq) {
        if (seq && (typeof seq === 'string' || seq instanceof Array)) {
            return seq[this.nextInt(seq.length - 1)];
        }

        throw new EasyRandomException('EASY RANDOM: You must pass a sequence of Array or String as argument.');
    },
    shuffle: function(seq) {
        if (!seq || !(seq instanceof Array)) {
            throw new EasyRandomException('EASY RANDOM: You must pass a sequence of Array as argument.');
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
    },
    sample: function(population, len) {
      if (!population || !len) {
          throw new EasyRandomException('EASY RANDOM: You must pass a population of Array and length list of unique elements as argument.');
      }

      if (len > population.length) {
          throw new EasyRandomException('EASY RANDOM: The length list of unique elements must be less than population length.');
      }

      var seq = this.shuffle(population);

      return seq.slice(0, len);
    }
};

function EasyRandomException(message) {
  this.message = message;
  this.name = 'EasyRandomException';
}
