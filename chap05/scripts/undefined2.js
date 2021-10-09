var Member = function() { };

Member.prototype.sex = '남자';
var mem = new Member();
mem.sex = undefined;

for (var key in mem) {
  console.log(key + ":" + mem[key]);
}
