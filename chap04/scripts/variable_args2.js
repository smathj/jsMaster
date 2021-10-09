function printf(format) {
  for (var i = 0, len = arguments.length; i < len; i++) {
    var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
    format = format.replace(pattern, arguments[i]);
  }
  console.log(format);
}

printf('안녕하세요, {0}씨. 나는 {1}입니다.', '시온', '피카츄');
