/**
 * https://www.hackerrank.com/challenges/sherlock-and-anagrams
 * @param s
 * @returns {number}
 */
function sherlockAndAnagrams(s) {
  let offset1 = 0;
  let offset2 = 1;
  let character = 1;
  let a = 0;

  while (character <= s.length - 1) {
    while (s[offset1]) {
      let pivot = new Map();
      for (let i = offset1; i < offset1 + character; i++) {
        pivot.set(i, s[i]);
      }

      while (s[offset2 + character - 1]) {
        let compared = new Map();

        for (let i = offset2; i < offset2 + character; i++) {
          if (compared.has(s[i])) {
            compared.set(s[i], compared.get(s[i]) + 1);
          } else {
            compared.set(s[i], 1);
          }
        }

        let occured = 0;

        for (let p of pivot.values()) {
          if (compared.has(p) && compared.get(p) > 0) {
            occured++;
            compared.set(p, compared.get(p) - 1);
          }
        }

        if (occured === character) {
          a++;
        }

        offset2++;
      }

      offset1++;
      offset2 = offset1 + 1;
    }
    offset1 = 0;
    offset2 = 1;

    character++;
  }

  return a;
}