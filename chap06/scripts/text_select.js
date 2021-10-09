document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    console.log(name.value);
    //name.value = '정시온';
  }, false);
}, false);