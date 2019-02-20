const n  = 13;

let b = parseInt(n).toString(2);

let m = 0, c = 0;

for (let i = 0; i <= b.length - 1; i++) {
  if (b[i] === '1') {
    c++;
  } else {
    c = 0;
  }
  if (c > m) {
    m = c;
  }
}

console.log(m)

