class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

class BusinessMember extends Member {
  work() {
    return this.getName() + '은 공부하고 있습니다.';
  }
}

let bm = new BusinessMember('시온', '정');
console.log(bm.getName());
console.log(bm.work());
