// https://www.hackerrank.com/challenges/js10-function/problem
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(
  factorial(4)
)
