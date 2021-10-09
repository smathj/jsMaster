var storage = localStorage;
var apple = { name: '사과', price: 150, made: '아오모리' };
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);
