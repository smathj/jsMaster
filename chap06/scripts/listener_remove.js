document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn');
  var listener = function() {
    window.alert('안녕하세요, 자바스크립트!');
  };

  btn.addEventListener('click', listener, false);

  btn.removeEventListener('click', listener, false);
}, false);
