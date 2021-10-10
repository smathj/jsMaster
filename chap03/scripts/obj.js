var obj = { x:1, y:2, z:3 };

var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;
// obj3야 , bject.prototype 을 상속받아라 
var obj3 = Object.create(Object.prototype, {
  // props 는 두번쨰 파라미터로 작성한다
  x: { value: 1, writable: true, configurable: true, enumerable: true},
  y: { value: 2, writable: true, configurable: true, enumerable: true},
  z: { value: 3, writable: true, configurable: true, enumerable: true}
  }
);


console.log('obj3 확인' + obj3.valueOf());

for (var prop in obj3) {
   console.log(prop)
}