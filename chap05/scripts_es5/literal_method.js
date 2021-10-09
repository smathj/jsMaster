'use strict';

var member = {
  name: '김성룡',
  birth: new Date(1970, 5, 25),
  toString: function toString() {
    return this.name + '/생일:' + this.birth.toLocaleDateString();
  }
};

console.log(member.toString());
