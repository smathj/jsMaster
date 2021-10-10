function arrayWalk(data, f) {
   for (var key in data) {
     f(data[key], key);
   }
}

var result= 0;

// value를 총합하는 콜백 함수
function sumElement(value, key) {
  result += value;
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
console.log('합계:' + result);
