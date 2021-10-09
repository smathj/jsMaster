'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('입력값：' + value);
      } else {
        reject('입력이 비어 있다');
      }
    }, 500);
  });
}

asyncProcess('トクジロウ').then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});
