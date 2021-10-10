// 고차함수 arrayWalk 함수 정의 
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(
  ary,
  function (value, key) { // 일회용 함수
    console.log(key + '：' + value);
  }
);
