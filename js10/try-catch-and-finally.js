// https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

function reverseString(s) {
  try {
    console.log(s.split('').reverse().join(''));
  } catch (err) {
    console.log(err.message || err);
    console.log(s);
  }
}

reverseString(Number(234))