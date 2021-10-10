var data = JSON.parse('{ "hoge": 1, "foo": 2 }');

console.log(data);

console.log(data.hoge);


/*
JSON
    - 프로퍼티 명은 "" 로 감싸야한다.
    - 배열/객체 아래의 요소 끝부분은 콤마로 종료해선 안된다.
    - 0으로 시작하는 숫자는 금지다.


배열이나 객체를 JSON형태로 문자열로 변환하려면
JSON.stringify(배열);
JSON.stringify(객체);
로하면 된다

*/

