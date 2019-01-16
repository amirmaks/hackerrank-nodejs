/**
 * https://www.hackerrank.com/challenges/counting-valleys
 * @param n
 * @param s
 * @returns {number}
 */
function countingValleys(n, s) {
  if (n < 2 || n > 10e5) throw new Error('n is out of range');
  let steps = s.split('');
  if (n !== steps.length) throw new Error('Lengths of n and s is not the same');

  let valleys = 0;

  steps.reduce((acc, cur) => {
    if (cur === 'U') {
      ++acc;
      if (acc === 0)++valleys;
    } else {
      --acc;
    }
    return acc;
  }, 0);

  return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));