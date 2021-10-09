document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function(e) {
    var target = e.target;
    console.log('발생원:' + target.nodeName + '/' + target.id);
    console.log('종류:' + e.type);
  }, false);
}, false);
