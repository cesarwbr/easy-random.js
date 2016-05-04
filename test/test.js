'use strinct';

const expect = require('chai').expect;
const random = require('../random.js');

describe('Testing next value', () => {
  it('Should return next boolean', () => {
    expect(random.nextBool()).to.be.a('boolean');
  });

  it('Should return next int', () => {
    expect(random.nextInt(10)).to.be.a('number');
  });

  it('Should return next double', () => {
    expect(random.nextDouble()).to.be.a('number');
  });
});

describe('Testing sequence numbers', () => {
  it('Should chose one item of array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const result = random.choice(arr);

    expect(arr.indexOf(result)).to.be.above(-1);
  });

  it('Should return the same length of array after shuffle', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const result = random.shuffle(arr);

    expect(result.length).to.equal(arr.length);
  });

  it('Should return a subset of an array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const result = random.sample(arr, 3);

    expect(result.length).to.equal(3);
  });
});
