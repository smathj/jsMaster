document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    var result = document.getElementById('result');
    result.innerHTML = '안녕하세요, ' + name.value + '씨!';
  }, false);
}, false);
