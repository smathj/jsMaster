function* myGenerator() {
  yield '가나다라마';
  yield '바사아자차';
  yield '타카파하갸';
}

for(let t of myGenerator()) {
  console.log(t);
}
