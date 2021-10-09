console.group('상위 그룹');
for (var i = 0; i < 3; i++) {
  console.group('하위 그룹' + i);
  for (var j = 0; j < 3; j++) {
    console.log(i, j);
  }
  console.groupEnd();
}
console.groupEnd();