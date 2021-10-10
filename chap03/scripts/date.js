//                  년   월  일  시  분  초  밀리초
var dat = new Date(2016, 11, 25, 11, 37, 15, 999);

console.log(dat);                       // 2016-12-25T02:37:15.999Z
console.log(dat.getFullYear());         // 2016
console.log(dat.getMonth());            // 11
console.log(dat.getDate());             // 25
console.log(dat.getDay());              // 0
console.log(dat.getHours());            // 11
console.log(dat.getMinutes());          // 37
console.log(dat.getSeconds());          // 15
console.log(dat.getMilliseconds());     // 999
console.log(dat.getTime());             // 1482633435999
console.log(dat.getTimezoneOffset());   // -540

console.log(dat.getUTCFullYear());      // 2016
console.log(dat.getUTCMonth());         // 11
console.log(dat.getUTCDate());          // 25
console.log(dat.getUTCDay());           // 0
console.log(dat.getUTCHours());         // 2
console.log(dat.getUTCMinutes());       // 37
console.log(dat.getUTCSeconds());       // 15
console.log(dat.getUTCMilliseconds());  // 999

var dat2 = new Date();
dat2.setFullYear(2017);                 
dat2.setMonth(7);                       
dat2.setDate(5);                        
dat2.setHours(11);                      
dat2.setMinutes(37);                    
dat2.setSeconds(15);                    
dat2.setMilliseconds(513);              

console.log(dat2.toLocaleString());             // 2017. 8. 5. 오전 11:37:15
console.log(dat2.toUTCString());                // Sat, 05 Aug 2017 02:37:15 GMT
console.log(dat2.toDateString());               // Sat Aug 05 2017
console.log(dat2.toTimeString());               // 11:37:15 GMT+0900 (대한민국 표준시)
console.log(dat2.toLocaleDateString());         // 2017. 8. 5.
console.log(dat2.toLocaleTimeString());         // 오전 11:37:15
console.log(dat2.toJSON());                     // 2017-08-05T02:37:15.513Z

console.log(Date.parse('2016/11/05'));          // 1478271600000
console.log(Date.UTC(2016, 11, 5));             // 1480896000000
console.log(Date.now());                        // 1633798775942
