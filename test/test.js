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
