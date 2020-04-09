// eval() // 가급적 쓰지 말 것.
// URI
var uri = 'http://example.com?name=이웅모&job=programmer&teacher';
var enc = encodeURI(uri);
var dec = decodeURI(enc);
console.log(enc);
console.log(dec);

// math
console.log(Math.abs(-1));          // 1
console.log(Math.round(Math.PI));   // 3
console.log(Math.ceil(Math.PI));    // 4
console.log(Math.sqrt(9));          // 3
console.log(Math.random());         // 0 ~ 1
const random = Math.floor(Math.random()*10 + 1); 
console.log(random);                // 1, 2, ..., 10
console.log(Math.pow(2,10));        // 1024

// date
const date = new Date();
console.log(date);

// regexp
// . : 임의의 문자 1개
// + : 최소 1번 이상
// |, [] : 또는(or)
// - : ~~~(범위)
// \d : 숫자 , \D : 숫자가 아닌
// \w : 숫자,문자 , \W : 숫자,문자가 아닌
// ^ : 문자열의 처음
// $ : 문자열의 끝
// \s : 공백    => [\t\r\n\v\f]
// [^] : not
// {} : 자리수
const targetStr = 'Is this all there is?';
let regexr = /[a-i]+/g;
regexr.test()
console.log(targetStr.match(regexr));
const regexr = /^[A-Za-z0-9]{4,10}$/;       // id
const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;            // email
const regexr = /^\d{3}-\d{3,4}-\d{4}$/;     // phone
