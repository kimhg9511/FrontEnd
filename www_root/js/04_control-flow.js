// 홀짝판별
var x = 2;
var result;
var con = x % 2;
// if for
if(con){
    result = '홀수';
}else{
    result = '짝수';
}
console.log(result);
//switch/case
switch(con){
    case 0:
        console.log('짝수');
        break;   
    case 1:
        console.log('홀수');
        break;
    default:
        console.log(con)
}
// for
for(var i=0;i<2;i++){   // 0 1 2
    console.log(i);     // 0 1
}
console.log(i);         // 2
var i = 0;

// while
while(i<2){
    console.log(i);
    i++;
}
var i = 0;

// do-while
do{
    console.log(i)
    i++;
}while(i<2);

console.log(Infinity + '');