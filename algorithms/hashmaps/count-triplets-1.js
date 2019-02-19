/**
 * https://www.hackerrank.com/challenges/count-triplets-1/
 * @param arr
 * @param r
 * @returns {number}
 */
function countTriplets(arr, r) {
  let r2 = new Map();
  let r3 = new Map();
  let count = 0;

  arr.forEach(v => {
    if (r3.has(+v)) {
      count += r3.get(+v);
    }

    if (r2.has(+v)) {
      r3.set(v * r, (r3.get(v * r) || 0) + r2.get(+v));
    }

    r2.set(v * r, (r2.get(v * r) || 0) + 1);
  });

  return count;
}