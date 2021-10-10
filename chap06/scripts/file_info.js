window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("file").addEventListener('change', function(e) {
    var inputs = document.getElementById("file").files; // 여러개 파일까지
    for (var i = 0, len = inputs.length; i < len; i++) {
      var input = inputs[i];
      console.log('파일명:' + input.name);
      console.log('종류:' + input.type);
      console.log('사이즈:' + input.size / 1024 + 'KB');
      console.log('최종갱신일:' + input.lastModifiedDate);
    }
  }, true);
});
