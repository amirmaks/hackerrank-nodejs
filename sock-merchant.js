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