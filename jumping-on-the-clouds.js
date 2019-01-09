function jumpingOnClouds(c) {
  let offsetStep = 0;

  return c.reduce((acc, cur, index) => {
    if (index !== offsetStep) return acc;

    if (c[index + 2] === 0) {
      offsetStep = index + 2;
    } else {
      offsetStep = index + 1;
    }

    if (offsetStep <= c.length - 1) {
      ++acc;
    }

    return acc;
  }, 0);
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));