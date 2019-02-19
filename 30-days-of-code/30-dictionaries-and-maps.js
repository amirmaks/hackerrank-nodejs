/**
 * https://www.hackerrank.com/challenges/30-dictionaries-and-maps/
 * @param input
 */
function processData(input) {
  //Enter your code here
  const arr = input.split('\n');
  const m = new Map();
  for (let i = 1; i <= arr.length - 1; i++) {
    arr2 = arr[i].split(' ');

    if (arr2.length > 1) {
      m.set(arr2[0], arr2[1])
    } else {
      if (m.has(arr2[0])) {
        console.log(`${arr2[0]}=${m.get(arr2[0])}`);
      } else {
        console.log('Not found')
      }
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
