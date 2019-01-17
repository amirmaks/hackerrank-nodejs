/**
 * https://www.hackerrank.com/challenges/sock-merchant
 * @param n
 * @param ar
 * @returns {number}
 */
function sockMerchant(n, ar) {
  if (n !== ar.length) return;

  const map = ar.reduce((acc, cur) => {
    if (!acc.has(cur)) {
      acc.set(cur, 1)
    } else {
      acc.set(cur, acc.get(cur) + 1)
    }
    return acc;
  }, new Map())

  let sum = 0;

  for (let value of map.values()) {
    sum += (~~(value / 2))
  }

  return sum;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);