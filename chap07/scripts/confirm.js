document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fm').addEventListener('submit', function(e) {
    if (!window.confirm('페이지를 송신해도 좋겠습니까?')) {
      e.preventDefault();
    }
  }, false)
}, false);
