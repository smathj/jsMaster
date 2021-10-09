var result = 0;
for (var i = 1; i <= 100; i++) {
  result += i;
  if (result > 1000) { break; }
}
console.log('합계값이 1000을 넘은 것은 ' + i);
