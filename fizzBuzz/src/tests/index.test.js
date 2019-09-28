import  { expect } from 'chai';
import FizzBuzz from '../../src/js/index';

/*
  FizzBuzz Challenge
  Write a lib that receives a number and:
  If the number is divisible by 3, instead of the number return 'Fizz'.
  If the number is divisible by 5, instead of the number return 'Buzz'.
  If the number is divisible by 3 and 5, instead of the number return 'FizzBuzz'.
  If it is not a multiple of nothing, returns the number.
*/

describe('FizzBuzz', () => {
  it('Should return "Fizz" when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Should return "Buzz" when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('Should return the number when non-multiple', () => {
    expect(FizzBuzz(2)).to.be.equal(2);
    expect(FizzBuzz(22)).to.be.equal(22);
  });

  it('Should return 0 when the "number" is equal 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});