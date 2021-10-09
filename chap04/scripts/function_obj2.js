var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('마름모의 면적:' + diamond(5, 2));
