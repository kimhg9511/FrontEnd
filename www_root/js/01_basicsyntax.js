//console.log('hello, world!');

//variable
var a=3;
var b=4;
var s1 = "Hello's world";   // don't need escape..
var s2 = 'Hello"s world';   
var obj = {name:'Lee', gender:'male'}; // key-value -> object **JSON
var arr = [1, 2, 3];
var foo = function foo2(a, b){ //function declared by variable 
    var c = a + b;
    return c;
}
function sum(a, b){ //function declared by name
    var c = a+b;
    return c;
}

//operation
var name = 'Lee';
var str = 'My name is' + name;
var color = 'red';
var type = typeof color; 
var foo3 = (5>3) && (2<4);
var today = new Date();
var foo = 1 + '10'; // 110, string;
var foo = 1 * 'aaa'; // NaN, number;

//statement have expression.
//test
console.log(type);
console.log(foo);
console.log(today);
