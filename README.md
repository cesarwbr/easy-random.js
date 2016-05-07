# easy-random.js

[![Build Status](http://img.shields.io/travis/cesarwbr/easy-random.js/master.svg?style=flat)](https://travis-ci.org/cesarwbr/easy-random.js)

> An easy to use random helper for your applications.

## Install

You can get it on npm.

```
npm install easy-random --save
```

## Setup

First, you need to instantiate it using Node.js module loading system.

```js
const random = require('easy-random');
```

Or ES6 module, too.

```js
import random from 'easy-random';
```

# Usage

### nextBool

You can generate random booleans:

```js
random.nextBool(); // true or false
```

### nextInt

Generate random int numbers:

```js
random.nextInt(10); // Between 0 and 9
```

### nextDouble

Generate random double numbers:

```js
random.nextDouble(); // Between 0.0 and 1.0: [0, 1)
```
### choice

Choose a random element:

```js
random.choice('abcdefghij'); // choose a random char on a String
random.choice('[1, 2, 3, 4, 5, 6]'); // choose a random item on a Array
```

### shuffle

Shuffle the sequence in place:

```js
const items = [1, 2, 3, 4, 5, 6, 7];
random.shuffle(items); // [7, 3, 2, 5, 6, 4, 1]
```

### sample
Return a x length list of unique elements chosen from the population sequence.
```js
random.sample([1, 2, 3, 4, 5],  3); // Choose 3 elements. [4, 1, 5]
```

## License

[MIT License](http://mit-license.org/) © Cesar William
