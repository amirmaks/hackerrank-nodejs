/**
 * https://www.hackerrank.com/challenges/30-recursion
 * @param n
 */
function factorial(n) {

  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

console.log(
  factorial(3)
)
