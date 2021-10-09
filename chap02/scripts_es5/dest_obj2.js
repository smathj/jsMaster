'use strict';

var book = { title: 'Java포켓 레퍼런스', publish: '기술평론사', price: 2680,
  other: { keywd: 'Java SE 8', logo: 'logo.jpg' } };
var title = book.title;
var other = book.other;
var keywd = book.other.keywd;


console.log(title);
console.log(other);
console.log(keywd);
