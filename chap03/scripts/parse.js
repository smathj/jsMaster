var n = '123xxx';
console.log(Number(n));
console.log(Number.parseFloat(n));
console.log(Number.parseInt(n));

console.log("------------------------------------------------------------");

var d = new Date();
console.log(Number(d));
console.log(Number.parseFloat(d));
console.log(Number.parseInt(d));


console.log("------------------------------------------------------------");

var h = '0x10';     // 1 x 16^1 + 0 x 16^0 = 16
console.log(Number(h));                 // 16
console.log(Number.parseFloat(h));      // 0
console.log(Number.parseInt(h));        // 16


console.log("------------------------------------------------------------");


var b = '0b11';     // 1 x 2^1 + 1 x 2^0  = 3
console.log(Number(b));                 // 3
console.log(Number.parseFloat(b));      // 0
console.log(Number.parseInt(b));        // 0


console.log("------------------------------------------------------------");


var e = '1.01e+2';
console.log(Number(e));                 // 101
console.log(Number.parseFloat(e));      // 101
console.log(Number.parseInt(e));        // 1
