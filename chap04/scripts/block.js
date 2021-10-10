(function() {
  var i = 5;
  console.log(i);
}).call(this);

console.log(i);

// 즉시 실행 함수는 스코프가 바깥이네