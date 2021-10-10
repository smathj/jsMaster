// 함수는 하나의 데이터형이라서
// 자바스크립트의 변수는 모든 데이터형을 받기에
// 아래의 코드는 모두 맞다

var getTriangle = function(base, height) {
  return base * height / 2;
};

console.log(getTriangle(5, 2));
getTriangle = 0;
console.log(getTriangle);
