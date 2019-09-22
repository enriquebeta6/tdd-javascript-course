var calculator = {
  sum: function(n1, n2) {
    return n1 + n2;
  },
  subtract: function(n1, n2) {
    return  n1 - n2;
  },
  multiplication: function(n1, n2) {
    return  n1 * n2;
  },
  division: function(n1, n2) {
    return n2 === 0 ? 'It is not possible to divide by 0' : n1 / n2;
  }
}

module.exports = calculator;