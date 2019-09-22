const sum = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiplication = (n1, n2) => n1 * n2;
const division = (n1, n2) => n2 === 0 ? 'It is not possible to divide by 0' : n1 / n2;

export default {
  sum,
  subtract,
  multiplication,
  division
};