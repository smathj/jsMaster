document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#inner리스너가 발생하였다.');
    e.stopPropagation();
    //e.stopImmediatePropagation();
    //e.preventDefault();
  }, false);

  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('#inner리스너2가 발생하였다.');
  }, false);

  document.getElementById('outer').addEventListener('click', function(e) {
    window.alert('#outer리스너가 발생하였다.');
  }, false);
}, false);
