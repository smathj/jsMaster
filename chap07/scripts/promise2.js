function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`입력값： ${value}`);
      } else {
        reject('입력이 비었다');
      }
    }, 500);
  });
}

asyncProcess('토크맨')
.then(
  response => {
    console.log(response);
    return asyncProcess('패널들');
  }
)
.then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`오류： ${error}`);
  }
);