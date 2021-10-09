var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function(){
  return this.lastName + ' ' + this.firstName;
};

var mem = new Member('시온', '정');
console.log(mem.getName());

