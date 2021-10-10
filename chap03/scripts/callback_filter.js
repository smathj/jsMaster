var data = [4, 9, 16, 25];

// return Type : Array Object
// 조건을 만족하는 요소로 배열을 만든다(필터를 거친다)
var result = data.filter(function(value, index, array) {
                            return value % 2 === 1;
                          });

console.log(result);
