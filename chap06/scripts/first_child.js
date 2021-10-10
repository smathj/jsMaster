var s = document.getElementById('food');
var child = s.firstChild; // 첫번째 노드
// var child = s.firstElementChild; // 첫번째 노드

while (child) {
  if (child.nodeType === 1) {
    console.log(child.value);
  }
  child = child.nextSibling;  // 다음 형제 노드로 반복문 준비
  // child = child.nextElementSibling;  // 다음 형제 노드로 반복문 준비
  // console.log('다음 형제노드 : ' + child);
}

