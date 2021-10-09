window.onload = function() {
  var btn = document.getElementById('btn');

  btn.onclick = function() {
    window.alert('안녕하세요, 자바스크립트!');
  };

  btn.onclick = null;
};
