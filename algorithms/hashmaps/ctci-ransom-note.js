function checkMagazine(magazine, note) {
  let h = magazine.reduce((acc, cur) => {
    if (acc.has(cur)) {
      acc.set(cur, acc.get(cur) + 1);
    } else {
      acc.set(cur, 1)
    }
    return acc;
  }, new Map());

  let s = 0;

  for (let i = 0; i < note.length; i++) {
    let c = note[i];
    if (h.has(c) && h.get(c) >= 1) {
      s++;
      h.set(c, h.get(c) - 1);
    }
  }

  console.log(s === note.length ? 'Yes' : 'No');
}

checkMagazine('two times three is not four times'.split(' '), 'two times two is four'. split(' '))