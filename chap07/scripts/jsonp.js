document.getElementById('btn').addEventListener('click', function() {
  var url = 'http://b.hatena.ne.jp/entry/jsonlite/?callback=show&url='
    + encodeURIComponent(document.getElementById('url').value);
  var scr = document.createElement('script');
  scr.src = url;
  document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {
  if (data === null) {
    result.textContent = '북마크가 존재하지 않습니다.';
  } else {
    var bms = data.bookmarks;
    var ul = document.createElement('ul');
    for (var i = 0; i < bms.length; i++) { 
      var li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
      var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
    result.appendChild(ul);
  }
} 