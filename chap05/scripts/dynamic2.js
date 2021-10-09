var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('철수', '강');
mem.getName = function() {
 return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());

var mem2 = new Member('영희', '이');
console.log(mem2.getName());
