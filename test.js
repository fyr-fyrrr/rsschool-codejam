const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
describe('Check an array', () => {
  it('1', () => {
    assert.equal(JSON.stringify(sumOfOther([2, 3, 4, 1])), JSON.stringify([8, 7, 6, 9]));
  });
  it('2', () => {
    assert.equal(JSON.stringify(sumOfOther([2, 0, 4, 7])), JSON.stringify([11, 13, 9, 6]));
  });
  it('3', () => {
    assert.equal(JSON.stringify(sumOfOther([1])), JSON.stringify([0]));
  });
  it('4', () => {
    assert.equal(JSON.stringify(sumOfOther([0])), JSON.stringify([0]));
  });
  it('5', () => {
    assert.equal(JSON.stringify(sumOfOther([0,1,2,3,4,5])), JSON.stringify([15,14,13,12,11,10]));
  });
  it('6', () => {
    assert.equal(JSON.stringify(sumOfOther([])), JSON.stringify([]));
  });
  it('7', () => {
    assert.equal(JSON.stringify(sumOfOther([-4,1,2,-9,4,0])), JSON.stringify([-2,-7,-8,3,-10,-6]));
  });
  it('8', () => {
    assert.equal(JSON.stringify(sumOfOther([2, -1, 4, -1])), JSON.stringify([2, 5, 0, 5]));
  });
  it('9', () => {
    assert.equal(JSON.stringify(sumOfOther([0, -10])), JSON.stringify([-10,0]));
  });
  it('10', () => {
    assert.equal(JSON.stringify(sumOfOther([2, 2, 2, 2])), JSON.stringify([6, 6, 6, 6]));
  });
});
const make = require('./src/make');
const sum = require('./src/make');
describe('Check the sum', () => {
  it('1', () => {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });
});