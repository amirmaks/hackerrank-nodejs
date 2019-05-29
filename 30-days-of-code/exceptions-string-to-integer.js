let s = '3';
try {
  let i = toInt(s);
  console.log(i);
}  catch (err) {
  console.log(err.message);
}

// function toInt(s) {
//   let n = !isNaN(parseInt(s)) && isFinite(s);
//   if (!n) throw new Error('Bad string');
//   return parseInt(s);
// }

