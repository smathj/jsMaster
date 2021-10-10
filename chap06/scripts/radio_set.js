document.addEventListener('DOMContentLoaded', function() {
  var setRadioValue = function(name, value) {
    var elems = document.getElementsByName(name); // 모든 라디오 노드 가져온다

    for(var i = 0, len = elems.length; i < len; i++) {
      var elem = elems.item(i);   // 첫번째 노드
      if (elem.value === value) { // 첫번째 노드의 value값이 = 만두이면 
        elem.checked = true;      // 체크
        break;                    // 멈춰
      }
    }
  };
  
  setRadioValue('food', '만두');  // 실행
}, false);
