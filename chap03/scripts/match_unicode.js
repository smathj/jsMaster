let str = '💩쌌어요';
console.log(str.match(/^.쌌어요$/gu));  // u 는 유니코드 대응한다
console.log(str.match(/쌌어요/g));  //