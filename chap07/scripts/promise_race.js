for (var key in Promise) {
    console.log(key);
    }

function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値： ${value}`);
      } else {
        reject('입력이 비었다');
      }
    }, 500);
  });
}

Promise.race([
  asyncProcess('토크맨'),
  asyncProcess('패널들'),
  asyncProcess('링링')
]).then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`오류： ${error}`);
  }
);