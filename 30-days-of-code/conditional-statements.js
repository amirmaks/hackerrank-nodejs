'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}


/**
 * https://www.hackerrank.com/challenges/30-conditional-statements
 */
function main() {
  const N = parseInt(readLine(), 10);
  let l;
  const w = 'Weird';
  const nw = 'Not Weird';

  if (N%2 !== 0) {
    l = w;
  } else {
    if (N >=2 && N <= 5) {
      l = nw;
    } else if(N >= 6 && N <=20) {
      l = w;
    } else if(N > 20) {
      l = nw;
    }
  }

  console.log(l)
}