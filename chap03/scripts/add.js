var dat = new Date(2017, 4, 15, 11, 40);
console.log(dat.toLocaleString());      // 2017. 5. 15. 오전 11:40:00

dat.setMonth(dat.getMonth() + 3);       // 3달 후, 
console.log(dat.toLocaleString());      // 2017. 8. 15. 오전 11:40:00

dat.setDate(dat.getDate() - 20);        // 20일 전
console.log(dat.toLocaleString());      // 2017. 7. 26. 오전 11:40:00

console.log('-----------------------------------------------------------');

var my_date = new Date();

var yoil = '';
switch(my_date.getDay()) {

    case 0 : 
        yoil = '일요일';
        console.log('오늘은 ' + yoil + ' 입니다');
        break;
    
    case 1 :
        yoil = '월요일';
        console.log('오늘은 ' + yoil + ' 입니다');
        break;
    case 2 :
        yoil = '화요일';
        console.log('오늘은 ' + yoil + ' 입니다');
        break;
    case 3 :
        yoil = '수요일';
        console.log('오늘은 ' + yoil + ' 입니다');
        break;
    case 4 :
        yoil = '목요일';
        console.log('오늘은 ' + yoil + ' 입니다');
        break;
    case 5 :
        yoil = '금요일';
        console.log('오늘은 ' + yoil + ' 입니다');
        break;    
    case 6 :
        yoil = '토요일';
        console.log('오늘은 ' + yoil + ' 입니다');
    break;
    default :
        console.log('요일이 잘못되었습니다.');
        break;
}



console.log(my_date.getFullYear() + '년' , my_date.getHours() + '월 ' + my_date.getMinutes() + '일');
console.log(yoil);