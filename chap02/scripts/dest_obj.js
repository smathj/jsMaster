let book = { title: 'Java포켓 레퍼런스', publish: '기술평론사', price: 2680 };
let { price, title, memo = '없음' } = book;

console.log(title);
console.log(price);
console.log(memo);