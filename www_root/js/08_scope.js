var x = 'global';
function foo () {
    var x = 'function scope';
    console.log(x);
}
foo();          // 'function scope'
console.log(x); // 'global'
// let
var x = 0;          // window
{
    var x = 1;
    console.log(x); // 1
}
console.log(x);     // 1
let y = 0;
{
    let y = 1;
    console.log(y)  // 1
}
console.log(y)      // 0
if(true){
    var x = 5;
}
console.log(x);     // 5

// 암묵적 전역
console.log('v = ' + v)      // undefined
// console.log(z)      // z is not defined.
var v = 10;         // 전역 변수
function foo(){
    w = 20;         // 전역 프로퍼티(windows.w), 암묵적 전역
    // var w = 20;  // 지역 변수
    console.log(v + w);
}
foo();              // 30
console.log(w);     // 20

// 최소한의 전역 변수 사용
var MYAPP = {};
MYAPP.student = {
    name: 'Lee',
    gender: 'male'
}
console.log(MYAPP.student.name);
