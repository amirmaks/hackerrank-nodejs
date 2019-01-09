function repeatedString(s, n) {
  function match(str) {
    return str.split('').filter(item => item === 'a').length;
  }

  let f = Math.floor(n / s.length);
  let d = n - (f * s.length);

  return match(s) * f + match(s.substr(0, d));
}