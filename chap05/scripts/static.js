var Area = function() {};

Area.version = '1.0';

Area.triangle = function(base, height) {
  return base * height / 2;
};

Area.diamond = function(width, height) {
  return width * height / 2;
};

console.log('Area클래스의 버전:' + Area.version);
console.log('삼각형의 면적:' + Area.triangle(5, 3));

var a = new Area();
console.log('마름모의 면적:' + a.diamond(10, 2));
