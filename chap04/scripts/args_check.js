function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error('인수의 수가 서로 다릅니다：' + arguments.length);
  }
  console.log(value);
}

try {
  showMessage(' 철수', ' 영희');
} catch(e) {
  window.alert(e.message);
}
