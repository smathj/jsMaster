var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

var mem = new Member('인식', '정');

Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

console.log(mem.getName());
