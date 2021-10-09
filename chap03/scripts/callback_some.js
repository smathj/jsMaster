var data = [4, 9, 16, 25];
var result = data.some(function(value, index, array) {
  return value % 3 === 0;
});

if (result) {
  console.log('3의 배수가 발견되었습니다.');
} else {
  console.log('3의 배수를 찾을 수 없었습니다.');
}
