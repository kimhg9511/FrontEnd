$('input[type="text"]').on('focus',function(){
    if(this.value==="아이디"||this.value==="비밀번호"){
    this.value= "";    
    this.style.color = "#333";
    }
    if(this.id === "upw"){
        this.type = "password";
    };
});

