function twoStrings(s1, s2) {
  let h = new Map();
  for (let i = 0; i < s1.length; i++) {
    h.set(s1[i], 1);
  }

  let a = 'NO';

  for (let i = 0; i < s2.length; i++) {
    if(h.has(s2[i])) {
      a = 'YES';
      break;
    }
  }

  return a;
}

console.log(
  twoStrings('hello', 'world')
);

console.log(
  twoStrings('hi', 'world')
);

