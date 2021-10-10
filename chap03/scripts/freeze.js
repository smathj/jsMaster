'use strict';

var pet = { type: '스노우 화이트 햄스터', name: '귀염둥이' };

// 다음 각각 주석을 제거하여 동작 확인

// Object.preventExtensions(pet);
// Object.seal(pet); 
// Object.freeze(pet);


// 기존 프로퍼티값을 변경
pet.name = '슈퍼깜찍이';

// 기존 프로퍼티 삭제
delete pet.type;

// 신규 프로퍼티 추가
pet.weight = 42;


console.log(pet);
