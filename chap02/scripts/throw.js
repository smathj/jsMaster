var x = 1;
var y = 0;
try{
  if (y === 0) { throw new Error('0으로 나누려고 하였다.'); }
  var z = x / y;
} catch(e) {
  console.log(e.message);
}
