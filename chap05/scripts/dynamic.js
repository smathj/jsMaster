var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('철수', '강');

mem.getName = function() {
  return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());
