document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('key').addEventListener('keydown', function(e) {
    console.log('키 코드:' + e.keyCode);
  }, false);
}, false);
