//                  년   월  일  시  분 
var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());  // 2017. 5. 15. 오전 11:40:00

dat.setMonth(dat.getMonth() + 1);   // 1달 후
dat.setDate(0);                     // 0일 (저번달 말일)

console.log(dat.toLocaleString());  // 2017. 5. 31. 오전 11:40:00

// 즉 , 시간을 '다음달 0일'로 수정하면 '저번달 말일'이 된다
