document.addEventListener('DOMContentLoaded', function() {
  var data = {
    title: 'Java포켓 레퍼런스',
    price: 26800,
    handleEvent: function() {
      console.log(this.title + '/' + this.price + '원');
    }
  };

  document.getElementById('btn').addEventListener(
    'click', data, false);
}, false);
