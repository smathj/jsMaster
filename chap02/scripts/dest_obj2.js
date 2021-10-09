let book = { title: 'Java포켓 레퍼런스 ', publish: '기술평론사', price: 26800,
  other: { keywd: 'Java SE 8', logo: 'logo.jpg' } };
let { title, other, other: { keywd } } = book;

console.log(title);
console.log(other);
console.log(keywd);
