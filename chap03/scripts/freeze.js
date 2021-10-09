'use strict';

var pet = { type: '스노우 화이트 햄스터', name: '귀염둥이' };

//Object.preventExtensions(pet);
//Object.seal(pet); 
//Object.freeze(pet);

pet.name = '슈퍼깜찍이';
delete pet.type;
pet.weight = 42;

console.log(pet);
