'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('입력값： ' + value);
      } else {
        reject('입력이 비었다');
      }
    }, 500);
  });
}

asyncProcess('トクジロウ').then(function (response) {
  console.log(response);
  return asyncProcess('ニンサブロウ');
}).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('エラー： ' + error);
});
