document.addEventListener('DOMContentLoaded', function() {
  var books = [
    { title: '개정3판 기초PHP', price: 32000 },
    { title: 'Java포켓 레퍼런스', price: 26800 },
{ title: '앱을 만들자! Android입문', price: 20000 }
  ];

  var frag = document.createDocumentFragment();

  for(var i = 0, len = books.length; i < len; i++) {
    var b = books[i]
    var li = document.createElement('li');
    var text = document.createTextNode(b.title + '：'+ b.price + '원');
    li.appendChild(text);
    frag.appendChild(li);
  }

  document.getElementById('list').appendChild(frag);
}, false);
