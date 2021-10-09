var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = '서포트 사이트는 http://www.wings.msn.to/입니다.';
str += '예제 소개 사이트 HTTP://www.web-deli.com/도 잘 부탁해요！'
while((result = p.exec(str)) !== null) {
  console.log(result[0]);
}
