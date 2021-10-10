if (true) {
  var i = 5;
}

console.log(i);


// 블록스코프를 갖기위해서 let으로 선언

if (true) {
  let t = 5;
}

// 정상적인 에러
console.log(t);
