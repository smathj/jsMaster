let m = new Map();
m.set('dog', '멍멍멍');
m.set('cat', '야옹야옹');
m.set('mouse', '찍찍');

//let m = new Map([['dog', '멍멍멍'],['cat', '야옹야옹'],['mouse', '찍찍']]);

console.log(m.size);            // 3
console.log(m.get('dog'));      // 멍멍멍
console.log(m.has('cat'));      // true


console.log('-------------------------------(1)-----------------------------');
console.log('[키 추출]');

// (1)
// m.keys() : map의 모든 키를 취득
for (let key of m.keys()) {
  console.log(key);
}

console.log('-------------------------------(2)-----------------------------');
console.log('[값 추출]');

// (2)
// m.values() : map의 모든 값을 취득
for(let value of m.values()) {
  console.log(value);
}


console.log('-------------------------------(3)-----------------------------');
console.log('[값 추출]');

// (3)
// key,value를 동시에 가져오는 방식
for (let [key, value] of m) {
  // console.log(value);
  console.log('[key] : ' + key + '            [value] :' + value);
}


console.log('-------------------------------(4)-----------------------------');

m.forEach(function(index,value) {
  console.log(index,value);
});


// 확인
console.log(m); 
// Map(3) { 'dog' => '멍멍멍', 'cat' => '야옹야옹', 'mouse' => '찍찍' }


// console.log(m.entries()); 

// 'dog'라는 키를 삭제
m.delete('dog');
console.log(m.size);    // 2

// 모든 요소 삭제
m.clear();
console.log(m.size);    // 0
