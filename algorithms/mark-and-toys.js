/**
 * https://www.hackerrank.com/challenges/mark-and-toys/
 * @param prices
 * @param k
 * @returns {number}
 */
function maximumToys(prices, k) {
  let less = [];

  for (let i = 0; i < prices.length; i++) {
    let p = +prices[i];
    if (p <= k) {
      less.push(p)
    }
  }

  let done = false;
  let big = 10e10;
  let min = big;
  let s = 0;
  let minIndex;
  let mins = [];

  while (!done) {
    done = true;
    for (let i = 0; i < less.length; i++) {
      let elem = less[i];
      if (less[i] < min) {
        min = less[i];
        minIndex = i;
      }
    }

    s += min;

    if (s < k) {
      done = false;
    }

    mins.push(min);

    min = big;
    less[minIndex] = big;
  }


  let c = s > k ? mins.length - 1 : mins.length;

  return c;
}