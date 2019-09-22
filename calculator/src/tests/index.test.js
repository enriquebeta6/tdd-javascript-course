var expect = require('chai').expect;
var calculator = require('../../src/js/index');

describe('Calculator', function() {
  describe('Smoke Tests', function() {
    it('Should exist the Calculator lib', function() {
      expect(calculator).to.exist;
    });

    it('Should exist the method sum', function() {
      expect(calculator.sum).to.exist;
      expect(calculator.sum).to.be.a('function');
    });

    it('Should exist the method subtract', function() {
      expect(calculator.subtract).to.exist;
      expect(calculator.subtract).to.be.a('function');
    });

    it('Should exist the method multiplication', function() {
      expect(calculator.multiplication).to.exist;
      expect(calculator.multiplication).to.be.a('function');
    });

    it('Should exist the method division', function() {
      expect(calculator.division).to.exist;
      expect(calculator.division).to.be.a('function');
    });
  });

  describe('Method sum', function() {
    it('Should return 4 when sum(2,2)', function() {
      expect(calculator.sum(2,2)).to.be.equal(4);
    });
  });

  describe('Method subtract', function() {
    it('Should return 0 when subtract(2,2)', function() {
      expect(calculator.subtract(2,2)).to.be.equal(0);
    });

    it('Should return -2 when subtract(2,4)', function() {
      expect(calculator.subtract(2,4)).to.be.equal(-2);
    });
  });

  describe('Method multiplication', function() {
    it('Should return 4 when multiplication(2,2)', function() {
      expect(calculator.multiplication(2,2)).to.be.equal(4);
    });
  });

  describe('Method division', function() {
    it('Should return 1 when division(2,2)', function() {
      expect(calculator.division(2,2)).to.be.equal(1);
    });

    it('Should return "It is not possible to divide by 0" when divide by 0', function() {
      expect(calculator.division(2,0)).to.be.equal('It is not possible to divide by 0');
    });
  });
});