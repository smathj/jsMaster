var storage = localStorage;
storage.setItem('fruit1', '사과');
storage.fruit2 = '귤';
storage['fruit3'] = '포도';
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);
