'use strict';

var pet = {
  type: '스노우 화이트 햄스터',
  name: '귀염둥이',
  description: {
    birth: '2014-02-15'
  }
};

var pet2 = {
  name: '슈퍼깜찍이',
  color: '흰색',
  description: {
    food: '해바라기 씨'
  }
};

var pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

Object.assign(pet, pet2, pet3);
console.log(pet);

// let merged = Object.assign({}, pet, pet2, pet3);
// console.log(merged);
