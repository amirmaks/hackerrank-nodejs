/**
 * https://www.hackerrank.com/challenges/2d-array
 * @param arr
 * @returns {number}
 */
function hourglassSum(arr) {

  let offsetI = 0;
  let offsetJ = 0;
  const sums = [];

  while (offsetJ !== arr.length - 2) {
    while (offsetI !== arr.length - 2) {
      let outerSum = 0;
      let outerInc = 0;
      for (let i = offsetI; i <= offsetI + 2; i++) {
        ++outerInc;
        let sum = 0;
        let inc = 0;
        for (let j = offsetJ; j <= offsetJ + 2; j++) {
          ++inc;
          if (outerInc === 2 && inc === 2) {
            sum += arr[i][j];
          } else if (outerInc !== 2) {
            sum += arr[i][j];
          }
        }
        outerSum += sum;
      }
      sums.push(outerSum);
      ++offsetI;
    }
    offsetI = 0;
    ++offsetJ;
  }

  return Math.max(...sums);
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]));