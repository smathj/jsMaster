let data = { red: '빨간색', yellow: '노란색' };
var proxy = new Proxy(data, {
  get(target, prop) {
    return prop in target ? target[prop] : '?';
  }
});

console.log(proxy.red);
console.log(proxy.nothing);

proxy.red = '레드';
console.log(data.red);
console.log(proxy.red);
