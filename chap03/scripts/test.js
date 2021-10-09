var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = '서포트사이트는http://www.wings.msn.to/입니다.';
var str2 = '서포트사이트「서버사이드기술의 학습장」을 잘 부탁해요！';
console.log(p.test(str1));
console.log(p.test(str2));
