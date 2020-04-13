// ecmascript(ES) + DOM = javascript
var foo = 123;
console.log(foo);   // 123
{
    var foo = 456;
}
console.log(foo);   // 456
// let : block level scope
let foo2 = 123;
console.log(foo2);  // 123
{
    let foo2 = 456;
}
console.log(foo2);  // 123
// Template literal(formatting)
const first = 'Ung-mo';
const last = 'Lee';
console.log('My name is ' + first + ' ' + last + '.');
console.log(`My name is ${first} ${last}.`);
// Arrow function this : 상위 스코프의 this
() => {}    // 매개변수가 없을 경우
x => {}     // 매개변수가 한 개
(x,y) => {} // 매개변수가 두 개
x => {return x*x}   //single line block
x => x * x;
() => {return {a: 1};}
() => ({a: 1});

() => {
    const x =10;
    return x * x;
}