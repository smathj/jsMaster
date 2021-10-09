document.addEventListener('DOMContentLoaded', function() {
  var li = document.getElementsByTagName('li');
  console.log('변경전:' + li.length);

  var ul = document.getElementById('list');
  ul.appendChild(document.createElement('li'));
  console.log('변경후:' + li.length);
}, false);
