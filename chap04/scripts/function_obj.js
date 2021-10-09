var getTriangle = new Function('base', 'height', 'return base * height / 2;');
//var getTriangle = Function('base', 'height', 'return base * height / 2;');
//var getTriangle = new Function('base, height', 'return base * height / 2;');
console.log('삼각형의 면적:' + getTriangle(5, 2));
