var x = 0;

switch(x) {
  case 0:
    let value = 'x:0';
  case 1:
    let value = 'x:1';
}


// switch 자체가 하나의 블록만 갖는다
// switch(x) {
//   case 0:
//     var value = 'x:0';
//   case 1:
//     var value = 'x:1';
// }

// console.log(value);


// 레이블로 수식된 구문은 블록 스코프를 갖지않아서
// let으로 설정하면안된다. 차라리 var가 맞다