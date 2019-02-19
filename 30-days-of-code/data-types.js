process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
  console.log('data');
  input_stdin += data;
});

process.stdin.on('end', function () {
  console.log('end');
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {

  var i = 4
  var d = 4.0
  var s = "HackerRank "

  let i2, d2, s2;

  i2 = parseInt(readLine());
  d2 = parseFloat(readLine());
  s2 = readLine();

  console.log(i + i2);
  console.log((d + d2).toFixed(1));
  console.log(s + s2);

}