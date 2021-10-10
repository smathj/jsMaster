function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);    // 전달받은 f 라는 함수에 value,key
  }
}
// 즉 함수를 값으로 취급해 파라미터로 넘겼고
// 다시 그 함수(f :: 콜백함수)을 이용해 다른 함수를 호출했다


// 콜백함수로 사용할 showElement()
function showElement(value, key) {
  console.log(key + '：' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);
