function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0,
    '인수radius는 양수이어야 한다.');
  return radius * radius * Math.PI;
}

console.log(circle(-5));
