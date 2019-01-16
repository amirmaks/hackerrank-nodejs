function minimumSwaps(arr) {
  let i = 0;
  let c = 0;

  while (true) {
    if (+arr[i] - i === 1) {
      if(++i === arr.length - 1) break;
    } else  {
      let s = arr[arr[i]- 1];
      arr[arr[i]- 1] =  arr[i];
      arr[i] = s;
      c++;
      i = 0;
    }

  }

  return c;
}

console.log(
  minimumSwaps('8 45 35 84 79 12 74 92 81 82 61 32 36 1 65 44 89 40 28 20 97 90 22 87 48 26 56 18 49 71 23 34 59 54 14 16 19 76 83 95 31 30 69 7 9 60 66 25 52 5 37 27 63 80 24 42 3 50 6 11 64 10 96 47 38 57 2 88 100 4 78 85 21 29 75 94 43 77 33 86 98 68 73 72 13 91 70 41 17 15 67 93 62 39 53 51 55 58 99 46'.split(' '))
  // minimumSwaps('4 3 1 2'.split(' '))
);

/**
  https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

  4 3 1 2

  0 <-> 2
  1 3 4 2

  1 <-> 2
  1 4 3 2

  1 <-> 3
  1 2 3 4

**/


