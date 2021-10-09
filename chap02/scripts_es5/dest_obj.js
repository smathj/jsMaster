'use strict';

var book = { title: 'Java포켓 레퍼런스', publish: '기술평론사', price: 2680 };
var price = book.price;
var title = book.title;
var _book$memo = book.memo;
var memo = _book$memo === undefined ? '없음' : _book$memo;


console.log(title);
console.log(price);
console.log(memo);
