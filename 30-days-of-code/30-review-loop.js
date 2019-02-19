function processData(input) {
  let ar = input.split('\n');

  for (let i = 1; i<= ar.length; i++) {
    if (!ar[i]) continue;

    let o = [], e = [];

    for (let j = 0; j <= ar[i].length - 1; j++) {
      if (j % 2 === 0) {
        e.push(ar[i][j]);
      } else {
        o.push(ar[i][j]);
      }
    }

    console.log(e.join(''), o.join(''));
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

