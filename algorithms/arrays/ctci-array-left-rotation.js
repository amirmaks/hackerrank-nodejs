/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation
 * @param a
 * @param d
 */
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let temp = a.shift();
    a.push(temp);
  }
}

rotLeft([1, 2, 3, 4, 5], 4);
