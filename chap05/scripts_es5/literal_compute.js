'use strict';

var _member;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var i = 0;
var member = (_member = {
  name: '김성룡',
  birth: new Date(1970, 5, 25)
}, _defineProperty(_member, 'memo' + ++i, '정규회원'), _defineProperty(_member, 'memo' + ++i, '지부회장'), _defineProperty(_member, 'memo' + ++i, '경기'), _member);

console.log(member);
