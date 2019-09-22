import  { expect } from 'chai';
import calculator from '../../src/js/index';

describe('Calculator', () => {
  describe('Smoke Tests', () => {
    it('Should exist the Calculator lib', () => {
      expect(calculator).to.exist;
    });

    it('Should exist the method sum', () => {
      expect(calculator.sum).to.exist;
      expect(calculator.sum).to.be.a('function');
    });

    it('Should exist the method subtract', () => {
      expect(calculator.subtract).to.exist;
      expect(calculator.subtract).to.be.a('function');
    });

    it('Should exist the method multiplication', () => {
      expect(calculator.multiplication).to.exist;
      expect(calculator.multiplication).to.be.a('function');
    });

    it('Should exist the method division', () => {
      expect(calculator.division).to.exist;
      expect(calculator.division).to.be.a('function');
    });
  });

  describe('Method sum', () => {
    it('Should return 4 when sum(2,2)', () => {
      expect(calculator.sum(2,2)).to.be.equal(4);
    });
  });

  describe('Method subtract', () => {
    it('Should return 0 when subtract(2,2)', () => {
      expect(calculator.subtract(2,2)).to.be.equal(0);
    });

    it('Should return -2 when subtract(2,4)', () => {
      expect(calculator.subtract(2,4)).to.be.equal(-2);
    });
  });

  describe('Method multiplication', () => {
    it('Should return 4 when multiplication(2,2)', () => {
      expect(calculator.multiplication(2,2)).to.be.equal(4);
    });
  });

  describe('Method division', () => {
    it('Should return 1 when division(2,2)', () => {
      expect(calculator.division(2,2)).to.be.equal(1);
    });

    it('Should return "It is not possible to divide by 0" when divide by 0', () => {
      expect(calculator.division(2,0)).to.be.equal('It is not possible to divide by 0');
    });
  });
});