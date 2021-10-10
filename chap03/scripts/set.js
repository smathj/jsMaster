let s = new Set(); 
s.add(10);
s.add(5);
s.add(100);
s.add(50);
s.add(5); // 무시

//let s = new Set([10, 5, 100, 50, 5]); 

console.log(s);

console.log(s.has(100));
console.log(s.size);

console.log('-------------------------------(1)----------------------------------');

// (1)
for (let val of s.values()) {
  console.log(val);
}


console.log('-------------------------------(2)----------------------------------');

// (2)
for (let val of s) {
  console.log(val);
}



console.log('-------------------------------(3)----------------------------------');


s.delete(100);
console.log(s.size);

s.clear();
console.log(s.size);