/**
 * https://www.hackerrank.com/challenges/js10-regexp-1/
 */
function regexVar() {
  const re = /^([aeiou]).*\1/g;
  console.log(re.test(1))
}

regexVar()