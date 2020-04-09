function outerFunc(){
    var x = 10;
    var innerFunc = function(){ // 내부 함수, 상위 스코프의 변수를 사용 가능
        console.log(x);
    }
    return innerFunc;
}
var inner = outerFunc();
// innerFunc(); // innerFunc is not defined.
// console.log(x); // x is not defined.
inner();    // 본래대로라면 사용할 수 없는 내부함수를 사용하여 
            // 사용할 수 없는 지역변수를 사용하고 있음.