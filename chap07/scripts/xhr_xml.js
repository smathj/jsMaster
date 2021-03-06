document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var doc = xhr.responseXML;
          console.log(doc.getElementsByTagName('title')[0].textContent);
        } else {
          result.textContent = '에러가 발생했습니다.';
        }
      }
    };

    xhr.open('GET', 'scripts/book.xml', true);
    xhr.send(null);
  }, false);
}, false);
