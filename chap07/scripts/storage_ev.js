window.addEventListener('storage', function (e) {
  console.log('변경된 키：' + e.key);
  console.log('변경 전의 값：' + e.oldValue);
  console.log('변경 후의 값：' + e.newValue);
  console.log('발생원 페이지：' + e.url);
}, false);   
