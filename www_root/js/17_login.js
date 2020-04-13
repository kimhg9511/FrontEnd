function login(){   // button element 사용
    var loginForm = document.loginForm;
    var uid = loginForm.uid;
    var upw = loginForm.upw;
    var repw = loginForm.repw;
    if(uid.value.length == 0){
        alert('id를 입력해 주세요');
        uid.focus();
    }else if(upw.value.length == 0){
        alert('password를 입력해 주세요');
        upw.focus();
    }else if(upw.value !== repw.value){
        alert('password 2개가 일치해야 합니다.');
        upw.focus();
    }else{
        loginForm.submit();
    }
}
function loginSubmit(){ // submit element 사용
    var loginForm = document.loginForm;
    var uid = loginForm.uid;
    var upw = loginForm.upw;
    if(uid.value.length == 0){
        alert('id를 입력해 주세요');
        uid.focus();
        return false;
    }else if(upw.value.length == 0){
        alert('password를 입력해 주세요');
        upw.focus();
        return false;
    }else{
        // loginForm.submit();
        return true;
    }
}
function login2(){
    var loginForm = document.querySelector('#loginForm');
    var uid = document.querySelector('#uid');
    var upw = document.querySelector('#upw');
    var repw = document.querySelector('#repw');
    var emid = document.querySelector('#emid');
    var empw = document.querySelector('#empw');
    var emrepw = document.querySelector('#emrepw');
    if(uid.value.length == 0){
        emid.innerHTML = 'id를 입력해 주세요';
        uid.focus();
    }else if(upw.value.length == 0){
        empw.innerHTML = 'password를 입력해 주세요';
        emid.innerHTML = '';
        upw.focus();
    }else if(upw.value !== repw.value){
        emrepw.innerHTML = 'password 2개가 일치해야 합니다.';
        emid.innerHTML = '';
        empw.innerHTML = '';
        upw.focus();
    }else{
        loginForm.submit();
        emid.innerHTML == '';
        empw.innerHTML == '';
        emrepw.innerHTML == '';
    }
}
document.querySelector('#loginBtn').addEventListener('click', login2);