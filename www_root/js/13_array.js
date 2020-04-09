var arr = [];
console.log(arr[0]); // undefined

arr = ['zero', 'one', 'two', 'three', function name(){return 0;}];
console.log(arr[1]); // one
console.log(arr.length); // 4

console.log(typeof arr); // object
var func = arr[4];
console.log(func());

//JSON
var text = '{"employees":[';
text += '{"firstName":"Joo","lastName":"Duu"}';
text += ']}';

var obj = JSON.parse(text);
console.log('obj type : ' + typeof obj);
console.log(obj);
console.log(obj.employees[0].firstName);
console.log(obj.employees[0]['lastName']);







