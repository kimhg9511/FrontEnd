// 진법 표현
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// number handled by realnumber
var bar = (1 === 1.0); // true

// string == array
var str = 'string'; // 유사 배열: 인덱스 값으로 변경은 불가능(read only)
for(var i=0;i<str.length;i++){
    console.log(str[i]);
}
str = str.toUpperCase(); // STRING
str = str.substring(0,3); // STR

// false == null == undefined

// undefined
var foo; // undefined

// null
// var ele = document.querySelector('.myElem'); 
// console.log(ele);
var foo = null;
console.log(typeof foo); // object

// symbol
var key = Symbol('key');
// console.log(typeof key); // symbol
var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value

// variable hoisting 이름만 위로 끌어옴..
console.log(foo2);      // console.log = ERROR
var foo2 = 123;         // console.log = undefined
console.log(foo2);      // console.log = 123
{
    var foo2 = 456;     // 블록 외부에서도 사용이 가능, 함수 레벨 스코프
}
console.log(foo2);      // console.log = 456
// function
console.log(func());    // console.log = ERROR
function func(){        // console.log = abc        
    return 'abc';
}
console.log(func());    // console.log = abc
