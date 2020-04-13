// 동기, 순차적으로(직렬) 실행
var func1 = function(){
    console.log('func1');
    func2();
}
var func2 = function(){
    console.log('func2');
    func3();
}
var func3 = function(){
    console.log('func3');
}
func1();
// 비동기, 병렬 실행, task가 끝나지 않아도 다음 task 실행

// Timmer, Ajax
var func1 = function(){
    setTimeout(function(){
        console.log('func1');
    }, 200);
    func2();
}
var func2 = function(){
    setTimeout(function(){
        console.log('func2');
    }, 100);
    func3();
}
var func3 = function(){
    setTimeout(function(){
        console.log('func3');
    }, 0);
}
func1();