$('input[type="text"]').on('focus',function(){
    if(this.value==="아이디"||this.value==="비밀번호"){
    this.value= "";    
    this.style.color = "#222";
    }
    if(this.id === "upw"){
        this.type = "password";
    };
});

$('#login').on('click',function(){
    var id = $('#uid').val();
    var pw = $('#upw').val();

    if(id.length === 0){
        alert("아이디는 필수 입력 입니다.")
    } else if(pw.length === 0){
        alert("비밀번호는 필수 입력 입니다.")
    } else{
        location.href = '../index1.html';
    }
    location.href = '../index1.html';
})