var dat1 = new Date(2017, 4, 15);
var dat2 = new Date(2017, 5, 20);
//                                               초    분  시간  24 = 하루 
var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);

console.log(diff + '일의 차이가 있다.');


// 
var d1 = new Date();
console.log(d1);

var d2 = new Date(2021,11,31); 
console.log(d2);

// var d2 = new Date(2021,12,31,23,59,59,999); // 올해 말일 마지막 세컨드초


var dif = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);


console.log(Math.round(dif) + '일의 차이가 있다.');