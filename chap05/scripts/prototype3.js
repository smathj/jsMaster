var Member = function() { };

Member.prototype.sex = ' 남자';

var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = ' 여자';
console.log(mem1.sex + '|' + mem2.sex);

delete mem1.sex
delete mem2.sex
console.log(mem1.sex + '|' + mem2.sex);
