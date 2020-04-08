
var x = 5, result;
result = x++;
console.log(result, x); // result:5, x:6
result = ++x;
console.log(result, x); // result:7, x:7

1 + 2 //3
1 + true // 2
1 + false // 1
true + false // 1
1 + null // 1
1 + undefined // NaN

// console.log(1 === '1');         // false
// console.log(1 == '1');          // true
// console.log('' == '0');         // false
// console.log(0 == '');           // true
// console.log(0 == '0')           // true

// console.log(false == 'false')   // false
// console.log(false == '0')       // true
// console.log(false == undefined) // false
// console.log(false == null)      // false
// console.log(null == undefined)  // true

// console.log(NaN === NaN)        // false
// console.log(isNaN(NaN))         // true

// literal
var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// statement
if(x % 2)   result = '홀수';
else        result = '짝수';

// typeof
console.log(typeof null);           // object
console.log(typeof undefined);      // undefined
console.log(typeof {});             // function
console.log(typeof function(){});   // function
console.log(typeof NaN);            // number
console.log(typeof undeclared);     // undefined