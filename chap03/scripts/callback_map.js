var data = [2, 3, 4, 5];

// 새로운 배열을 리턴한다
// return Type : Array Object

var result = data.map(function(value, index, array) {
                        // console.log('원본 배열은 ' + array);
                        return value * value;
                      });


console.log(result);  // [ 4, 9, 16, 25 ]

console.log(Array.isArray(result)); // true
