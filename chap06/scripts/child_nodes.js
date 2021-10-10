var s = document.getElementById('food');
var opts = s.childNodes;  // 모든 자식 노드

// console.log(opts);

for (var i = 0, len = opts.length; i < len; i++) {
  var opt = opts.item(i);
  if (opt.nodeType === 1) {
    console.log(opt.value);
  }
}
