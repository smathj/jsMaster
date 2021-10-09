'use strict';

function required() {
  throw new Error('인수가 부족합니다.');
}

function hoge() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? required() : arguments[0];

  return value;
}

hoge();
