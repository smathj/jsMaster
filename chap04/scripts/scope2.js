// var 를 입력하지않으면 글로벌 변수로 취급된다

scope = 'Global Variable';
function getValue() {
  scope = 'Local Variable';
  return scope;
}

console.log(getValue());
console.log(scope);

// ez