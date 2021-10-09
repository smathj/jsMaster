document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result.textContent = xhr.responseText;
        } else {
          result.textContent = '서버 에러가 발생하였습니다.';
        }
      } else {
        result.textContent = '통신 중...';
      }
    };
    /*
    xhr.addEventListener('loadstart', function() {
      result.textContent = '통신 중...';
    }, false);

    xhr.addEventListener('load', function() {
      result.textContent = xhr.responseText;
    }, false);

    xhr.addEventListener('error', function() {
      result.textContent = '서버 에러가 발생하였습니다.';
    }, false);
    */
    xhr.open('GET', 'hello_ajax.php?name=' +
      encodeURIComponent(document.getElementById('name').value), true);
    xhr.send(null);
  }, false);
}, false);