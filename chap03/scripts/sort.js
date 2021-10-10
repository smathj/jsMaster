var ary = [5, 25, 10];


// 배열을 문자열로 취급하여 사전순으로 정렬
// console.log(ary.sort());



console.log(ary.sort(function(x, y) {
  console.log('x :' + x );
  console.log('y :' + y );
  console.log('-----------------------------------');
  return x - y;
}));
