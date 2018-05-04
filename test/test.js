const chai = require('chai');
const expect = chai.expect;
const testFunction = require('../')
describe('XO', function(){
  it('should take in a string', function () {
    expect(testFunction.XO('anna')).to.equal(true);
  });
  it('should return false if the number of x is not equal to o', function () {
    expect(testFunction.XO('xxoooo')).to.equal(false);
  });
  it('should return true if the number of x is equal to o', function () {
    expect(testFunction.XO('xxxxoooo')).to.equal(true);
  });
  it('should return an error message if argument is not as string', function () {
    expect(testFunction.XO(2)).to.equal('The argument supplied is not a string, please insert a string');
  });
  it('should return an error message if argument is not as string', function () {
    expect(testFunction.XO([])).to.equal('The argument supplied is not a string, please insert a string');
  });
  it('should not care if the string is upper or lower case', function () {
    expect(testFunction.XO('xXoo')).to.equal(true);
  });
  it('should return true when no x and o is present', function () {
    expect(testFunction.XO('jfvjkvfrjfvjvfjfvjkvfjfv')).to.equal(true);
  });
  it('should return flase when no x is present', function () {
    expect(testFunction.XO('jfvooooovvvvnvbooooo')).to.equal(false);
  });
  it('should return flase when no o is present', function () {
    expect(testFunction.XO('jfvxxxxxvvvvnvbxxxxxx')).to.equal(false);
  });
});
 