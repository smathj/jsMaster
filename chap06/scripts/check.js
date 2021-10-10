document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = [];
    var foods = document.getElementsByName('food');

    for(var i = 0, len = foods.length; i < len; i++) {
      var food = foods.item(i);   // 체크박스는 item으로 꺼낸다
      if (food.checked) {         // 체크확인 
        result.push(food.value);  // 체크의 value값 가져오기
      }
    }
    window.alert(result.toString());
  }, false);
}, false);
