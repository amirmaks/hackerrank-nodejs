/**
 * https://www.hackerrank.com/challenges/ctci-bubble-sort
 * @param a
 */
function countSwaps(a) {
  let c = 0;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        let tmp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = tmp;
        c++;
        sorted = false;
      }
    }
  }

  console.log(`Array is sorted in ${c} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}