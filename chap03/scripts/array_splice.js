var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];

console.log(data.splice(3, 2, 'Yamada', 'Suzuki')); // 3번인덱스 포함 2개 교체
// [ 'Hio', 'Saitoh' ]

console.log(data);
// [ 'Sato', 'Takae', 'Osada', 'Yamada', 'Suzuki' ]


console.log('-----------------------------------------------------');


console.log(data.splice(3, 2)); // 3번 인덱스부터 2개 짜르기(원본에서 파괴)
// [ 'Yamada', 'Suzuki' ]

console.log(data);
// [ 'Sato', 'Takae', 'Osada' ]


console.log('-----------------------------------------------------');



console.log(data.splice(1, 0, 'Tanaka'));   // 1번 인덱스 뒤에 'Tanaka' 삽입
// []
console.log(data);
// [ 'Sato', 'Tanaka', 'Takae', 'Osada' ]