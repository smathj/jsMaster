function sum(...nums) {
  let result = 0;
  for (let num of nums) {
    if (typeof num !== 'number') {
      throw new Error('지정값이 숫자가 아닙니다:' + num);
    }
    result += num;
  }
  return result;
}

try {
  console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
  window.alert(e.message);
}
