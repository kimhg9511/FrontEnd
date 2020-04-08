Infinity + '' // "Infinity"
// (Symbol()) + '' Error

1 / 'one' // NaN
+undefined // NaN

Boolean(NaN) // false
Boolean(Infinity) // true
Boolean(undefined) // false
!! {} // true
!! [] // true

// short-circuit evaluation
'Cat' || 'Dog' // t || t -> 'Cat'
false || 'Dog' // 'Dog'
'Cat' || false // 'Cat'

'Cat' && 'Dog'; // t && t -> 'Dog'
false && 'Dog' // false
'Cat' && false // false

var elem = null;
// console.log(elem.value); // ERROR
console.log(elem && elem.value); // null

function getStringLength(str){
    str = str || '';
    return str.length;
}

//after ES6.. parameter default
function getStringLength(str = ''){
    return str.length;
}

var a = getStringLength();
var b = getStringLength('hi');
console.log(a);
console.log(b);