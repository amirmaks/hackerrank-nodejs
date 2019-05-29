/**
 * https://www.hackerrank.com/challenges/js10-loops
 * @param s
 */
function vowelsAndConsonants(s) {
  const vowels = {
    'a' : 1,
    'e' : 1,
    'i' : 1,
    'o' : 1,
    'u' : 1
  };

  const firstPart = [];
  const secondPart = [];

  for (let w of s) {
    if (vowels[w]) {
      firstPart.push(w);
    } else {
      secondPart.push(w);
    }
  }

  firstPart.forEach(w => console.log(w));
  secondPart.forEach(w => console.log(w));
}

vowelsAndConsonants('javascriptloops')
