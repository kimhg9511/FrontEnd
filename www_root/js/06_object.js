// object {}, 함수 function(), 배열[], 정규표현식
// {key : value}
// 속성 & 기능
// 상속 구현 : prototype 객체 메소드를 상속
// key : ''포함한 모든 문자열, symbol 값 & value : 모든 값
// 객체의 함수 : 메소드
var eObj = {};
console.log(typeof eObj);

var person = new Object();
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

function Person(name, gender) {
    var married = true;
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! My name is ' + this.name);
    }
};

var person1 = new Person('Lee','male');
var person2 = new Person('Kim','female');

person1.sayHello();
console.log(person1['name']);
person2.sayHello();
// person1.married // undefined

var person = {
    'first-name' : 'Ung-mo',
    'last-name' : 'Lee',
    gender : 'male',
    sayHello : function(){
        console.log('Hello, my name is ' + this.name);
    }
};
person['last-name'] = 'Kim';
person.age = 20;
// delete person;
for (var prop in person){ //for([var key] in object)
    console.log(prop + ': ' + person[prop]);
}

var foo = {
    val:10
}
var bar = foo;
console.log(foo.val, bar.val);
console.log(foo === bar); // true
var bar = {
    val:10
}
console.log(foo.val, bar.val);
console.log(foo === bar); // false
