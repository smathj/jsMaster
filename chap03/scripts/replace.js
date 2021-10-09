var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str = '서포트사이트는http://www.wings.msn.to/입니다.';
document.write(str.replace(p, '<a href="$1">$1</a>'));
