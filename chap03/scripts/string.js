var str1 = '뜰에 뜰에 뜰에는 닭이 있다.';
console.log(str1.indexOf('뜰'));            // 0번 인덱스에 있다
console.log(str1.lastIndexOf('뜰'));        // 6번 인덱스에 있다
console.log(str1.indexOf('뜰', 3));         // 3번 인덱스에 있다(~으로 부터)
console.log(str1.lastIndexOf('에', 5));     // 4번 인덱스에 있다(~으로 부터)
console.log(str1.indexOf('가든'));          // -1 없다 
console.log(str1.startsWith('뜰'));         // true
console.log(str1.endsWith('뜰'));           // false
console.log(str1.includes('뜰'));           // true

var str2 = 'Wings프로젝트';
var str3 = '💩싸서';
var str4 = '   wings   ';

console.log(str2.charAt(4));                // s
console.log(str2.slice(5, 8));              // 프로젝 (마지막 인덱스 전까지)
console.log(str2.substring(5, 8));          // 프로젝 (마지막 인덱스 전까지)
console.log(str2.substr(5, 3));             // 프로젝 (5번인덱스부터(포함) 3문자 읽기)
console.log(str2.split('s'));               // [ 'Wing', '프로젝트' ]
console.log(str1.split('에', 3));           // [ '뜰', ' 뜰', ' 뜰' ]
console.log(str2.charCodeAt(0));            // 0번째 인덱스 코드값
console.log(String.fromCharCode(87, 105, 110, 103));    // Wing
console.log(str3.codePointAt(0));           // 128169
console.log(String.fromCodePoint(128169));  // 💩
console.log(str2.concat(' 유한회사'));      // Wings프로젝트 유한회사
console.log(str2.repeat(2));                // Wings프로젝트Wings프로젝트
console.log(str4.trim());                   // wings
console.log(str2.length);                   // 9
