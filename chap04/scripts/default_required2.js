function required() {
  throw new Error('인수가 부족합니다.');
}

function hoge(value = required()) {
  return value;
}

hoge();
