
document.querySelector('.myButton').addEventListener('click',function(){
    alert('Clicked!');
});
// inline 연결
function myHandler(){
    alert("Button clicked... do not use me!");
}
// property로 연결
const btn = document.querySelector('.btn');
// console.dir(btn);
btn.onclick = function(){
    alert('Button clicked(property)');
}
// addEventListener로 연결
btn.addEventListener('click', function(){
    alert('Button clicked(listener)');
});
// // 바람직하지 않은 방법
// const input = document.querySelector('input[type=text]');
// const msg = document.querySelector('.message');
// input.addEventListener('blur',function(){
//     if(input.value.length === 0){
//         // msg.innerHTML = '이름을 입력해 주세요';
//         alert('이름은 2자이상');
//         setTimeout(function(){
//             input.focus();
//         }, 10);
//     } else if(input.value.length < 2){
//         msg.innerHTML = '이름을 2자이상 입력해 주세요';
//         input.focus();
//     } else{
//         msg.innerHTML = '';
//     }
// });

// 권장(비즈니스 - 이벤트 분리)
const MIN_USER_NAME_LENGTH = 2;
const input = document.querySelector('input[type=text]');
const msg = document.querySelector('.message');
function checkUserNameLength(n){
    if(input.value.length < n){
        msg.innerHTML = '이름은 ' + n + '자 이상이어야 합니다.';
        alert('이름은 ' + n + '자 이상');
    } else{
        msg.innerHTML = '';
    }
}
input.addEventListener('blur', function(){
    // 이벤트 핸들러 내부에서 호출, 인수를 전달
    checkUserNameLength(MIN_USER_NAME_LENGTH);
})