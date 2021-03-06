/**
 * https://www.hackerrank.com/challenges/new-year-chaos
 * @param q
 */
function minimumBribes(q) {
  let b = 0;

  for (let p = q.length - 1; p >= 0; p--) {
    if (q[p] - (p + 1) > 2) {
      b = "Too chaotic";
      break;
    }
    for (let j = q[p] - 2; j < p; j++) {
      if (q[j] > q[p])
        ++b
    }
  }
  console.log(b)
}

// console.log(minimumBribes([2, 1, 5, 3, 4]));

// console.log(minimumBribes([2, 5, 1, 3, 4]));

// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); //7
// minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); //7

// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]));
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
minimumBribes([1, 2, 3, 4, 5, 6, 7, 10, 11, 8, 9,]); //7

