document.addEventListener('DOMContentLoaded', function() {
  var setCheckValue = function(name, value) {
    var elems = document.getElementsByName(name); // 체크 박스 노드 전체 가져오기

    for(var i = 0, len = elems.length; i < len; i++) {
      var elem = elems.item(i);                   // 체크 박스 노드 하나씩 꺼낸다
      if (value.indexOf(elem.value) > -1) {       // '만두' or '불고기'가 존재하면
        elem.checked = true;                      // 체크해버린다
      }
    }
  };
  
  setCheckValue('food', ['만두', '불고기']);
}, false);
