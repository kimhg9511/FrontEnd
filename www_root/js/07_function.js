// 1.
function square(number){
    return number * number;
}
// var s = square(2);
// console.log(s);

// 2. -- 메모리 관리 측면에서 좋다(사용될 때 로드됨).
var foo = function multiply(a, b){
    return a * b;
}
// console.log(foo(10, 5));    // 50
// console.log(multiply(10,5));// error

// console.log(bar(10, 5));    // bar is not a function.
var bar = function(a, b){
    return a * b;
}

// 3. 잘 안쓰임
var square2 = new Function('number', 'return number * number');

// 함수형 언어 : 일급 객체
// 무명의 리터럴로 표현 가능
// 변수, 객체, 배열에 저장 가능
// 파라미터로 전달 가능
// 반환값으로 사용 가능
var increase = function(num){return ++num;}
var decrease = function(num){return --num;}
var predicates = {increase, decrease};
var makeCounter = function(f) {
    var num = 0;
    return function(a, b){
        num = f(num);
        console.log(a);
        console.log(b);
        return num;
    }
};
var increaser = makeCounter(predicates.increase);
// console.log(increaser(2,5));
// 매개변수가 모자라도 실행은 됨.(undefined로 초기화)
var foo = function(p1, p2){
    console.log(p1, p2);
};
// foo(1);
// call-by-value
var foo = function(primitive){
    primitive += 1;
    return primitive;
}
var x = 0;
console.log(foo(x));    // 1 
console.log(x);         // 0
// call-by-reference
var changeVal = function(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}
var num = 100;
var obj = {
    name: 'Lee', 
    gender: 'male'
}
changeVal(num, obj);
console.log(num);       // CBV - not changed 
console.log(obj);       // CBR - changed

// 복수 값의 리턴
function getSize(width, height, depth){
    var area = width * height;
    var volume = area * depth;
    return [area, volume] // 복수 값의 반환
}
console.log('area is ' + getSize(3, 2, 3)[0]);
console.log('area is ' + getSize(3, 2, 3)[1]);

//함수도 객체이다 - 속성을 가지고 있음 - length, name, prototype etc...
function square(number){
    console.log(square.arguments);
    return number * number;
}
square.x = 10;  // possible
square.y = 10;  // possible
// console.dir(square);
square(10);

// arguments 프로퍼티
// function.arguments로 접근하기보다는 Arguments 객체를 이용하여 접근하자
function sum() { // 가변 인자 함수
    if (!arguments.length) return 0;
  
    // arguments 객체를 배열로 변환
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
      return pre + cur;
    });
}
  // ES6
  // function sum(...args) { // 가변 파라미터
  //   if (!args.length) return 0;
  //   return args.reduce((pre, cur) => pre + cur); 람다 함수
  // }  
console.log(sum(1, 2, 3, 4, 5)); // 15

// __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입 객체에 접근할 수 있다.
// 객체 리터럴로 셍성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log({}.__proto__ === Object.prototype); // true
/* */
// 즉시 실행 함수 - 최초 한번만 호출되고 다시 호출할 수 없다.
// (초기화 처리 등에 사용)
(function myF(){
    var a = 3;
    var b = 5;
    console.log(a,b);
    return a*b;
}());

// 재귀함수 - factorial
function factorial(n){
    if(n < 2) return 1;
    return factorial(n-1) * n; 
}

// 콜백함수 - 특정 이벤트가 발생했을 때 시스템에서 호출
// var button = document.getElementById('myButton');
// button.addEventListener('click', function(){
//     alert('button clicked!');
// })
function doSomething(){
    var name = 'Lee';
    setTimeout(function(){
        console.log('My name is ' + name);
    },3000);
}
doSomething(); // ++ 클로저

/* 따로 알아보기


// 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, '__proto__'));
// undefined

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true
// 함수 객체의 프로토타입 객체는 Function.prototype이다.
console.log((function() {}).__proto__ === Function.prototype); // true
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));
// {value: {…}, writable: true, enumerable: false, configurable: false}

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(Object.getOwnPropertyDescriptor({}, 'prototype'));
// undefined
// 내부함수
function parent(param) {
    var parentVar = param;
    function child() {
      var childVar = 'lee';
      console.log(parentVar + ' ' + childVar); // Hello lee
    }
    child();
    console.log(parentVar + ' ' + childVar);
    // Uncaught ReferenceError: childVar is not defined
  }
  parent('Hello');
  function sayHello(name){
    var text = 'Hello ' + name;
    var logHello = function(){ console.log(text); }
    logHello();
  }
  
  sayHello('lee');  // Hello lee
  logHello('lee');  // logHello is not defined

따로 알아보기 */