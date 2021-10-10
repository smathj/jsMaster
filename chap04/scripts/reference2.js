var value = [1, 2, 4, 8, 16];

function deleteElement(value) {
  value.pop();    // 배열의 마지막 요소 삭제
  return value;
}

console.log(deleteElement(value));    // [ 1, 2, 4, 8 ]
console.log(value);                   // [ 1, 2, 4, 8 ]
