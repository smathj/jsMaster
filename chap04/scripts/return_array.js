function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];  // 배열에 최대,최소 담아서 리턴
}


let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result);


let [max, min] = getMaxMin(10, 35, -5, 78, 0);  // 배열 리턴을 배열로 받뉍[가독성]

console.log(max);
console.log(min);


// 최소값만 받을떄
// let [,min] = getMaxMin(10, 35, -5, 78, 0);
// console.log(min);

